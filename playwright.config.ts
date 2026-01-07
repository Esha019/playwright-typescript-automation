import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testMatch:["tests/dropdown.test.ts"],
  use:{
    headless: false,
    screenshot:"on",
    video:"on",
    launchOptions: {
      slowMo: 1000
    }
  },
  retries: 0,
  reporter:[["dot"], ["json",
    {outputFile:"jsonReports/jsonReport.json"}], 
    ["html", {open:"never"}]]
});
