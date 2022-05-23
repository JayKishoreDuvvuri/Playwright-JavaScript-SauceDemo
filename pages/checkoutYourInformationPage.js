const BasePage = require('./basePage')
const fs = require('fs')
const {
	appLogo,
	burgerMenuBtn,
	shoppingCartLink,
	footerText,
	swagBotFooter,
	twitterLink,
	facebookLink,
	linkedInLink
} = require('../pageobjects/productsPage')
const {
	title,
	firstName,
	lastName,
	postalCode,
	cancelButton,
	continueButton,
	errorMessage
} = require('../pageobjects/checkoutYourInformationPage')

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class CheckoutYourInformationPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async verifyLogoVisible() {
		return await this.isElementVisible(appLogo, testData.notVisibleText)

	}

	async titleVisible() {
		return await this.isElementVisible(title, testData.notVisibleText)

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

	async verifyErrorMessage() {
		return await this.isElementVisible(errorMessage, testData.notVisibleText)

	}

	async VerifyTextFirstNameOfErrorMessage() {
		return await this.verifyElementText(errorMessage, testData.errorMessageFirstName)
	}

	async VerifyTextLastNameOfErrorMessage() {
		return await this.verifyElementText(errorMessage, testData.errorMessageLasttName)
	}

	async VerifyTextPostalCodeOfErrorMessage() {
		return await this.verifyElementText(errorMessage, testData.errorMessagePostalCode)
	}

	async getRandomName() {
		let randomNumber = Math.floor(Math.random() * 100) + 1
		return `name${new Date().getTime().toString()}${randomNumber}`
	}

	async typeFirstName() {
		const firstNameText = await this.getRandomName()
		return await this.waitAndFill(firstName, firstNameText)

	}

	async typeLastName() {
		const lastNameText = await this.getRandomName()
		return await this.waitAndFill(lastName, lastNameText)

	}

	async typePostalCode() {
		const postalCodeText = await this.getRandomName()
		return await this.waitAndFill(postalCode, postalCodeText)

	}

	async cancelBtnIsEnabled() {
		return await this.isElementEnabled(cancelButton, testData.notEnabledText)

	}

	async clickCancelBtn() {
		return await this.waitAndClick(cancelButton)

	}

	async continueBtnIsEnabled() {
		return await this.isElementEnabled(continueButton, testData.notEnabledText)

	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(facebookLink, testData.notVisibleText)
		await this.isElementVisible(twitterLink, testData.notVisibleText)
		await this.isElementVisible(linkedInLink, testData.notVisibleText)
		await this.isElementVisible(swagBotFooter, testData.notVisibleText)
		await this.isElementVisible(footerText, testData.notVisibleText)
	}

	async clickContinueBtn() {
		return await this.waitAndClick(continueButton, testData.notEnabledText)

	}
}
module.exports = CheckoutYourInformationPage
