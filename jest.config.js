/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'jsx'],
  testRegex: '.*\\.spec\\.tsx?$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  restoreMocks: true,
  resetMocks: true,
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    '\\.module\\.js$': 'identity-obj-proxy',
  },
}
