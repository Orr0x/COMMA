import { LRUCache } from 'lru-cache'

// Rate limit configuration
const RATE_LIMIT_CONFIG = {
  // Maximum requests per time window
  maxRequests: parseInt(process.env.AI_RATE_LIMIT_MAX || '20'),
  // Time window in milliseconds (default: 1 hour)
  windowMs: parseInt(process.env.AI_RATE_LIMIT_WINDOW_MS || '3600000'),
  // Cache max entries
  maxCacheSize: 500,
}

interface RateLimitEntry {
  count: number
  resetAt: number
}

// Create cache for rate limiting
const cache = new LRUCache<string, RateLimitEntry>({
  max: RATE_LIMIT_CONFIG.maxCacheSize,
  ttl: RATE_LIMIT_CONFIG.windowMs,
})

export interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetAt: number
  limit: number
}

/**
 * Check if a request is allowed based on rate limiting
 * @param identifier - Unique identifier (e.g., user ID, IP address, session ID)
 * @returns RateLimitResult with allowed status and metadata
 */
export function checkRateLimit(identifier: string): RateLimitResult {
  const now = Date.now()
  const entry = cache.get(identifier)

  // If no entry or entry has expired, create new one
  if (!entry || now >= entry.resetAt) {
    const newEntry: RateLimitEntry = {
      count: 1,
      resetAt: now + RATE_LIMIT_CONFIG.windowMs,
    }
    cache.set(identifier, newEntry)

    return {
      allowed: true,
      remaining: RATE_LIMIT_CONFIG.maxRequests - 1,
      resetAt: newEntry.resetAt,
      limit: RATE_LIMIT_CONFIG.maxRequests,
    }
  }

  // Check if limit exceeded
  if (entry.count >= RATE_LIMIT_CONFIG.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: entry.resetAt,
      limit: RATE_LIMIT_CONFIG.maxRequests,
    }
  }

  // Increment count
  entry.count++
  cache.set(identifier, entry)

  return {
    allowed: true,
    remaining: RATE_LIMIT_CONFIG.maxRequests - entry.count,
    resetAt: entry.resetAt,
    limit: RATE_LIMIT_CONFIG.maxRequests,
  }
}

/**
 * Reset rate limit for a specific identifier
 * @param identifier - Unique identifier to reset
 */
export function resetRateLimit(identifier: string): void {
  cache.delete(identifier)
}

/**
 * Get current rate limit status without incrementing
 * @param identifier - Unique identifier to check
 * @returns Current rate limit status
 */
export function getRateLimitStatus(identifier: string): RateLimitResult {
  const now = Date.now()
  const entry = cache.get(identifier)

  if (!entry || now >= entry.resetAt) {
    return {
      allowed: true,
      remaining: RATE_LIMIT_CONFIG.maxRequests,
      resetAt: now + RATE_LIMIT_CONFIG.windowMs,
      limit: RATE_LIMIT_CONFIG.maxRequests,
    }
  }

  return {
    allowed: entry.count < RATE_LIMIT_CONFIG.maxRequests,
    remaining: Math.max(0, RATE_LIMIT_CONFIG.maxRequests - entry.count),
    resetAt: entry.resetAt,
    limit: RATE_LIMIT_CONFIG.maxRequests,
  }
}

/**
 * Get identifier from request (user ID, IP, or session)
 * Priority: User ID > Session ID > IP Address
 */
export function getIdentifier(request: Request): string {
  // Try to get user from session (if authenticated)
  // For now, use IP address or a combination
  const forwardedFor = request.headers.get('x-forwarded-for')
  const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'

  // In production, combine with user ID if available
  return `ai:${ip}`
}

/**
 * Format time remaining until reset
 */
export function formatResetTime(resetAt: number): string {
  const now = Date.now()
  const diff = resetAt - now

  if (diff <= 0) return 'now'

  const minutes = Math.floor(diff / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)

  if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`
  }

  return `${seconds} second${seconds !== 1 ? 's' : ''}`
}
