import { expect } from '@playwright/test'

class BasePage {
	constructor(page) {
		this.page = page
	}

	async open(url) {
		return await this.page.goto(url)
	}

	async getTitle() {
		return await this.page.title()
	}

	async pause() {
		return await this.page.pause()
	}

	async getUrl() {
		return this.page.url()
	}

	async wait() {
		return this.page.waitForTimeout(10000)
	}

	async waitForPageLoad() {
		return await this.page.waitForLoadState('domcontentloaded')
	}

	async waitAndClick(selector) {
		return await this.page.click(selector)
	}

	async waitAndHardClick(selector) {
		return await this.page.$eval(selector, element => element.click())
	}

	async waitAndFill(selector, text) {
		return await this.page.fill(selector, text)
	}

	async keyPress(selector, key) {
		return await this.page.press(selector, key)
	}

	async takeScreenShot() {
		return expect(await this.page.screenshot()).toMatchSnapshot(
			'MyScreenShot.png'
		)
	}

	async verifyElementText(selector, text) {
		const textValue = await this.page.textContent(selector)
		return expect(textValue.trim()).toBe(text)
	}

	async verifyElementContainsText(selector, text) {
		const locatorText = await this.page.locator(selector)
		return await expect(locatorText).toContainText(text)
	}

	async verifyJSElementValue(selector, text) {
		const textValue = await this.page.$eval(selector, element => element.value)
		return expect(textValue.trim()).toBe(text)
	}

	async selectValueFromDropdown(selector, text) {
		const dropdown = await this.page.locator(selector)
		return await dropdown.selectOption({ value: text })
	}

	async verifyElementAttribute(selector, attribute, value) {
		const textValue = await this.page.getAttribute(selector, attribute)
		return expect(textValue.trim()).toBe(value)
	}

	async getFirstElementFromTheList(selector) {
		const rows = await this.page.locator(selector)
		const count = await rows.count()
		for (let i = 0; i < count; ++i) {
			const firstItem = await rows.nth(0).textContent()
			return firstItem
		}
	}

	async getLastElementFromTheList(selector) {
		const rows = await this.page.locator(selector)
		const count = await rows.count()
		for (let i = 0; i < count; ++i) {
			const lastItem = await rows.nth(5).textContent()
			return lastItem
		}
	}

	async clickAllElements(selector) {
		const rows = await this.page.locator(selector)
		const count = 2
		for (let i = 0; i < count; ++i) {
			await rows.nth(i).click()
		}
	}
 
	async clickAllLinksInNewTabs(selector) {
		const rows = this.page.locator(selector)
		const count = rows.count()
		for (i in range(count)) {
			await rows.nth(i).click((modifiers = ['Control', 'Shift']))
		}
	}

	async isElementVisible(selector, errorMessage) {
		const element = this.page.locator(selector)
		try {
			const isVisible = await element.isVisible()
			expect(isVisible).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}

	async isElementNotVisible(selector) {
		const element = this.page.locator(selector)
		return expect(element).toBeHidden
	}

	async isElementEnabled(selector, errorMessage) {
		const element = this.page.locator(selector)
		try {
			const isEnabled = await element.isEnabled()
			expect(isEnabled).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}

	async isElementChecked(selector, errorMessage) {
		const element = this.page.locator(selector)
		try {
			const isChecked = await element.isChecked()
			expect(isChecked).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}
}
export default BasePage
