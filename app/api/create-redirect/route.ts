'use server'

import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { slug, destination } = await request.json();

    // --- Validation ---
    if (!slug || !destination) {
      return NextResponse.json(
        { error: 'Missing slug or destination' },
        { status: 400 }
      );
    }

    // Optional: Add more validation (e.g., check if destination is a valid URL)
    try {
      new URL(destination);
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid destination URL' },
        { status: 400 }
      );
    }
    
    // --- Security (Very Important!) ---
    // Anyone can call this endpoint. You MUST secure it.
    // For now, we'll use a simple secret key.
    // In a real app, use authentication (e.g., NextAuth.js, Clerk).
    const authHeader = request.headers.get('Authorization');
    if (authHeader !== `Bearer ${process.env.YOUR_SECRET_API_KEY}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // --- Create the link ---
    // kv.set will create or overwrite the link
    await kv.set(slug, destination);

    // --- Respond with success ---
    return NextResponse.json({
      message: 'Link created/updated successfully!',
      slug: slug,
      destination: destination,
      url: `${process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'}/${slug}`,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}