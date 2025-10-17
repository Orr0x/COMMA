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

export async function POST(request: NextRequest) {
  try {
    // TODO: Add session check when NextAuth is properly configured
    // const session = await getServerSession(authOptions)
    // if (!session) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }

    const body = await request.json()
    const validatedData = caseStudySchema.parse(body)

    // Check if slug already exists
    const existing = await prisma.caseStudy.findUnique({
      where: { slug: validatedData.slug },
    })

    if (existing) {
      return NextResponse.json(
        { error: 'A case study with this slug already exists' },
        { status: 400 }
      )
    }

    const caseStudy = await prisma.caseStudy.create({
      data: validatedData,
    })

    return NextResponse.json(caseStudy, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }

    return NextResponse.json(
      { error: 'Failed to create case study' },
      { status: 500 }
    )
  }
}
