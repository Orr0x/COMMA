import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const caseStudySchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  client: z.string().min(1),
  industry: z.string().min(1),
  color: z.string().default('purple'),
  tagline: z.string().min(1),
  overview: z.string().min(1),
  challenge: z.string().min(1),
  solution: z.string().min(1),
  results: z.string().min(1),
  testimonial: z.string().optional(),
  coverImage: z.string().optional(),
  published: z.boolean(),
})

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // TODO: Add session check when NextAuth is properly configured

    const body = await request.json()
    const validatedData = caseStudySchema.parse(body)

    const caseStudy = await prisma.caseStudy.update({
      where: { id: params.id },
      data: validatedData,
    })

    return NextResponse.json(caseStudy)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }

    return NextResponse.json(
      { error: 'Failed to update case study' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // TODO: Add session check when NextAuth is properly configured

    await prisma.caseStudy.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete case study' },
      { status: 500 }
    )
  }
}
