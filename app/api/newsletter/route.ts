import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Validation schema
const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the data
    const validatedData = newsletterSchema.parse(body)

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { success: false, error: 'Newsletter service not configured. Please try again later.' },
        { status: 500 }
      )
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    // For now, just send a notification email
    // In production, you'd integrate with a newsletter service like ConvertKit, Mailchimp, etc.
    await resend.emails.send({
      from: 'COMMA Studio Website <onboarding@resend.dev>',
      to: ['hello@commastudio.co.uk'],
      subject: 'New Newsletter Signup',
      html: `
        <h2>New Newsletter Signup</h2>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p>Add this email to your newsletter list.</p>
      `,
      text: `New Newsletter Signup: ${validatedData.email}`,
    })

    // TODO: Add to newsletter service (ConvertKit, Mailchimp, Beehiiv, etc.)
    // Example for ConvertKit:
    // await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     api_key: process.env.CONVERTKIT_API_KEY,
    //     email: validatedData.email,
    //   }),
    // })

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter signup error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
