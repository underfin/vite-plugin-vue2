module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/test/**/*spec.ts'],
  testPathIgnorePatterns: ['/playground/', '/node_modules/'],
  watchPathIgnorePatterns: ['<rootDir>/temp'],
}
