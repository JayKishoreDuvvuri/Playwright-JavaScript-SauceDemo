import { test as fixture } from '@playwright/test'
import LoginPage from '../pages/loginPage'
import ProductsPage from '../pages/productsPage'
import ProductDetailsPage from '../pages/productDetailsPage'
import YourCartPage from '../pages/yourCartPage'
import CheckoutYourInformationPage from '../pages/checkoutYourInformationPage'
import CheckoutOverviewPage from '../pages/checkoutOverviewPage'
import CheckoutCompletePage from '../pages/checkoutCompletePage'

const test = fixture.extend({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page))
	},
	productsPage: async ({ page }, use) => {
		await use(new ProductsPage(page))
	},
	productDetailsPage: async ({ page }, use) => {
		await use(new ProductDetailsPage(page))
	},
	yourCartPage: async ({ page }, use) => {
		await use(new YourCartPage(page))
	},
	checkoutYourInformationPage: async ({ page }, use) => {
		await use(new CheckoutYourInformationPage(page))
	},
	checkoutOverviewPage: async ({ page }, use) => {
		await use(new CheckoutOverviewPage(page))
	},
	checkoutCompletePage: async ({ page }, use) => {
		await use(new CheckoutCompletePage(page))
	}
})
export default test
