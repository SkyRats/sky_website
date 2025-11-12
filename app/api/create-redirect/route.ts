import { createClient } from 'redis';
import { NextResponse } from 'next/server';

const redis_url = process.env.REDIS_URL;
let client: ReturnType<typeof createClient> | null = null;

if (redis_url) {
  client = createClient({
    url: redis_url,
  });

  client.on('error', (err) => {
    console.error('Redis connection error:', err);
  });
} else {
  console.error(
    'Missing REDIS_URL environment variable. Redis client not initialized.'
  );
}

async function getConnectedClient() {
  if (!client) {
    throw new Error('Redis client not initialized');
  }
  if (!client.isOpen) {
    await client.connect();
    console.log("REDIS connected.")
  }
  return client;
}

export async function POST(request: Request) {
  try {
    // --- Bearer Token Validation ---
    const apiKey = process.env.BEARER_API_KEY;

    // 1. Check if the server is configured with an API key
    if (!apiKey) {
      console.error('Server config error: BEARER_API_KEY is not set.');
      // This is a server configuration error
      return NextResponse.json(
        { message: 'Server configuration error.' },
        { status: 500 }
      );
    }

    // 2. Get the Authorization header from the request
    const authHeader = request.headers.get('Authorization');

    // 3. Check if the header is present and has the correct format
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'Missing or invalid Authorization header.' },
        { status: 401 } // 401 Unauthorized
      );
    }

    // 4. Extract and validate the token
    const token = authHeader.substring(7); // Remove "Bearer " prefix
    if (token !== apiKey) {
      return NextResponse.json(
        { message: 'Invalid API key.' },
        { status: 401 } // 401 Unauthorized
      );
    }
    // --- End Security Validation ---

    
    // ... (Data validation logic should go here) ...
    const { slug, destination } = await request.json();
    // e.g., check if slug and destination are valid strings

    // If all validation passed, proceed to redis connection
    const redis = await getConnectedClient();

    // --- Create/Update the link (using node-redis 'SET...GET' option) ---
    // This command sets the new value and returns the *old* value.
    // If the old value is 'null', it was a new key (a create).
    const oldDestination = await redis.set(slug, destination, {
      GET: true, // This is the key: returns the old value
    });

    const wasCreated = oldDestination === null;

    // --- Dynamically get the base URL (works for local & prod) ---
    // new URL(request.url).origin gives "http://localhost:3000" or "https://your-site.com"
    const baseUrl = new URL(request.url).origin;
    const resourceUrl = `${baseUrl}/redirect/${slug}`;

    // --- Respond RESTfully ---
    if (wasCreated) {
      // **CREATED**
      return NextResponse.json({ message: 'Redirect link created sucessfully.', resourceUrl}, {
        status: 201, // 201 Created
        headers: {
          'Location': resourceUrl, // Location header is required for 201
        },
      });
    } else {
      // **UPDATED**
      return NextResponse.json({ message: 'Redirect link updated sucessfully.', resourceUrl}, {
        status: 200, // 200 OK
      });
    }

  } catch (error) {
    console.error('Error in POST /api/links:', error);
    if (error instanceof Error && error.message.includes('not initialized')) {
      return NextResponse.json(
        { message: 'Server configuration error: Redis not available.' },
        { status: 500 }
      );
    }
    // General error
    return NextResponse.json(
      { message: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}