import test from '../testFixtures/fixture'
import { expect } from '@playwright/test'
import {
	baseUrl,
	title,
	landingPageUrl,
	yourCartUrl,
	checkoutYourInformationUrl,
	checkoutOverviewUrl,
	checkoutCompleteUrl
} from '../config'

test.describe('Checkout one product end to end', () => {
	test('Checkout one product as a standard user', async ({
		loginPage,
		productsPage,
		yourCartPage,
		checkoutYourInformationPage,
		checkoutOverviewPage,
		checkoutCompletePage
	}) => {
		await test.step('Open the application and verify login page', async () => {
			await loginPage.openApp()
			await loginPage.loginPageLogo()
			expect(await loginPage.getTitle()).toBe(title)
			expect(await loginPage.getUrl()).toContain(baseUrl)
		})

		await test.step('Login as a standard user', async () => {
			await loginPage.loginAsStandardUser()
		})

		await test.step('Verify products page is loaded', async () => {
			await productsPage.verifyProductsPageLogoVisible()
			await productsPage.verifyProductsPageTitleVisible()
			expect(await productsPage.getUrl()).toContain(landingPageUrl)
		})

		await test.step('Add one product to the cart', async () => {
			await productsPage.clickAddToCart()
			await productsPage.shoppingCartCount()
		})

		await test.step('Open the cart and verify checkout page entry', async () => {
			await productsPage.clickShoppingCartLink()
			expect(await yourCartPage.getTitle()).toBe(title)
			expect(await yourCartPage.getUrl()).toBe(yourCartUrl)
		})

		await test.step('Verify cart contents and proceed to checkout', async () => {
			await yourCartPage.verifyLogoVisible()
			await yourCartPage.shoppingCartLinkVisible()
			await yourCartPage.titleVisible()
			await yourCartPage.itemNameVisible()
			await yourCartPage.itemTextVisible()
			await yourCartPage.itemPriceVisible()
			await yourCartPage.checkoutBtnIsEnabled()
			await yourCartPage.clickCheckoutBtn()
		})

		await test.step('Fill customer details and continue', async () => {
			expect(await checkoutYourInformationPage.getUrl()).toBe(
				checkoutYourInformationUrl
			)
			await checkoutYourInformationPage.typeFirstName()
			await checkoutYourInformationPage.typeLastName()
			await checkoutYourInformationPage.typePostalCode()
			await checkoutYourInformationPage.clickContinueBtn()
		})

		await test.step('Verify checkout overview page', async () => {
			expect(await checkoutOverviewPage.getUrl()).toBe(checkoutOverviewUrl)
			await checkoutOverviewPage.verifyLogoVisible()
			await checkoutOverviewPage.titleVisible()
			await checkoutOverviewPage.itemNameVisible()
			await checkoutOverviewPage.itemTextVisible()
			await checkoutOverviewPage.itemPriceVisible()
			await checkoutOverviewPage.finishBtnIsEnabled()
		})

		await test.step('Complete the order', async () => {
			await checkoutOverviewPage.clickFinishBtn()
			expect(await checkoutCompletePage.getUrl()).toBe(checkoutCompleteUrl)
		})

	})
})
