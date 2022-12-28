/*Scenario: 4: 
Login as a “problem_user” to add a product item into the shopping cart and 
then complete the checkout workflow by logging in as a “performance_glitch_user”

Scenario Description: 
User is logged in as “Problem_user” and adds an item to the cart. 
User fills in the firstname, lastname and postal code. Since the “Problem_user” cannot perform the checkout process because of  
the lastname error message, user logs off the application. 
Performance_glitch_user logs into the application and completes the checkout workflow.

Test Steps:
1.  Login with Problem_user
2.	User is on Products page. Verify title and URL
3.	Select an item from product list and add to cart and verify cart is updated to “1”
4.	Click the shopping cart
5.	User is on Your cart page and validate QTY and Description
6.	Click on Checkout button
7.	User is on Checkout: Your information page
8.	Fill in Firstname, Lastname and postal code 
9.	Verify the error message for “Error: Last name is required”
10.	Click on react burger menu button and click logout
11.	User is on Login page
12.	Login as performance_glitch_user
13.	Click on the shopping cart 
14.	Shopping cart should have one item in the bucket
15.	User is on Your cart page 
16.	Click on checkout
17.	Fill in firstname, last name and postal code and click continue
18.	User is on Checkout: overview page
19.	Click on finish button on Checkout: overview page
20.	User is navigated to Checkout: complete page and validate the page
21.	Click on Back home button and user is navigated to Products page
22.	User Logout from the application
23.	Verify whether user is on the login page
*/

import test from '../testFixtures/fixture'
import { expect } from '@playwright/test'
import fs from 'fs'
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

import {
	baseUrl,
	title,
	landingPageUrl,
	yourCartUrl,
	checkoutYourInformationUrl,
	checkoutOverviewUrl,
	checkoutCompleteUrl
} from '../config'

test.describe('Login as a Problem user to select a product item and then complete the checkout workflow with Performance Glitch User', () => {
	test('Login to App as a problem user', async ({
		loginPage,
		productsPage,
		productDetailsPage,
		yourCartPage,
		checkoutYourInformationPage,
		checkoutOverviewPage,
		checkoutCompletePage
	}) => {
		await test.step(`Open the APP and check logo`, async () => {
			await loginPage.openApp()
			await loginPage.loginPageLogo()
			expect(await loginPage.getTitle()).toBe(title)
			expect(await loginPage.getUrl()).toContain(baseUrl)
		})

		await test.step(`Login as a problem user`, async () => {
			await loginPage.loginAsProblemUser()
		})

		await test.step(`Verify landing page title and url`, async () => {
			await productsPage.verifyProductsPageTitleVisible()
			expect(await productsPage.getUrl()).toContain(landingPageUrl)
		})

		await test.step(
			`Click on Add to Cart button on Product Details page and verify shopping cart is updated to "1" item`,
			async () => {
				await productDetailsPage.clickAddToCartButton()
				await productDetailsPage.shoppingCartCount()
			}
		)

		await test.step(
			`user clicks on shopping cart and navigates to your cart page`,
			async () => {
				await productsPage.clickShoppingCartLink()
				await yourCartPage.titleVisible()
				expect(await productsPage.getUrl()).toContain(yourCartUrl)
			}
		)

		await test.step(
			`User clicks on "checkout button" on your cart page and navigates to Checkout:Your Information page`,
			async () => {
				await yourCartPage.clickCheckoutBtn()
				await checkoutYourInformationPage.titleVisible()
				expect(await checkoutYourInformationPage.getUrl()).toBe(
					checkoutYourInformationUrl
				)
			}
		)

		await test.step(
			`User types in the firstname and click continue to validate error message for lastname`,
			async () => {
				await checkoutYourInformationPage.typeFirstName()
				await checkoutYourInformationPage.typeLastName()
				await checkoutYourInformationPage.typePostalCode()
				await checkoutYourInformationPage.clickContinueBtn()
				await checkoutYourInformationPage.verifyErrorMessage()
				await checkoutYourInformationPage.VerifyTextLastNameOfErrorMessage()
			}
		)

		await test.step(
			`User Logs out from the application and navigates back to login page`,
			async () => {
				await productsPage.burgerButtonClick()
				await productsPage.clickLogoutSideBarLink()
				expect(await loginPage.getTitle()).toBe(title)
				expect(await loginPage.getUrl()).toBe(baseUrl)
			}
		)

		await test.step(
			`User Login as a Performance_glitch_user and verify whether the user landed on Products page`,
			async () => {
				await loginPage.loginAsPerformanceGlitchUser()
				await productsPage.verifyProductsPageTitleVisible()
				expect(await productsPage.getUrl()).toContain(landingPageUrl)
			}
		)

		await test.step(
			`Verify shopping cart have "1" item added by the Problem user earlier`,
			async () => {
				await productDetailsPage.shoppingCartCount()
			}
		)

		await test.step(
			`Performance glitch user clicks on shopping cart and navigates to your cart page`,
			async () => {
				await productsPage.clickShoppingCartLink()
				await yourCartPage.titleVisible()
				expect(await productsPage.getUrl()).toContain(yourCartUrl)
			}
		)

		await test.step(
			`Performance glitch user clicks on "checkout button" on your cart page and navigates to Checkout:Your Information page`,
			async () => {
				await yourCartPage.clickCheckoutBtn()
				await checkoutYourInformationPage.titleVisible()
				expect(await checkoutYourInformationPage.getUrl()).toBe(
					checkoutYourInformationUrl
				)
			}
		)

		await test.step(
			`Performance glitch user types in the firstname and click continue button on Checkout:Your Information page`,
			async () => {
				await checkoutYourInformationPage.typeFirstName()
				await checkoutYourInformationPage.typeLastName()
				await checkoutYourInformationPage.typePostalCode()
				await checkoutYourInformationPage.clickContinueBtn()
			}
		)

		await test.step(`User is on Checkout:Overview page`, async () => {
			await checkoutOverviewPage.titleVisible()
			expect(await yourCartPage.getUrl()).toBe(checkoutOverviewUrl)
		})

		await test.step(
			`Performance glitch user clicks on "Finish" Button on Checkout:Overview page to navigate to Checkout:Complete page`,
			async () => {
				await checkoutOverviewPage.clickFinishBtn()
				await checkoutCompletePage.titleVisible()
				expect(await checkoutOverviewPage.getUrl()).toBe(checkoutCompleteUrl)
			}
		)

		await test.step(
			`Performance glitch user clicks on "Back Home" button on Checkout: Complete page to navigate back to Products/Home page`,
			async () => {
				await checkoutCompletePage.clickBackHomeButton()
				await productsPage.verifyProductsPageTitleVisible()
				expect(await checkoutCompletePage.getUrl()).toBe(landingPageUrl)
			}
		)

		await test.step(
			`Performance glitch User clicks on Logout side nav bar link on producst page to exit from the application`,
			async () => {
				await productsPage.burgerButtonClick()
				await productsPage.clickLogoutSideBarLink()
				expect(await loginPage.getTitle()).toBe(title)
				expect(await loginPage.getUrl()).toBe(baseUrl)
			}
		)
	})
})
