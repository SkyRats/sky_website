// src/app/api/create-redirect/route.ts

import { createClient } from 'redis';
import { NextResponse } from 'next/server';

// O cliente é declarado aqui, mas será inicializado sob demanda.
let client: ReturnType<typeof createClient> | null = null;

async function getConnectedClient() {
  // Se o cliente já existe e está conectado, apenas o retorne.
  if (client && client.isOpen) {
    return client;
  }

  // Se o cliente não existe (primeira execução) ou está fechado,
  // leia o process.env AQUI.
  const redis_url = process.env.REDIS_URL;

  if (!redis_url) {
    console.error(
      'Missing REDIS_URL environment variable. Redis client not initialized.'
    );
    // Este erro será pego pelo try/catch no handler POST
    throw new Error('REDIS_URL is not set');
  }

  // Cria o cliente se for a primeira vez
  if (!client) {
    client = createClient({
      url: redis_url,
    });

    client.on('error', (err) => {
      console.error('Redis connection error:', err);
    });
  }

  // Conecta (ou reconecta)
  await client.connect();
  console.log('REDIS connected.');
  return client;
}

export async function POST(request: Request) {
  try {
    // --- Bearer Token Validation ---
    // Leia o .env AQUI, dentro do handler
    const apiKey = process.env.BEARER_API_KEY;

    // 1. Check if the server is configured with an API key
    if (!apiKey) {
      console.error('Server config error: BEARER_API_KEY is not set.');
      return NextResponse.json(
        { message: 'Server config error: BEARER_API_KEY is not set.' },
        { status: 500 }
      );
    }
    // Não precisamos mais verificar REDIS_URL aqui.
    // A função getConnectedClient fará isso.

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

    // Se all validation passed, proceed to redis connection
    // Esta chamada agora irá lidar com a inicialização e verificação do REDIS_URL
    const redis = await getConnectedClient();

    // --- Create/Update the link (using node-redis 'SET...GET' option) ---
    const oldDestination = await redis.set(slug, destination, {
      GET: true, // This is the key: returns the old value
    });

    const wasCreated = oldDestination === null;

    // --- Dynamically get the base URL (works for local & prod) ---
    const baseUrl = new URL(request.url).origin;
    const resourceUrl = `${baseUrl}/redirect/${slug}`;

    // --- Respond RESTfully ---
    if (wasCreated) {
      // **CREATED**
      return NextResponse.json(
        { message: 'Redirect link created sucessfully.', resourceUrl },
        {
          status: 201, // 201 Created
          headers: {
            Location: resourceUrl, // Location header is required for 201
          },
        }
      );
    } else {
      // **UPDATED**
      return NextResponse.json(
        { message: 'Redirect link updated sucessfully.', resourceUrl },
        {
          status: 200, // 200 OK
        }
      );
    }
  } catch (error) {
    console.error('Error in POST /api/create-redirect:', error);

    // Adiciona um tratamento para o erro específico de inicialização do Redis
    if (error instanceof Error && error.message === 'REDIS_URL is not set') {
      return NextResponse.json(
        { message: 'Server config error: REDIS_URL is not set.' },
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