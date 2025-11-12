import { redirect } from 'next/navigation';
import { createClient } from "redis";

// This ensures the page is dynamic and not cached by Next.js
export const dynamic = 'force-dynamic';

// This tells the browser and CDNs not to cache
export const revalidate = 0;

export default async function GreetPage() { 
  // 1. Get the REDIS URL
  const redisUrl = process.env.REDIS_URL;

  if (!redisUrl) {
    console.error("REDIS_URL is not set.");
    redirect('/');
  }

  // 2. Create the client
  const redis = createClient({
    url: redisUrl
  });

  // 3. Use try...finally
  try {
    await redis.connect();
    console.log("Redis connected. Fetching key: 'greet'");

    // 4. Fetch the destination
    const destination = await redis.get('greet');

    if (destination) {
      // Success!
      console.log(`Success! Found destination: "${destination}". Redirecting.`);
      redirect(destination);
    } else {
      // Slug not found
      console.log("Key 'greet' not found in Redis. Redirecting to '/' (home).");
      redirect('/');
    }

  } catch (error) {
    // NEW: Check if the error is just an expected redirect
    // We check the 'digest' property for the specific NEXT_REDIRECT code
    if (
      error &&
      typeof error === 'object' &&
      'digest' in error &&
      typeof error.digest === 'string' &&
      error.digest.startsWith('NEXT_REDIRECT')
    ) {
      throw error; // Re-throw the redirect error so Next.js can handle it
    }

    // This code will only run for *actual* (non-redirect) errors now
    console.error("Redis connection or get failed:", error);
    redirect('/');

  } finally {
    // 5. Always disconnect
    if (redis.isOpen) {
      console.log("Closing Redis connection.");
      await redis.quit();
    }
  }
}