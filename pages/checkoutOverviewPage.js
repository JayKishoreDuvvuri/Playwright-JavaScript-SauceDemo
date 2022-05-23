const BasePage = require('./basePage')
const fs = require('fs')
const {
	appLogo,
	burgerMenuBtn,
	shoppingCartLink,
	fleeceJacketname,
	footerText,
	swagBotFooter,
	twitterLink,
	facebookLink,
	linkedInLink
} = require('../pageobjects/productsPage')
const {
	cartQuantityLabel,
	cartDescriptionLabel,
	cartQuantity,
	flecceJacketText,
	fleeceJacketPrice
} = require('../pageobjects/yourCartPage')
const { cancelButton } = require('../pageobjects/checkoutYourInformationPage')
const {
	title,
	paymentInformationLabel,
	secureCardInfo,
	shippingInformationLabel,
	deliveryMessage,
	itemTotalLabel,
	itemTaxLabel,
	summaryTotalLabel,
	finishButton
} = require('../pageobjects/checkoutOverviewPage')

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class CheckoutOverviewPage extends BasePage {
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
		return await this.isElementVisible(shoppingCartLink, testData.notVisibleText)

	}

	async shoppingCartCount() {
		return await this.verifyElementText(shoppingCartLink, testData.shoppingCartCount)
	}

	async titleVisible() {
		return await this.isElementVisible(title, testData.notVisibleText)

	}

	async quantityAndDescriptionLabelVisible() {
		await this.isElementVisible(cartQuantityLabel, testData.notVisibleText)
		return await this.isElementVisible(cartDescriptionLabel, testData.notVisibleText)

	}

	async cartQuantityVisible() {
		await this.isElementVisible(cartQuantity, testData.notVisibleText)
		return await this.verifyElementText(cartQuantity, testData.cartQuantity)

	}

	async itemNameVisible() {
		return await this.isElementVisible(fleeceJacketname, testData.notVisibleText)

	}

	async itemTextVisible() {
		return await this.isElementVisible(flecceJacketText, testData.notVisibleText)

	}

	async itemPriceVisible() {
		return await this.isElementVisible(fleeceJacketPrice, testData.notVisibleText)

	}

	async paymentInformationLabelVisible() {
		return await this.isElementVisible(
			paymentInformationLabel,
			testData.notVisibleText
		)

	}

	async secureCardInfoVisible() {
		return await this.isElementVisible(secureCardInfo, testData.notVisibleText)

	}

	async shippingInformationLabelVisible() {
		return await this.isElementVisible(
			shippingInformationLabel,
			testData.notVisibleText
		)

	}

	async deliveryMessageVisible() {
		return await this.isElementVisible(deliveryMessage, testData.notVisibleText)

	}

	async itemTotalLabelVisible() {
		return await this.isElementVisible(itemTotalLabel, testData.notVisibleText)

	}

	async itemTaxLabelVisible() {
		return await this.isElementVisible(itemTaxLabel, testData.notVisibleText)

	}

	async summaryTotalLabelVisible() {
		return await this.isElementVisible(summaryTotalLabel, testData.notVisibleText)

	}

	async cancelBtnIsEnabled() {
		return await this.isElementEnabled(cancelButton, testData.notEnabledText)

	}

	async finishBtnIsEnabled() {
		return await this.isElementEnabled(finishButton, testData.notEnabledText)

	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(facebookLink, testData.notVisibleText)
		await this.isElementVisible(twitterLink, testData.notVisibleText)
		await this.isElementVisible(linkedInLink, testData.notVisibleText)
		await this.isElementVisible(swagBotFooter, testData.notVisibleText)
		await this.isElementVisible(footerText, testData.notVisibleText)

	}

	async clickFinishBtn() {
		return await this.waitAndClick(finishButton, testData.notEnabledText)

	}
}
module.exports = CheckoutOverviewPage
