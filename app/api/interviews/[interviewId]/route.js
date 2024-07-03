import { NextResponse } from 'next/server';
import { db } from '@/utils/db';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET(_req, { params }) {
  try {
    const interview = await db.query.Interview.findFirst({
      where: (Interview, { eq }) => eq(Interview.interviewId, params.interviewId)
    });

    if (!interview) {
      return NextResponse.json({ error: 'Interview not found' }, { status: 404 });
    }

    return NextResponse.json({ interview });
  } catch (error) {
    console.error('Error fetching interview:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
