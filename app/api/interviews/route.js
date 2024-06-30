import { NextResponse } from 'next/server';
import { db } from '@/utils/db';

export async function GET() {
  try {
    const interviews = await db.query.Interview.findMany();
    return NextResponse.json(interviews);
  } catch (error) {
    console.error('Error fetching interviews:', error);
    return NextResponse.json({ error: 'Failed to fetch interviews', details: error.message }, { status: 500 });
  }
}
