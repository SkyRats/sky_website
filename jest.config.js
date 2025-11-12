module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Mock 'redis' module globally
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // Module mapping to handle Next.js/React components (if any)
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    // Add other aliases here
  },
};