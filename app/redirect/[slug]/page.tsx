import { kv } from '@vercel/kv';
import { redirect } from 'next/navigation';
import { notFound } from 'next/navigation';

// Opt out of static generation. This page will be server-rendered.
export const dynamic = 'force-dynamic';

type Props = {
  params: {
    slug: string;
  };
};

export default async function SlugPage({ params }: Props) {
  const { slug } = params;

  // 1. Fetch the destination URL from Vercel KV
  // The 'as string' type assertion is safe here if you trust your API
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

  // 3. If the link does not exist, show a 404 page
  notFound();
}