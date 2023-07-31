import BasePage from './basePage'
import fs from 'fs'
import {
	appLogo,
	burgerMenuBtn,
	shoppingCartLink,
	fleeceJacketname,
	footerText,
	twitterLink,
	facebookLink,
	linkedInLink
} from '../pageobjects/productsPage'
import {
	title,
	cartQuantityLabel,
	cartItemLabel,
	cartDescriptionLabel,
	cartQuantity,
	flecceJacketText,
	continueShoppingButton,
	removeButton,
	checkoutButton,
	fleeceJacketPrice,
	removeButtonTshirtRed
} from '../pageobjects/yourCartPage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class YourCartPage extends BasePage {
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
			testData.shoppingCartCount
		)
	}

	async titleVisible() {
		return await this.isElementVisible(title, testData.notVisibleText)
	}

	async quantityAndDescriptionLabelVisible() {
		await this.isElementVisible(cartQuantityLabel, testData.notVisibleText)
		return await this.isElementVisible(
			cartDescriptionLabel,
			testData.notVisibleText
		)
	}

	async cartQuantityVisible() {
		await this.isElementVisible(cartQuantity, testData.notVisibleText)
		return await this.verifyElementText(cartQuantity, testData.cartQuantity)
	}

	async itemNameVisible() {
		return await this.isElementVisible(
			fleeceJacketname,
			testData.notVisibleText
		)
	}

	async itemTextVisible() {
		return await this.isElementVisible(
			flecceJacketText,
			testData.notVisibleText
		)
	}

	async itemPriceVisible() {
		return await this.isElementVisible(
			fleeceJacketPrice,
			testData.notVisibleText
		)
	}

	async continueShoppingBtnIsEnabled() {
		return await this.isElementEnabled(
			continueShoppingButton,
			testData.notEnabledText
		)
	}

	async removeBtnIsEnabled() {
		return await this.isElementEnabled(removeButton, testData.notEnabledText)
	}

	async checkoutBtnIsEnabled() {
		return await this.isElementEnabled(checkoutButton, testData.notEnabledText)
	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(facebookLink, testData.notVisibleText)
		await this.isElementVisible(twitterLink, testData.notVisibleText)
		await this.isElementVisible(linkedInLink, testData.notVisibleText)
		// await this.isElementVisible(swagBotFooter, testData.notVisibleText)
		await this.isElementVisible(footerText, testData.notVisibleText)
	}

	async clickContinueShoppingBtn() {
		return await this.waitAndClick(continueShoppingButton)
	}

	async clickCheckoutBtn() {
		return await this.waitAndClick(checkoutButton)
	}

	async clickRemoveBtnForItems() {
		await this.waitAndClick(removeButton)
		return await this.waitAndClick(removeButtonTshirtRed)
	}

	async cartItemAndQuantityLabelNotVisible() {
		await this.isElementNotVisible(cartQuantityLabel, testData.notAvailabletext)
		await this.isElementNotVisible(cartItemLabel, testData.notAvailabletext)
	}
}
export default YourCartPage
