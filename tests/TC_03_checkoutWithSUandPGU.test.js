/*Scenario: 3: 
Login as a standard user to select a product item and then login as a performance_glitch_user to complete the checkout workflow

Scenario Description: 
The application is verified with all the necessary buttons and links on all the pages including error messages 
by the standard user. 
Then the checkout process is therefore completed by the performance_glitch_user. 

Test Steps:
1.	Login as a Standard user 
2.	User is on Products/home page
3.	Click on a specific product and user is navigated to product details page
4.	Click on “add to cart” button on product details page 
5.	Verify the button is changed to “Remove” Button from “Add to Cart”
6.	Verify the shopping cart message is changed to “1” item
7.	Click on “Back to Products” button on Product details page and user is navigated back to Products/Home page
8.	Click on the shopping cart Icon on Products page
9.	User is navigated to Your Cart page 
10.	Click on “Continue Shopping” button
11.	User is navigated to home/products page
12.	Select the specific item add to cart and check shopping cart updated to ‘1’ on products/home page and click on “remove button” on Products page
13.	Verify shopping cart is empty and the product items button is changed from “remove” to “Add to cart” for the selected item
14.	Sort the “Product sort container” as Name (Z to A) and verify if it is sorted correctly
15.	Select 2 product items and add these 2 items to the cart to see the shopping cart is updated with 2 items
16.	Click on the shopping cart Icon again
17.	User is navigated to your cart page with the item listed with QTY and DESCRIPTION
18.	User clicks on the “Remove button” on your cart page for 2 selected items earlier
19.	The QTY and DESCRIPTION is empty on Your Cart page
20.	Click on “Continue Shopping” button
21.	User is navigated to home/products page
22.	Select 2 items and the shopping cart is updated with 2 items
23.	Click on shopping cart icon and user is on Your cart page
24.	On your cart page, Click on Checkout button 
25.	User is navigated to Checkout: Your Information page
26.	Click on “cancel” button on Checkout: Your Information page
27.	User is navigated back to “Your cart” page
28.	Click again on “Checkout” button on Your cart page
29.	User is navigated to Checkout: Your Information page
30.	Click on continue button
31.	Verify the error message “Error: First Name is required “
32.	Fill in the first name and click continue
33.	Verify the error message “Error: Last Name is required “
34.	Fill in Firstname and Lastname and click continue
35.	Verify the error message “Error: Postal Code is required “
36.	Fill in First name, lastname and postal code
37.	Click on “continue” button on Checkout: Your Information page
38.	User is navigated to the Checkout: Overview page
39.	Click on “cancel” button on Checkout: Overview page
40.	User is navigated to Products/Home page
41.	Click on Logout button from the side nav bar menu
42.	Standard user is logged out successfully from the application.	
43.	Log into the application as a performance_glitch_user 
44.	User is on Home/Products page
45.	User verifies the Shopping cart have the 2 product items selected by the Standard user earlier
46.	User clicks on the shopping cart Icon
47.	User is navigated to your cart page and click on checkout button 
48.	User is navigated to Checkout: Your information page
49.	User Fills in firstname, Lastname and postal code
50.	User clicks on “continue” button on Checkout: Your information page
51.	User is on Checkout: Overview page
52.	Click on “Finish” button on Checkout: Overview page
53.	User is on Checkout: Complete page completes the checkout process
54.	Verify the title and url of Checkout: Complete page
55.	Click on Back home button on Checkout: Complete page
56.	User is navigated back to Products/Home page
57.	User logs out from the application 
58.	Verify Login page url and title
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
	checkoutCompleteUrl,
	productDetailsPageUrl,
	tShirtRed,
	backPack
} from '../config'

test.describe(
	'Login as a Standard User to select a product item and then complete the checkout workflow with Performance Glitch User',
	() => {
		test('Login to App as a standard user', async ({
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

			await test.step(`Login as a Standard user`, async () => {
				await loginPage.loginAsStandardUser()
			})

			await test.step(
				`Verify landing page logo+title+image+url visible`,
				async () => {
					await productsPage.verifyProductsPageLogoVisible()
					await productsPage.verifyProductsPageTitleVisible()
					expect(await productsPage.getUrl()).toContain(landingPageUrl)
				}
			)

			await test.step(
				`Click on Back pack item to check whether user is navigated to Product Details page and verify all the elements on this page`,
				async () => {
					await productsPage.verifyProductsPageTitleVisible()
					await productsPage.clickBackPackItem()
					expect(await productsPage.getUrl()).toContain(productDetailsPageUrl)
					await productDetailsPage.verifyLogoVisible()
					await productDetailsPage.verifyBurgerMenuButtonVisible()
					await productDetailsPage.shoppingCartLinkVisible()
					await productDetailsPage.imageVisible()
					await productDetailsPage.backToProductsButtonIsEnabled()
					await productDetailsPage.productNameVisible()
					await productDetailsPage.productDescriptionVisible()
					await productDetailsPage.productPriceVisible()
					await productDetailsPage.VerifySocialandFooterLinks()
				}
			)

			await test.step(
				`Click on Add to Cart button on Product Details page and verify shopping cart is updated to "1" item`,
				async () => {
					await productDetailsPage.clickAddToCartButton()
					await productDetailsPage.shoppingCartCount()
				}
			)

			await test.step(
				`Click on Remove button on Product Details page and verify shopping cart is empty`,
				async () => {
					await productDetailsPage.clickRemoveButton()
					await productDetailsPage.shoppingCartCountAsEmpty()
				}
			)

			await test.step(
				`Click on “Back to Products” button and user is navigated back to Products/Home page`,
				async () => {
					await productDetailsPage.clickBackToProductsButton()
					expect(await productDetailsPage.getUrl()).toContain(landingPageUrl)
					await productsPage.verifyProductsPageTitleVisible()
				}
			)

			await test.step(
				`User clicks on shopping cart link to navigate to your cart page`,
				async () => {
					await productsPage.clickShoppingCartLink()
					expect(await productsPage.getUrl()).toContain(yourCartUrl)
				}
			)

			await test.step(
				`User clicks on "continue shopping" button to go back to Products page`,
				async () => {
					await yourCartPage.titleVisible()
					await yourCartPage.clickContinueShoppingBtn()
					expect(await productsPage.getUrl()).toContain(landingPageUrl)
				}
			)

			await test.step(
				`User adds an item to cart and cart is updated with "1" item`,
				async () => {
					await productsPage.clickAddToCartBtn()
					await productsPage.shoppingCartCount()
				}
			)

			await test.step(
				`User clicks on "Remove" button for the item already added to cart and verify cart is empty and the button is changed to add to cart`,
				async () => {
					await productsPage.clickRemoveButton()
					await productsPage.shoppingCartCountAsEmpty()
					await productsPage.addToCartButtonIsEnabled()
				}
			)

			await test.step(
				`User sorts the Product sort container to "Name (Z to A)" and verifies the product list is sorted correctly `,
				async () => {
					await productsPage.selectZAFromDropDown()
					const firstItem = await productsPage.getFirstItemFromInventory()
					expect(firstItem).toContain(tShirtRed)
					const lastItem = await productsPage.getLastItemFromInventory()
					expect(lastItem).toContain(backPack)
				}
			)

			await test.step(
				`User clicks on add to cart for 2 product items on the product page and verifies cart is updated with 2 items`,
				async () => {
					await productsPage.clickAddToCartForItems()
					await productsPage.shoppingCartCountAsTwo()
				}
			)
			await test.step(
				`user clicks on shopping cart and navigates to your cart page to verify the QTY and Description`,
				async () => {
					await productsPage.clickShoppingCartLink()
					await yourCartPage.titleVisible()
					expect(await productsPage.getUrl()).toContain(yourCartUrl)
				}
			)

			await test.step(
				`User clicks on the “Remove button” on your cart page for the 2 selected items earlier. The QTY and DESCRIPTION is now empty on "Your Cart" page`,
				async () => {
					await yourCartPage.clickRemoveBtnForItems()
					expect(await productsPage.getUrl()).toContain(yourCartUrl)
					await yourCartPage.cartItemAndQuantityLabelNotVisible()
				}
			)

			await test.step(
				`User clicks on "Continue Shopping" button on Your Cart page and navigates back to Products page`,
				async () => {
					await yourCartPage.clickContinueShoppingBtn()
					expect(await productsPage.getUrl()).toContain(landingPageUrl)
					await productsPage.verifyProductsPageTitleVisible()
				}
			)

			await test.step(
				`User sorts the Product sort container again to "Name (Z to A)" and verifies the product list is sorted correctly`,
				async () => {
					await productsPage.selectZAFromDropDown()
					const firstItem = await productsPage.getFirstItemFromInventory()
					expect(firstItem).toContain(tShirtRed)
					const lastItem = await productsPage.getLastItemFromInventory()
					expect(lastItem).toContain(backPack)
				}
			)

			await test.step(
				`User clicks on add to cart again for 2 product items and veries the same in cart and clicks shopping cart link to navigate to your cart page`,
				async () => {
					await productsPage.clickAddToCartForItems()
					await productsPage.shoppingCartCountAsTwo()
					await productsPage.clickShoppingCartLink()
					expect(await productsPage.getUrl()).toContain(yourCartUrl)
					await yourCartPage.titleVisible()
				}
			)

			await test.step(
				`User clicks on checkout button on your cart page and navigates to Checkout:Your Information page`,
				async () => {
					await yourCartPage.clickCheckoutBtn()
					await checkoutYourInformationPage.titleVisible()
					expect(await yourCartPage.getUrl()).toBe(checkoutYourInformationUrl)
				}
			)

			await test.step(
				`User clicks on cancel button on Checkout: Your Information page and navigates back to your cart page`,
				async () => {
					await checkoutYourInformationPage.clickCancelBtn()
					expect(await checkoutYourInformationPage.getUrl()).toBe(yourCartUrl)
					await yourCartPage.titleVisible()
				}
			)

			await test.step(
				`User clicks on checkout button again on your cart page and navigates to Checkout:Your Information page`,
				async () => {
					await yourCartPage.clickCheckoutBtn()
					await checkoutYourInformationPage.titleVisible()
					expect(await yourCartPage.getUrl()).toBe(checkoutYourInformationUrl)
				}
			)

			await test.step(
				`User clicks on continue button and validates the error message for firstname`,
				async () => {
					await checkoutYourInformationPage.clickContinueBtn()
					await checkoutYourInformationPage.verifyErrorMessage()
					await checkoutYourInformationPage.VerifyTextFirstNameOfErrorMessage()
				}
			)

			await test.step(
				`User types in the firstname and click continue to validate error message for lastname`,
				async () => {
					await checkoutYourInformationPage.typeFirstName()
					await checkoutYourInformationPage.clickContinueBtn()
					await checkoutYourInformationPage.verifyErrorMessage()
					await checkoutYourInformationPage.VerifyTextLastNameOfErrorMessage()
				}
			)

			await test.step(
				`User types in the firstname and lastname and click continue to validate error message for Postalcode`,
				async () => {
					await checkoutYourInformationPage.typeFirstName()
					await checkoutYourInformationPage.typeLastName()
					await checkoutYourInformationPage.clickContinueBtn()
					await checkoutYourInformationPage.verifyErrorMessage()
					await checkoutYourInformationPage.VerifyTextPostalCodeOfErrorMessage()
				}
			)

			await test.step(
				`User types in the firstname+lastname+postalcode and clicks continue button to navigate to Checkout:Overview page`,
				async () => {
					await checkoutYourInformationPage.typeFirstName()
					await checkoutYourInformationPage.typeLastName()
					await checkoutYourInformationPage.typePostalCode()
					await checkoutYourInformationPage.clickContinueBtn()
					await checkoutOverviewPage.titleVisible()
					expect(await checkoutYourInformationPage.getUrl()).toBe(
						checkoutOverviewUrl
					)
				}
			)

			await test.step(
				`User clicks on cancel button on Checkout:Overview page and navigates back to Home/products page`,
				async () => {
					await checkoutYourInformationPage.clickCancelBtn()
					await productsPage.verifyProductsPageTitleVisible()
					expect(await checkoutYourInformationPage.getUrl()).toBe(
						landingPageUrl
					)
				}
			)

			await test.step(
				`User clicks on Logout button and logs out of the application and navigates to login page`,
				async () => {
					await productsPage.burgerButtonClick()
					await productsPage.logoutSideBarLink()
					await productsPage.clickLogoutSideBarLink()
					expect(await loginPage.getTitle()).toBe(title)
					expect(await loginPage.getUrl()).toContain(baseUrl)
				}
			)

			await test.step(
				`Login as Performance Glitch User and user lands to Products page`,
				async () => {
					await loginPage.loginAsPerformanceGlitchUser()
					expect(await loginPage.getUrl()).toContain(landingPageUrl)
				}
			)

			await test.step(
				`Performance Glitch User clicks on the shopping cart and checks the 2 items in the cart selected earlier by the standard user and navigates to Your Cart page`,
				async () => {
					await productsPage.shoppingCartCountAsTwo()
					await productsPage.clickShoppingCartLink()
					await yourCartPage.titleVisible()
					expect(await productsPage.getUrl()).toContain(yourCartUrl)
				}
			)

			await test.step(
				`Performance Glitch User clicks on Checkout button on Your Cart page to navigate to Checkout:Your Information page`,
				async () => {
					await yourCartPage.clickCheckoutBtn()
					await checkoutYourInformationPage.titleVisible()
					expect(await yourCartPage.getUrl()).toBe(checkoutYourInformationUrl)
				}
			)

			await test.step(
				`Performance Glitch User fills in firstname+lastname+postalcode and clicks "Continue" button to navigate to Checkout:Overview page`,
				async () => {
					await checkoutYourInformationPage.typeFirstName()
					await checkoutYourInformationPage.typeLastName()
					await checkoutYourInformationPage.typePostalCode()
					await checkoutYourInformationPage.clickContinueBtn()
					await checkoutOverviewPage.titleVisible()
					expect(await yourCartPage.getUrl()).toBe(checkoutOverviewUrl)
				}
			)

			await test.step(
				`Performance Glitch User clicks on "Finish" Button on Checkout:Overview page to navigate to Checkout:Complete page`,
				async () => {
					await checkoutOverviewPage.clickFinishBtn()
					await checkoutCompletePage.titleVisible()
					expect(await checkoutOverviewPage.getUrl()).toBe(checkoutCompleteUrl)
				}
			)

			await test.step(
				`Performance Glitch User clicks on "Back Home" button on Checkout: Complete page to navigate back to Products/Home page`,
				async () => {
					await checkoutCompletePage.clickBackHomeButton()
					await productsPage.verifyProductsPageTitleVisible()
					expect(await checkoutCompletePage.getUrl()).toBe(landingPageUrl)
				}
			)

			await test.step(
				`Performance Glitch User clicks on Logout side nav bar link on producst page to exit from the application`,
				async () => {
					await productsPage.burgerButtonClick()
					await productsPage.clickLogoutSideBarLink()
					expect(await loginPage.getTitle()).toBe(title)
					expect(await loginPage.getUrl()).toBe(baseUrl)
				}
			)
		})
	}
)
