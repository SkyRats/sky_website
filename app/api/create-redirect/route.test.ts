// src/app/api/create-redirect/route.test.ts

import { POST } from './route'; // Import your handler
import { NextResponse } from 'next/server';
import { createClient } from 'redis';

// --- Test Setup ---

// Get the types from the actual implementation
type MockRedisClient = ReturnType<typeof createClient>;

// Access the mocked 'redis' module and its 'createClient' function
const mockedCreateClient = createClient as jest.Mock;

// Access the mock client instance created in jest.setup.js
const mockRedisClient = mockedCreateClient() as jest.Mocked<MockRedisClient>;

// Access the mocked NextResponse.json
const mockedNextResponseJson = NextResponse.json as jest.Mock;

// Helper to create a mock Request object
const createMockRequest = (
  headersInit: HeadersInit,
  body: any,
  url: string = 'http://localhost:3000/api/create-redirect'
) => {
  return {
    headers: new Headers(headersInit),
    json: jest.fn().mockResolvedValue(body),
    url: url,
  } as unknown as Request;
};

// Store original process.env

const originalEnv = process.env;
const testApiKey = 'TEST_BEARER_API_KEY';

// --- Test Suite ---

describe('POST /api/create-redirect', () => {
  // Before each test, reset mocks and set up default environment
  beforeEach(() => {
    // Reset all mock function calls
    jest.clearAllMocks();

    // Reset process.env to a "happy path" state
    process.env = {
      ...originalEnv,
      BEARER_API_KEY: testApiKey,
      REDIS_URL: 'redis://fake-redis-url',
    };

    // Reset redis client mock state for each test
    // Use 'mockClear' on properties that are jest.fn()
    (mockRedisClient.on as jest.Mock).mockClear();
    (mockRedisClient.connect as jest.Mock).mockClear();
    (mockRedisClient.set as jest.Mock).mockClear();

    // Simulates a new connection
    // Reset properties
    // Works: Bypasses the read-only check
    Object.defineProperty(mockRedisClient, 'isOpen', {
        value: false, // or true, depending on your test case
        writable: true, // You can also set this, though 'value' is often enough
    });
  });

  // After all tests, restore original environment
  afterAll(() => {
    process.env = originalEnv;
  });

  // --- Success Cases ---

  it('should return 201 when a new link is created', async () => {
    // Mock Redis 'set' to return null, indicating a new key
    (mockRedisClient.set as jest.Mock).mockResolvedValue(null);

    // Force 'connect()' to be called
    // Reset properties
    // Works: Bypasses the read-only check
    Object.defineProperty(mockRedisClient, 'isOpen', {
        value: false, // or true, depending on your test case
        writable: true, // You can also set this, though 'value' is often enough
    });

    const body = { slug: 'new-link', destination: 'https://google.com' };
    const request = createMockRequest(
      { Authorization: `Bearer ${testApiKey}` },
      body
    );

    await POST(request);

    // Verify Redis calls
    expect(mockRedisClient.connect).toHaveBeenCalledTimes(1);
    expect(mockRedisClient.set).toHaveBeenCalledWith(
      body.slug,
      body.destination,
      { GET: true }
    );

    // Verify response
    expect(mockedNextResponseJson).toHaveBeenCalledWith(
      {
        message: 'Redirect link created sucessfully.',
        resourceUrl: 'http://localhost:3000/redirect/new-link',
      },
      {
        status: 201,
        headers: {
          Location: 'http://localhost:3000/redirect/new-link',
        },
      }
    );
  });

  it('should return 200 when an existing link is updated', async () => {
    // Mock Redis 'set' to return an old value, indicating an update
    (mockRedisClient.set as jest.Mock).mockResolvedValue(
      'https://old-google.com'
    );

    // Simulate already-open connection
    // Reset properties
    // Works: Bypasses the read-only check
    Object.defineProperty(mockRedisClient, 'isOpen', {
        value: true, 
        writable: true, // You can also set this, though 'value' is often enough
    });

    const body = { slug: 'updated-link', destination: 'https://new-google.com' };
    const request = createMockRequest(
      { Authorization: `Bearer ${testApiKey}` },
      body
    );

    await POST(request);

    // Verify Redis calls
    expect(mockRedisClient.connect).not.toHaveBeenCalled(); // Connection was open
    expect(mockRedisClient.set).toHaveBeenCalledWith(
      body.slug,
      body.destination,
      { GET: true }
    );

    // Verify response
    expect(mockedNextResponseJson).toHaveBeenCalledWith(
      {
        message: 'Redirect link updated sucessfully.',
        resourceUrl: 'http://localhost:3000/redirect/updated-link',
      },
      {
        status: 200,
      }
    );
  });

  // --- Auth Failure Cases ---

  it('should return 401 if Authorization header is missing', async () => {
    const request = createMockRequest({}, { slug: 'test', destination: 'https://test.com' });

    await POST(request);

    // Verify no Redis calls were made
    expect(mockRedisClient.connect).not.toHaveBeenCalled();
    expect(mockRedisClient.set).not.toHaveBeenCalled();

    // Verify response
    expect(mockedNextResponseJson).toHaveBeenCalledWith(
      { message: 'Missing or invalid Authorization header.' },
      { status: 401 }
    );
  });

  it('should return 401 if Authorization header is not Bearer', async () => {
    const request = createMockRequest(
      { Authorization: 'Basic some-token' }, // Invalid scheme
      { slug: 'test', destination: 'https://test.com' }
    );

    await POST(request);

    expect(mockedNextResponseJson).toHaveBeenCalledWith(
      { message: 'Missing or invalid Authorization header.' },
      { status: 401 }
    );
  });

  it('should return 401 if API key is invalid', async () => {
    const request = createMockRequest(
      { Authorization: 'Bearer wrong-key' }, // Wrong key
      { slug: 'test', destination: 'https://test.com' }
    );

    await POST(request);

    expect(mockedNextResponseJson).toHaveBeenCalledWith(
      { message: 'Invalid API key.' },
      { status: 401 }
    );
  });

  // --- Server Config Failure Cases ---

  it('should return 500 if BEARER_API_KEY is not set', async () => {
    delete process.env.BEARER_API_KEY; // Simulate missing env var

    const request = createMockRequest(
      { Authorization: `Bearer ${testApiKey}` },
      { slug: 'test', destination: 'https://test.com' }
    );

    await POST(request);

    expect(mockedNextResponseJson).toHaveBeenCalledWith(
      { message: 'Server config error: BEARER_API_KEY is not set.' },
      { status: 500 }
    );
  });

  it('should return 500 if REDIS_URL is not set', async () => {
    // 1. Delete o env var (o beforeEach já rodou e setou)
    delete process.env.REDIS_URL;

    const request = createMockRequest(
      { Authorization: `Bearer ${testApiKey}` },
      { slug: 'test', destination: 'https://test.com' }
    );

    // 2. Chame o handler POST normal
    // Ele vai chamar getConnectedClient(), que vai falhar
    await POST(request); 

    // 3. Verifique a resposta (usando o mock global)
    expect(mockedNextResponseJson).toHaveBeenCalledWith(
      { message: 'Server config error: REDIS_URL is not set.' },
      { status: 500 }
    );
  });

  // --- General Error Case ---

  it('should return 500 for a general server error', async () => {
    // Simulate a failure during the redis 'set' operation
    const generalError = new Error('Redis connection timed out');
    (mockRedisClient.set as jest.Mock).mockRejectedValue(generalError);

    const request = createMockRequest(
      { Authorization: `Bearer ${testApiKey}` },
      { slug: 'test', destination: 'https://test.com' }
    );

    await POST(request);

    expect(mockedNextResponseJson).toHaveBeenCalledWith(
      { message: 'An internal server error occurred.' },
      { status: 500 }
    );
  });
});