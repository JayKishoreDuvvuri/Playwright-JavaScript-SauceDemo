# Copilot Instructions for SauceDemo Playwright Project

## Project context
- This project uses Playwright with JavaScript for UI automation.
- The application under test is SauceDemo.
- Follow the existing Page Object Model (POM) structure.

## Folder and file conventions
- Place test scenarios in the tests/ folder with names like TC_01_productPage.test.js.
- Keep page object classes in the pages/ folder.
- Keep selectors and locators in the pageobjects/ folder.
- Reuse shared test setup from testFixtures/fixture.js.
- Store test data in data/users.json and configuration in config.js.

## Script generation rules
- Write tests using Playwright test syntax with async/await.
- Use import test from ../testFixtures/fixture and import { expect } from '@playwright/test'.
- Prefer reusable page methods instead of writing raw locator code inside tests.
- Keep selectors centralized in page objects and avoid duplicate locator definitions in tests.
- Use test.step() to structure long scenarios into readable actions.
- Use descriptive test names that explain the business behavior.
- Use existing helper methods from the BasePage class when available.
- Avoid hardcoded URLs, usernames, or passwords in tests; use config and test data files.

## Assertions and quality
- Assert visible state, enabled state, URL, title, and text using expect.
- Keep tests stable and avoid flaky waits; prefer Playwright's built-in waiting mechanisms.
- Make generated scripts modular, readable, and easy to maintain.
- Follow the project’s existing naming style: camelCase for methods and files.

## When generating a new automation script
1. Identify the target page and action flow.
2. Add or reuse the appropriate page object methods.
3. Create a test in tests/ using the existing pattern.
4. Use existing fixtures and test data.
5. Keep the script aligned with the current project structure and naming style.
