'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  FileText,
  Briefcase,
  MessageSquare,
  Settings,
  LogOut,
  LayoutDashboard,
  Wrench,
  FolderOpen,
  Sparkles,
} from 'lucide-react'

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/dashboard/blog', label: 'Blog Posts', icon: FileText },
  { href: '/admin/dashboard/case-studies', label: 'Case Studies', icon: Briefcase },
  { href: '/admin/dashboard/testimonials', label: 'Testimonials', icon: MessageSquare },
  { href: '/admin/dashboard/ai-tools', label: 'AI Tools', icon: Sparkles },
  { href: '/admin/dashboard/services', label: 'Services', icon: Wrench },
  { href: '/admin/dashboard/resources', label: 'Resources', icon: FolderOpen },
  { href: '/admin/dashboard/settings', label: 'Settings', icon: Settings },
]

export function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    // TODO: Implement proper logout when auth is configured
    router.push('/admin/login')
  }

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/admin/dashboard" className="font-bold text-xl">
              COMMA Studio Admin
            </Link>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  )
}
