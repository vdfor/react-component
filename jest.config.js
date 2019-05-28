module.exports = {
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'setupTests.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'node'],
  roots: ['src'],
  setupFiles: [
    '<rootDir>/src/setupTests.ts'
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$'
}
