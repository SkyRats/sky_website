// jest.setup.js

// Mock the 'next/server' module
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((body, init) => ({ body, init })), // Return args for easy checking
  },
}));

// Create a re-usable mock redis client
const mockRedisClient = {
  on: jest.fn(),
  connect: jest.fn().mockResolvedValue(undefined),
  set: jest.fn(),
  isOpen: false, // Default state
};

// Mock the 'redis' module
jest.mock('redis', () => ({
  createClient: jest.fn(() => mockRedisClient),
}));