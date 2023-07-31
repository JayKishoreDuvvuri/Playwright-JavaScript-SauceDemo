import BasePage from './basePage'
import fs from 'fs'
import {
	appLogo,
	burgerMenuBtn,
	shoppingCartLink,
	footerText,
	twitterLink,
	facebookLink,
	linkedInLink
} from '../pageobjects/productsPage'
import {
	title,
	completeHeader,
	completeText,
	ponyExpressImage,
	backHomeButton
} from '../pageobjects/checkoutCompletePage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class CheckoutCompletePage extends BasePage {
	constructor(page) {
		super(page)
	}

	async verifyLogoVisible() {
		return await this.isElementVisible(appLogo, testData.notVisibleText)
	}

	async verifyBurgerMenuButtonVisible() {
		return await this.isElementVisible(burgerMenuBtn, testData.notVisibleText)
	}

	async shoppingCartLinkVisible() {
		return await this.isElementVisible(
			shoppingCartLink,
			testData.notVisibleText
		)
	}

	async shoppingCartCount() {
		return await this.verifyElementText(
			shoppingCartLink,
			testData.cartCountEmpty
		)
	}

	async titleVisible() {
		return await this.isElementVisible(title, testData.notVisibleText)
	}

	async completeHeaderVisible() {
		await this.isElementVisible(completeHeader, testData.notVisibleText)
		return await this.verifyElementText(
			completeHeader,
			testData.completeHeaderText
		)
	}

	async completeTextVisible() {
		await this.isElementVisible(completeText, testData.notVisibleText)
		return await this.verifyElementText(
			completeText,
			testData.completeOrderText
		)
	}

	async ponyExpressImageVisible() {
		return await this.isElementVisible(
			ponyExpressImage,
			testData.notVisibleText
		)
	}

	async backHomeButtonISEnabled() {
		return await this.isElementEnabled(backHomeButton, testData.notEnabledText)
	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(facebookLink, testData.notVisibleText)
		await this.isElementVisible(twitterLink, testData.notVisibleText)
		await this.isElementVisible(linkedInLink, testData.notVisibleText)
		// await this.isElementVisible(swagBotFooter, testData.notVisibleText)
		await this.isElementVisible(footerText, testData.notVisibleText)
	}

	async clickBackHomeButton() {
		return await this.waitAndClick(backHomeButton, testData.notEnabledText)
	}
}
export default CheckoutCompletePage
