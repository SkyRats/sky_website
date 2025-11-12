import { redirect } from 'next/navigation';
import { createClient } from "redis";

// FIXME: BUG ON PARAM FROM URL RETRIEVAL

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function RedirectPage({ params,}: { params: Promise<{ slug: string }>}) {
  const { slug } = await params;

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

  try {
      if (!slug) {
        console.log("No slug provided. Redirecting to home.");
        redirect('/');
      }

      if (!redisUrl) {
        console.error("REDIS_URL is not set.");
        redirect('/');
      }

      await redis.connect();
      console.log(`Redis connected. Fetching key: '${slug}'`);

      const destination = await redis.get(slug);

      if (destination) {
        console.log(`Success! Found destination: "${destination}". Redirecting.`);
        redirect(destination);
      } else {
        console.log(`key '${slug}' not found in Redis. Redirecting to '/' (home).`);
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

      console.error(`Some error happended: ${error}`);
      redirect('/');
      
    } finally {
      // This will run no matter what (success, error, or redirect).
      if (redis && redis.isOpen) {
        console.log("Closing Redis connection.");
        await redis.quit();
      }
    }
}

// Simplified the props type, which is also good practice
export async function SlugPage({ params }: { params: { slug: string } }) {
  
  let redis: any = null;

  // OUTER try...catch:
  // Its ONLY job is to catch and re-throw the NEXT_REDIRECT error
  // to let Next.js handle the redirection.
  try {

    // INNER try...catch...finally:
    // This handles YOUR application logic (i.e., Redis connection).
    

  } catch (error) {
    // This is the OUTER catch block.
    // It will catch ALL redirect() calls from the 'try' and 'catch'
    // blocks above.
    if (
      error &&
      typeof error === 'object' &&
      'digest' in error &&
      typeof error.digest === 'string' &&
      error.digest.startsWith('NEXT_REDIRECT')
    ) {
      // This is expected. Re-throw the error so Next.js can
      // complete the redirection.
      throw error;
    }

    // If any other unexpected error makes it out here
    console.error("A critical, unhandled error occurred:", error);
    // We can't safely redirect here, so let Next.js show an error page
  }
}