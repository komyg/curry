/* eslint-disable no-undef */
module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['dist'],
  testEnvironment: 'node',
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  coverageReporters: ['json', ['lcov', { projectRoot: '../../' }]],
};
