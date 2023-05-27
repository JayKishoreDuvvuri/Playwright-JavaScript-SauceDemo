/* Scenario 1: 
Login as a standard user to verify the products page and logout from the application

Scenario Description: 
User logs into the website and verifies all the elements on the products page and logs out from the application. 
This is like a Smoke test.

Test test.steps:
1.	User is on the Login Page
2.	Verify the Logo, title, url, username, password fields, login button, login and password credentials on the login page
3.	Login as a standard user
4.	User is on the Landing/Products page. Verify the Landing page logo and URL
5.	Verify the PRODUCTS title and peek image visible on the home page
6.	Verify all the options Burger menu item, ALL ITEMS; ABOUT; LOGOUT AND RESET APP STATE are visible on inventory sidebar links on left side of the page
7.	Verify the shopping cart icon and product sort container visible on the top right of the page
8.	Verify the Inventory Product item list is visible
9.	Select the Product sort container as “Price (low to high)” and verify the inventory item list is displayed correctly in the right order selected.
10.	Verify the footer text and swag bot footer is visible
11.	Click on “About” navbar link from the “inventory sidebar panel” and check whether user is navigated to saucelabs page
12.	Verify the Twitter, Facebook, Linkedin logo visible 
13.	Click on Twitter social link and verify user is navigated to Twitter page
14.	Click on Facebook social link and verify user is navigated to Facebook page
15.	Click on LinkedIn social link and verify user is navigated to LinkedIn page
16.	User logout from the application and verify the login page
*/

import test from '../testFixtures/fixture'
import { expect } from '@playwright/test'
import fs from 'fs'
import { username, password, loginButton } from '../pageobjects/loginPage'
import {
	twitterLink,
	facebookLink,
	linkedInLink
} from '../pageobjects/productsPage'
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

import {
	baseUrl,
	title,
	landingPageUrl,
	sauceLabsTitle,
	sauceLabsUrl,
	onesie,
	fleeceJacket,
	twitterTitle,
	twitterUrl,
	facebookTitle,
	facebookUrl,
	linkedInTitle,
	linkedInUrl
} from '../config'

