'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Something went wrong. Please try emailing me directly at hello@commastudio.co.uk')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setError('Something went wrong. Please try emailing me directly at hello@commastudio.co.uk')
    }
  }

  return (
    <section className="py-20 bg-gray-900 text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Talk About Your Project</h2>
          <p className="text-xl text-gray-300">
            No sales pitch. No corporate waffle. Just an honest chat about whether we're a good fit.
            If I can help, great. If not, I'll tell you straight.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 bg-gray-800 border-gray-700">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-2 text-white">Message Received!</h3>
              <p className="text-gray-300">
                I'll review your challenge and get back to you within 24 hours.
                In the meantime, check out my{' '}
                <a href="https://www.linkedin.com/in/cain-lewis-6219a110b/" className="text-primary-400 hover:underline">
                  LinkedIn
                </a>{' '}
                for more copywriting insights.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <div>
                <Label htmlFor="name" className="text-white">
                  What's your name? *
                </Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder="First name works"
                  className="mt-2 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  Where should I send my reply? *
                </Label>
                <Input
                  id="email"
                  {...register('email')}
                  type="email"
                  placeholder="your.email@company.com"
                  className="mt-2 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="company" className="text-white">
                  What brand are you building?
                </Label>
                <Input
                  id="company"
                  {...register('company')}
                  placeholder="Company name"
                  className="mt-2 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
                {errors.company && (
                  <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="text-white">
                  What do you need help with? *
                </Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder="Website? Ads? Email campaigns? Product launch? Tell me about your project and what you're hoping to achieve. The more details, the better."
                  rows={6}
                  className="mt-2 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-center text-sm text-gray-400">
                Usually reply within 24 hours. Promise I'm not a robot.
              </p>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}
