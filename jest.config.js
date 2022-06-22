/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@/components$": "<rootDir>/src/components/index.ts",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/utils/(.*)$": "<rootDir>/src/shared/utils/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/constants$": "<rootDir>/src/constants/index.ts",
    "^@/SEO$": "<rootDir>/src/SEO.tsx",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",

    "^@/shared/hooks/(.*)$": "<rootDir>/src/shared/hooks/$1",
    "^@/shared/tests/utils/(.*)$": "<rootDir>/src/shared/tests/utils/$1",
    "^@/shared/store/(.*)/(.*)$": "<rootDir>/src/shared/store/$1/$2",
    "^@/shared/store/(.*)$": "<rootDir>/src/shared/store/$1",
    "^@/shared/store$": "<rootDir>/src/shared/store/index.ts",
    "^@/shared/store/reducers$": "<rootDir>/src/shared/store/reducers.ts",
    "^@/shared/services/users$": "<rootDir>/src/shared/services/users",
    "^@/shared/services/(.*)$": "<rootDir>/src/shared/services/api.ts",
  },
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
