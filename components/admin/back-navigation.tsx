import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

interface BackNavigationProps {
  backTo: string
  backLabel: string
  showDashboard?: boolean
}

export function BackNavigation({ backTo, backLabel, showDashboard = true }: BackNavigationProps) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <Link href={backTo}>
        <Button variant="ghost" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {backLabel}
        </Button>
      </Link>
      {showDashboard && (
        <Link href="/admin/dashboard">
          <Button variant="ghost" size="sm">
            Dashboard
          </Button>
        </Link>
      )}
    </div>
  )
}