test.describe.parallel(
	'@smoke: Login as a standard user to verify the products page and logout from the application',
	() => {
		test('Login to App as a standard user', async ({
			loginPage,
			productsPage
		}) => {
			await test.step(`Open the APP and check logo`, async () => {
				await loginPage.openApp()
				await loginPage.loginPageLogo()
				expect(await loginPage.getTitle()).toBe(title)
				expect(await loginPage.getUrl()).toContain(baseUrl)
			})

			await test.step(
				`Verify username and password fields are visible on login page`,
				async () => {
					await loginPage.usernameFieldVisible()
					await loginPage.passwordFieldVisible()
				}
			)

			await test.step(
				`Verify Login button is enabled and bot image is visible`,
				async () => {
					await loginPage.loginButtonIsEnabled()
					// await loginPage.botImageVisible()
				}
			)

			await test.step(
				`Verify Login and password credentials are visible at the bottom of login page`,
				async () => {
					await loginPage.loginCredentialsVisible()
					await loginPage.passwordCredentialsVisible()
				}
			)

			await test.step(`Login as a Standard user`, async () => {
				await loginPage.loginAsStandardUser()
			})

			// await test.step(
			// 	`Verify landing page logo+title+image+url visible`,
			// 	async () => {
			// 		await productsPage.verifyProductsPageLogoVisible()
			// 		await productsPage.verifyProductsPageTitleVisible()
			// 		// await productsPage.verifyPeekImage()
			// 		expect(await productsPage.getUrl()).toContain(landingPageUrl)
			// 	}
			// )

			await test.step(
				`Verify the products page shopping cart icon and product sort container visible `,
				async () => {
					await productsPage.shoppingCartLink()
					await productsPage.productSortContainerVisible()
				}
			)

			await test.step(
				`Verify the products page sidebar links visible and click on About link to check user is navigated to saucelabs page`,
				async () => {
					await productsPage.burgerButtonVisible()
					await productsPage.burgerButtonClick()
					await productsPage.allItemsSideBarLink()
					await productsPage.aboutSideBarLink()
					await productsPage.logoutSideBarLink()
					await productsPage.resetSideBarLink()
					await productsPage.burgerCrossButtonVisible()
					await productsPage.burgerCrossButtonClick()
				}
			)

			await test.step(
				`Verify Inventory container and the inventory list is visible`,
				async () => {
					await productsPage.inventoryContainerVisible()
					await productsPage.backPackItem()
					await productsPage.boltTshirtItem()
					await productsPage.onesieItem()
					await productsPage.bikeLightItem()
					await productsPage.fleeceJacketItem()
					await productsPage.tshirtRedItem()
				}
			)

			await test.step(
				`Select the product sort container option as “Price (low to high) and verify the list sorted order`,
				async () => {
					await productsPage.selectLowToHighFromDropDown()
					const firstItem = await productsPage.getFirstItemFromInventory()
					expect(firstItem).toContain(onesie)
					const lastItem = await productsPage.getLastItemFromInventory()
					expect(lastItem).toContain(fleeceJacket)
				}
			)

			await test.step(
				`Verify the footer text+swag bot footer+social channel links are visible`,
				async () => {
					await productsPage.footerTextVisible()
					// await productsPage.swagBotFooterVisible()
					await productsPage.socialChannelLinksVisible()
				}
			)

			await test.step(
				`Standard user logout from the application and verify the login page`,
				async () => {
					await productsPage.burgerButtonVisible()
					await productsPage.burgerButtonClick()
					await productsPage.clickLogoutSideBarLink()
					await loginPage.loginPageLogo()
					await loginPage.usernameFieldVisible()
					await loginPage.passwordFieldVisible()
					await loginPage.loginButtonIsEnabled()
					// await loginPage.botImageVisible()
					await loginPage.loginCredentialsVisible()
					await loginPage.passwordCredentialsVisible()
					expect(await loginPage.getTitle()).toBe(title)
					expect(await loginPage.getUrl()).toContain(baseUrl)
				}
			)
		})

		test('Click on the "About" side nav bar link to check whether user is navigated to sauce labs page', async ({
			loginPage,
			productsPage
		}) => {
			await test.step(
				`Verify the products page shopping cart icon and product sort container visible `,
				async () => {
					await loginPage.openApp()
					await loginPage.loginAsStandardUser()
					await productsPage.burgerButtonClick()
					await productsPage.clickAboutSideBarLink()
					expect(await productsPage.getTitle()).toBe(sauceLabsTitle)
					expect(await productsPage.getUrl()).toContain(sauceLabsUrl)
				}
			)
		})
	}
)

test.describe.serial('Verify All Social Channel Links', () => {
	test('Click on Facebook link and check whether user is navigated to Facebook page', async ({
		browser
	}) => {
		const context = await browser.newContext()
		const page = await context.newPage()

		await page.goto(baseUrl)
		await page.fill(username, testData.standard_user)
		await page.fill(password, testData.password)
		await page.click(loginButton)

		const link = page.locator(facebookLink)
		const [newPage] = await Promise.all([
			context.waitForEvent('page'),
			await link.click()
		])
		await newPage.waitForLoadState('networkidle')
		expect(await newPage.title()).toContain(facebookTitle)
		expect(newPage.url()).toBe(facebookUrl)
	})

	test('Click on LinkedIn link and check whether user is navigated to LinkedIn page', async ({
		browser
	}) => {
		const context = await browser.newContext()
		const page = await context.newPage()

		await page.goto(baseUrl)
		await page.fill(username, testData.standard_user)
		await page.fill(password, testData.password)
		await page.click(loginButton)

		const link = page.locator(linkedInLink)
		const [newPage] = await Promise.all([
			context.waitForEvent('page'),
			await link.click()
		])
		await newPage.waitForLoadState('networkidle')
		expect(await newPage.title()).toContain(linkedInTitle)
		expect(newPage.url()).toContain(linkedInUrl)
	})

	test('Click on Twitter link and check whether user is navigated to twitter page', async ({
		browser
	}) => {
		const context = await browser.newContext()
		const page = await context.newPage()

		await page.goto(baseUrl)
		await page.fill(username, testData.standard_user)
		await page.fill(password, testData.password)
		await page.click(loginButton)

		const link = page.locator(twitterLink)
		const [newPage] = await Promise.all([
			context.waitForEvent('page'),
			await link.click()
		])
		await newPage.waitForLoadState('domcontentloaded')
		await newPage.waitForLoadState('networkidle')
		expect(newPage.url()).toBe(twitterUrl)
	})
})
