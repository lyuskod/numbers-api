const { defaults } = require('jest-config')

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  transformIgnorePatterns: ['node_modules'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Automation Report',
        executionTimeWarningThreshold: 30,
        outputPath: 'report/report.html',
        includeFailureMsg: true,
      },
    ],
  ],
  detectOpenHandles: true,
  testTimeout: 80_000,
}

module.exports = config
