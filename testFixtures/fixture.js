const base = require("@playwright/test");
const LoginPage = require("../pages/loginPage");
const ProductsPage = require("../pages/productsPage");
const ProductDetailsPage = require("../pages/productDetailsPage");
const YourCartPage = require("../pages/yourCartPage");
const CheckoutYourInformationPage = require("../pages/checkoutYourInformationPage");
const CheckoutOverviewPage = require("../pages/checkoutOverviewPage");
const CheckoutCompletePage = require("../pages/checkoutCompletePage");

const test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  yourCartPage: async ({ page }, use) => {
    await use(new YourCartPage(page));
  },
  checkoutYourInformationPage: async ({ page }, use) => {
    await use(new CheckoutYourInformationPage(page));
  },
  checkoutOverviewPage: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
});
module.exports = test;
