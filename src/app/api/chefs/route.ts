import { NextResponse } from 'next/server';
import data from '@/data/chefs.json';

export async function GET() {
  return NextResponse.json(data);
}
