const { devices } = require('@playwright/test')

module.exports = {
	testDir: 'tests',
	timeout: 45000,
	retries: 1,
	reporter: [['line'], ['./CustomReporter.js']],
	projects: [
		{
			name: `Chrome`,
			use: {
				browserName: `chromium`,
				channel: `chrome`,
				headless: false,
				viewport: { width: 1720, height: 850 },
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`
			}
		},
		{
			name: `Firefox`,
			use: {
				browserName: `firefox`,
				headless: false,
				viewport: { width: 1720, height: 850 },
				ignoreHTTPSErrors: true,
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`,
				launchOptions: {
					slowMo: 200
				}
			}
		},
		{
			name: `WebKit`,
			use: {
				browserName: `webkit`,
				headless: false,
				viewport: { width: 1720, height: 850 },
				ignoreHTTPSErrors: true,
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`
			}
		},
		{
			name: `Edge`,
			use: {
				browserName: `chromium`,
				channel: `msedge`,
				headless: false,
				viewport: { width: 1720, height: 850 },
				ignoreHTTPSErrors: true,
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`,
				launchOptions: {
					slowMo: 100
				}
			}
		}
	]
}
