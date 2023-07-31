import BasePage from './basePage'
import fs from 'fs'
import {
	appLogo,
	landingPageTitle,
	landingPageImage,
	burgerMenuBtn,
	burgerCrossButton,
	allItemsSideBarLink,
	aboutSideBarLink,
	logoutSideBarLink,
	resetSideBarLink,
	shoppingCartLink,
	productSortContainer,
	inventoryContainer,
	backPackImage,
	backPackName,
	backPackText,
	backPackPrice,
	backPackAddToCartBtn,
	boltTshirtImage,
	boltTshirtName,
	boltTshirtText,
	boltTshirtPrice,
	boltTshirtAddToCartBtn,
	onesieImage,
	onesieName,
	onesieText,
	onesiePrice,
	onesieAddToCartBtn,
	bikeLightImage,
	bikeLightName,
	bikeLightText,
	bikeLightPrice,
	bikeLightAddToCartBtn,
	fleeceJacketImage,
	fleeceJacketname,
	flecceJacketText,
	fleeceJacketPrice,
	fleeceJacketAddToCartBtn,
	tshirtRedImage,
	tshirtRedName,
	tshirtRedText,
	tshirtRedPrice,
	tshirtRedAddToCartBtn,
	listOfElements,
	footerText,
	twitterLink,
	facebookLink,
	linkedInLink,
	removeButton,
	addtoCartBtnAll
} from '../pageobjects/productsPage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class ProductsPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async verifyProductsPageLogoVisible() {
		return await this.isElementVisible(appLogo, testData.notVisibleText)
	}

	async verifyProductsPageTitleVisible() {
		return await this.isElementVisible(
			landingPageTitle,
			testData.notVisibleText
		)
	}

	async verifyPeekImage() {
		return await this.isElementVisible(
			landingPageImage,
			testData.notVisibleText
		)
	}

	async burgerButtonVisible() {
		return await this.isElementVisible(burgerMenuBtn, testData.notVisibleText)
	}

	async burgerButtonClick() {
		return await this.waitAndClick(burgerMenuBtn)
	}

	async burgerCrossButtonVisible() {
		return await this.isElementVisible(
			burgerCrossButton,
			testData.notVisibleText
		)
	}

	async burgerCrossButtonClick() {
		return await this.waitAndClick(burgerCrossButton)
	}

	async allItemsSideBarLink() {
		return await this.isElementVisible(
			allItemsSideBarLink,
			testData.notVisibleText
		)
	}

	async aboutSideBarLink() {
		return await this.isElementVisible(
			aboutSideBarLink,
			testData.notVisibleText
		)
	}

	async clickAboutSideBarLink() {
		return await this.waitAndClick(aboutSideBarLink)
	}

	async logoutSideBarLink() {
		await this.isElementVisible(logoutSideBarLink, testData.notVisibleText)
		return await this.waitForPageLoad()
	}

	async clickLogoutSideBarLink() {
		return await this.waitAndClick(logoutSideBarLink)
	}

	async resetSideBarLink() {
		return await this.isElementVisible(
			resetSideBarLink,
			testData.notVisibleText
		)
	}

	async shoppingCartLink() {
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

	async shoppingCartCountAsEmpty() {
		return await this.verifyElementText(
			shoppingCartLink,
			testData.cartCountEmpty
		)
	}

	async shoppingCartCountAsTwo() {
		return await this.verifyElementText(
			shoppingCartLink,
			testData.cartCountAsTwo
		)
	}

	async shoppingCartCountAsSix() {
		return await this.verifyElementText(
			shoppingCartLink,
			testData.cartCountAsSix
		)
	}

	async clickShoppingCartLink() {
		return await this.waitAndClick(shoppingCartLink)
	}

	async productSortContainerVisible() {
		return await this.isElementVisible(
			productSortContainer,
			testData.notVisibleText
		)
	}

	async selectZAFromDropDown() {
		return await this.selectValueFromDropdown(
			productSortContainer,
			testData.optionZA
		)
	}

	async selectLowToHighFromDropDown() {
		return await this.selectValueFromDropdown(
			productSortContainer,
			testData.optionLowToHigh
		)
	}

	async selectHighToLowFromDropDown() {
		return await this.selectValueFromDropdown(
			productSortContainer,
			testData.optionHighToLow
		)
	}

	async inventoryContainerVisible() {
		return await this.isElementVisible(
			inventoryContainer,
			testData.notVisibleText
		)
	}

	async backPackItem() {
		await this.isElementVisible(backPackImage, testData.notVisibleText)
		await this.isElementVisible(backPackName, testData.notVisibleText)
		await this.isElementVisible(backPackText, testData.notVisibleText)
		await this.verifyElementText(backPackText, testData.backPackText)
		await this.isElementVisible(backPackPrice, testData.notVisibleText)
		await this.isElementEnabled(backPackAddToCartBtn, testData.notEnabledText)
	}

	async addToCartButtonIsEnabled() {
		return await this.isElementVisible(
			backPackAddToCartBtn,
			testData.notEnabledText
		)
	}

	async clickBackPackItem() {
		return await this.waitAndClick(backPackImage)
	}

	async clickAddToCartBtn() {
		return await this.waitAndClick(backPackAddToCartBtn)
	}

	async clickRemoveButton() {
		return await this.waitAndClick(removeButton)
	}

	async boltTshirtItem() {
		await this.isElementVisible(boltTshirtImage, testData.notVisibleText)
		await this.isElementVisible(boltTshirtName, testData.notVisibleText)
		await this.isElementVisible(boltTshirtText, testData.notVisibleText)
		await this.verifyElementText(boltTshirtText, testData.boltTshirtText)
		await this.isElementVisible(boltTshirtPrice, testData.notVisibleText)
		await this.isElementEnabled(boltTshirtAddToCartBtn, testData.notEnabledText)
	}

	async onesieItem() {
		await this.isElementVisible(onesieImage, testData.notVisibleText)
		await this.isElementVisible(onesieName, testData.notVisibleText)
		await this.isElementVisible(onesieText, testData.notVisibleText)
		await this.verifyElementText(onesieText, testData.onesieText)
		await this.isElementVisible(onesiePrice, testData.notVisibleText)
		await this.isElementEnabled(onesieAddToCartBtn, testData.notEnabledText)
	}

	async bikeLightItem() {
		await this.isElementVisible(bikeLightImage, testData.notVisibleText)
		await this.isElementVisible(bikeLightName, testData.notVisibleText)
		await this.isElementVisible(bikeLightText, testData.notVisibleText)
		await this.verifyElementText(bikeLightText, testData.bikeLightText)
		await this.isElementVisible(bikeLightPrice, testData.notVisibleText)
		await this.isElementEnabled(bikeLightAddToCartBtn, testData.notEnabledText)
	}

	async fleeceJacketItem() {
		await this.isElementVisible(fleeceJacketImage, testData.notVisibleText)
		await this.isElementVisible(fleeceJacketname, testData.notVisibleText)
		await this.isElementVisible(flecceJacketText, testData.notVisibleText)
		await this.verifyElementText(flecceJacketText, testData.fleeceJacketText)
		await this.isElementVisible(fleeceJacketPrice, testData.notVisibleText)
		await this.isElementEnabled(
			fleeceJacketAddToCartBtn,
			testData.notEnabledText
		)
	}

	async clickAddToCart() {
		await this.isElementEnabled(
			fleeceJacketAddToCartBtn,
			testData.notEnabledText
		)
		return await this.waitAndClick(fleeceJacketAddToCartBtn)
	}

	async clickAddToCartForItems() {
		return await this.clickAllElements(addtoCartBtnAll)
	}

	async tshirtRedItem() {
		await this.isElementVisible(tshirtRedImage, testData.notVisibleText)
		await this.isElementVisible(tshirtRedName, testData.notVisibleText)
		await this.isElementVisible(tshirtRedText, testData.notVisibleText)
		await this.verifyElementText(tshirtRedText, testData.tshirtRedText)
		await this.isElementVisible(tshirtRedPrice, testData.notVisibleText)
		await this.isElementEnabled(tshirtRedAddToCartBtn, testData.notEnabledText)
	}

	async getFirstItemFromInventory() {
		const firstItem = await this.getFirstElementFromTheList(listOfElements)
		return firstItem
	}

	async getLastItemFromInventory() {
		const lastItem = await this.getLastElementFromTheList(listOfElements)
		return lastItem
	}

	async footerTextVisible() {
		return await this.isElementVisible(footerText, testData.notVisibleText)
	}

	// async swagBotFooterVisible() {
	// 	return await this.isElementVisible(swagBotFooter, testData.notVisibleText)
	// }

	async socialChannelLinksVisible() {
		await this.isElementVisible(twitterLink, testData.notVisibleText)
		await this.isElementVisible(facebookLink, testData.notVisibleText)
		await this.isElementVisible(linkedInLink, testData.notVisibleText)
	}
}
export default ProductsPage
