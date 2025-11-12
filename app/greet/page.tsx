import { kv } from '@vercel/kv';
import { redirect } from 'next/navigation';

// Opt out of static generation. This page will be server-rendered.
export const dynamic = 'force-dynamic';

export default async function GreetPage() {
  let destination = null;

  try {
    destination = await kv.get<string>("greet");
  } catch (error) {
    console.error(error);
  }

  // 2. If the link exists, redirect to it
  if (destination) {
    // Use a permanent (308) or temporary (307) redirect
    // For QR codes you might change, temporary is safer.
    redirect(destination);
  }

  // 3. If the link does not exist, send to home page
  redirect('/');
}