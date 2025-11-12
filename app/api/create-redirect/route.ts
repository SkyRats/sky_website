import { createClient } from 'redis'; // Import createClient
import { NextResponse } from 'next/server';

// --- Initialize Redis Client ---
const redis_url = process.env.KV_URL || process.env.REDIS_URL;
let client: ReturnType<typeof createClient> | null = null;

if (redis_url) {
  // 1. Create the client
  client = createClient({
    url: redis_url,
  });

  client.on('error', (err) => {
    console.error('Redis connection error:', err);
  });
} else {
  console.error(
    'Missing KV_URL or REDIS_URL environment variable. Redis client not initialized.'
  );
}

// 2. We must connect *inside* the handler or use a connection manager
//    because serverless functions are stateless. A simple "await" at
//    the top level won't work. We also must not connect on every request.
//    This is where `ioredis` is simpler.

// A simple way to manage the connection in serverless:
async function getConnectedClient() {
  if (!client) {
    throw new Error('Redis client not initialized');
  }
  if (!client.isOpen) {
    await client.connect();
  }
  return client;
}

export async function POST(request: Request) {
  try {
    // 3. Get the connected client
    const redis = await getConnectedClient();

    const { slug, destination } = await request.json();

    // ... (rest of your validation and security code is identical) ...

    // --- Create the link (using node-redis) ---
    await redis.set(slug, destination); // The command is the same!

    // --- Respond with success ---
    return NextResponse.json({
      message: 'Link created/updated successfully!',
      // ... (rest of your response) ...
    });

  } catch (error) {
    // ... (error handling) ...
  }
}