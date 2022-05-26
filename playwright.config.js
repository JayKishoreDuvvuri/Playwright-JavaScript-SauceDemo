module.exports = {
  testDir: "tests",
  timeout: 60000,
  retries: 1,
  reporter: [["line"]],
  projects: [
    {
      name: `Chrome`,
      use: {
        browserName: `chromium`,
        channel: `chrome`,
        viewport: { width: 1720, height: 850 },
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
      },
    },
    {
      name: `Firefox`,
      use: {
        browserName: `firefox`,
        viewport: { width: 1720, height: 850 },
        ignoreHTTPSErrors: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 200,
        },
      },
    },
    {
      name: `Safari`,
      use: {
        browserName: `webkit`,
        viewport: { width: 1720, height: 850 },
        ignoreHTTPSErrors: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
      },
    },
    {
      name: `Edge`,
      use: {
        browserName: `chromium`,
        channel: `msedge`,
        viewport: { width: 1720, height: 850 },
        ignoreHTTPSErrors: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 100,
        },
      },
    },
  ],
};
