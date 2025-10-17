'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
})

type NewsletterFormData = z.infer<typeof newsletterSchema>

interface NewsletterSignupProps {
  variant?: 'inline' | 'card'
  placeholder?: string
  buttonText?: string
}

export function NewsletterSignup({
  variant = 'inline',
  placeholder = 'your@email.com',
  buttonText = 'Subscribe',
}: NewsletterSignupProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit = async (data: NewsletterFormData) => {
    setError(null)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Failed to subscribe')
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setError('Something went wrong. Please try again.')
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg">
        <span className="text-2xl">✓</span>
        <p className="font-medium">You are subscribed! Check your email.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className={variant === 'inline' ? 'flex gap-2' : 'space-y-3'}>
        <div className="flex-1">
          <Input
            type="email"
            {...register('email')}
            placeholder={placeholder}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <Button type="submit" disabled={isSubmitting} className="flex-shrink-0">
          {isSubmitting ? (
            'Subscribing...'
          ) : (
            <>
              <Mail className="w-4 h-4 mr-2" />
              {buttonText}
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
