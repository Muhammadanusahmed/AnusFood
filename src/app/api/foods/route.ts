import { NextResponse } from 'next/server';
import data from '@/data/foods.json';

export async function GET() {
  return NextResponse.json(data);
}
