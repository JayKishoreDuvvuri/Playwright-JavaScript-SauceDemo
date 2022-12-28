import BasePage from './basePage'
import { baseUrl } from '../config'
import fs from 'fs'
import {
	loginPageLogo,
	username,
	password,
	loginButton,
	loginPageBotImage,
	loginCredentials,
	loginPasswordCredentials
} from '../pageobjects/loginPage'

import { errorMessage } from '../pageobjects/checkoutYourInformationPage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class LoginPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async openApp() {
		await super.open(baseUrl)
		return await super.waitForPageLoad()
	}

	async loginPageLogo() {
		return await this.isElementVisible(loginPageLogo, testData.notVisibleText)
	}

	async usernameFieldVisible() {
		return await this.isElementVisible(username, testData.notVisibleText)
	}

	async passwordFieldVisible() {
		return await this.isElementVisible(password, testData.notVisibleText)
	}

	async loginButtonIsEnabled() {
		return await this.isElementEnabled(loginButton, testData.notEnabledText)
	}

	async botImageVisible() {
		return await this.isElementEnabled(
			loginPageBotImage,
			testData.notVisibleText
		)
	}

	async loginCredentialsVisible() {
		return await this.isElementEnabled(
			loginCredentials,
			testData.notVisibleText
		)
	}

	async passwordCredentialsVisible() {
		return await this.isElementEnabled(
			loginPasswordCredentials,
			testData.notVisibleText
		)
	}

	async loginAsStandardUser() {
		await this.waitAndFill(username, testData.standard_user)
		await this.waitAndFill(password, testData.password)
		await this.waitAndClick(loginButton)
	}

	async loginAsPerformanceGlitchUser() {
		await this.waitAndFill(username, testData.performance_glitch_user)
		await this.waitAndFill(password, testData.password)
		await this.waitAndClick(loginButton)
	}

	async loginAsProblemUser() {
		await this.waitAndFill(username, testData.problem_user)
		await this.waitAndFill(password, testData.password)
		await this.waitAndClick(loginButton)
	}

	async loginAsLockedOutUser() {
		await this.waitAndFill(username, testData.locked_out_user)
		await this.waitAndFill(password, testData.password)
		await this.waitAndClick(loginButton)
	}

	async verifyErrorMessage() {
		return await this.isElementVisible(errorMessage, testData.notVisibleText)
	}

	async VerifyLockedOutUserErrorMessage() {
		return await this.verifyElementText(
			errorMessage,
			testData.errorMessageLockedOutUser
		)
	}
}
export default LoginPage
