/*Scenario: 5: 
Login as locked_out_user to verify error message and then Login as performance_glitch_user to 
add a product item to the cart and logout from the application. 
Now, Login as a standard user now to complete the checkout workflow.

Scenario Description: User is logged in as “Locked_out_user” to validate the error message on the Login page. 
Now, Login as a performace_glitch_user and add a product item to the cart and logout of the application. 
Standard user is logged in and verifies the product item added by the 
performance glitch user earlier and completes the checkout workflow.

Test Steps:
1.	Login with Locked_Out_User
2.	Verify the error message” Sorry, this user has been locked out.”
3.	Login as performance_glitch_user
4.	User is on Products page. Verify title and URL
5.	Select an item from product list and add to cart and verify cart is updated to “1”
6.	Click the shopping cart
7.	User is on Your cart page and clicks on “checkout” button
8.	User is on Checkout: Your information page
9.	Fill in Firstname, Lastname and postal code and click continue button on Checkout: Your Information page
10.	User is on Checkout: Overview page
11.	Click on react burger menu button and click logout from Checkout: Overview page
12.	User is on Login page
13.	Login as Standard user
14.	Click on the shopping cart 
15.	Shopping cart should have one item in the bucket
16.	User is on Your cart page and clicks on “checkout” button
17.	Fill in firstname, last name and postal code and click continue
18.	User is on Checkout: overview page
19.	Click on “Finish button” on Checkout: Overview Page
20.	User is navigated to Checkout: Complete Page
21.	User Logout from the application from Checkout: Complete Page
22.	Verify whether user is on the login page 
*/

import test, { describe, step } from '../testFixtures/fixture'
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

test.describe.parallel(
	'Login as a Locked out user and Performance glitch user and complete the checkout workflow with Standard user' +
		'',
	() => {
		test('Login to App as a Locked out user user', async ({ loginPage }) => {
			await test.step(`Open the APP and check logo`, async () => {
				await loginPage.openApp()
				await loginPage.loginPageLogo()
				expect(await loginPage.getTitle()).toBe(title)
				expect(await loginPage.getUrl()).toContain(baseUrl)
			})

			await test.step(`Login as a problem user`, async () => {
				await loginPage.loginAsLockedOutUser()
			})

			await test.step(`Verify the error message on the login page`, async () => {
				await loginPage.verifyErrorMessage()
				await loginPage.VerifyLockedOutUserErrorMessage()
				expect(await loginPage.getUrl()).toContain(baseUrl)
			})
		})

		test('Login to App as a Performance glitch user', async ({
			loginPage,
			productsPage,
			productDetailsPage,
			yourCartPage,
			checkoutYourInformationPage,
			checkoutOverviewPage,
			checkoutCompletePage
		}) => {
			await test.step(`Open the APP and check logo on the Login page`, async () => {
				await loginPage.openApp()
				await loginPage.loginPageLogo()
				expect(await loginPage.getTitle()).toBe(title)
				expect(await loginPage.getUrl()).toContain(baseUrl)
			})

			await test.step(`Login as a Performance glitch user`, async () => {
				await loginPage.loginAsPerformanceGlitchUser()
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
				`User types in the firstname+lastname+postalcode and click continue button to navigate to Checkout:Overview page`,
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
				`User Logs out from the application and navigates back to login page`,
				async () => {
					await productsPage.burgerButtonClick()
					await productsPage.clickLogoutSideBarLink()
					expect(await loginPage.getTitle()).toBe(title)
					expect(await loginPage.getUrl()).toBe(baseUrl)
				}
			)

			await test.step(
				`User Login as a Standard user and verify whether the user landed on Products page`,
				async () => {
					await loginPage.loginAsStandardUser()
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
				`Standard user clicks on shopping cart and navigates to your cart page`,
				async () => {
					await productsPage.clickShoppingCartLink()
					await yourCartPage.titleVisible()
					expect(await productsPage.getUrl()).toContain(yourCartUrl)
				}
			)

			await test.step(
				`Standard user clicks on "checkout button" on your cart page and navigates to Checkout:Your Information page`,
				async () => {
					await yourCartPage.clickCheckoutBtn()
					await checkoutYourInformationPage.titleVisible()
					expect(await checkoutYourInformationPage.getUrl()).toBe(
						checkoutYourInformationUrl
					)
				}
			)
			await test.step(
				`Standard user types in the firstname and click continue button on Checkout:Your Information page`,
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
				`Standard user clicks on "Finish" Button on Checkout:Overview page to navigate to Checkout:Complete page`,
				async () => {
					await checkoutOverviewPage.clickFinishBtn()
					await checkoutCompletePage.titleVisible()
					expect(await checkoutOverviewPage.getUrl()).toBe(checkoutCompleteUrl)
				}
			)

			await test.step(
				`Standard user logs out of the application and navigates back to login page`,
				async () => {
					await productsPage.burgerButtonClick()
					await productsPage.clickLogoutSideBarLink()
					expect(await loginPage.getUrl()).toBe(baseUrl)
				}
			)
		})
	}
)
