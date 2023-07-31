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
	image,
	backToProductsButton,
	productName,
	productDescription,
	productPrice,
	addToCartButton,
	removeButton
} from '../pageobjects/productDetailsPage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class ProductDetailsPage extends BasePage {
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

	async imageVisible() {
		return await this.isElementVisible(image, testData.notVisibleText)
	}

	async backToProductsButtonIsEnabled() {
		return await this.isElementEnabled(
			backToProductsButton,
			testData.notEnabledText
		)
	}

	async productNameVisible() {
		return await this.isElementVisible(productName, testData.notVisibleText)
	}

	async productDescriptionVisible() {
		return await this.isElementVisible(
			productDescription,
			testData.notVisibleText
		)
	}

	async productDescriptionVisible() {
		return await this.isElementVisible(
			productDescription,
			testData.notVisibleText
		)
	}

	async productPriceVisible() {
		return await this.isElementVisible(productPrice, testData.notVisibleText)
	}

	async clickAddToCartButton() {
		await this.isElementEnabled(addToCartButton, testData.notEnabledText)
		return await this.waitAndClick(addToCartButton)
	}

	async clickRemoveButton() {
		await this.isElementEnabled(removeButton, testData.notEnabledText)
		return await this.waitAndClick(removeButton)
	}

	async shoppingCartCount() {
		return await this.verifyElementText(
			shoppingCartLink,
			testData.shoppingCartCount
		)
	}

	async shoppingCartCountAsEmpty() {
		return await this.verifyElementText(
			shoppingCartLink,
			testData.cartCountEmpty
		)
	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(facebookLink, testData.notVisibleText)
		await this.isElementVisible(twitterLink, testData.notVisibleText)
		await this.isElementVisible(linkedInLink, testData.notVisibleText)
		// await this.isElementVisible(swagBotFooter, testData.notVisibleText)
		await this.isElementVisible(footerText, testData.notVisibleText)
	}

	async clickBackToProductsButton() {
		return await this.waitAndClick(
			backToProductsButton,
			testData.notEnabledText
		)
	}
}
export default ProductDetailsPage
