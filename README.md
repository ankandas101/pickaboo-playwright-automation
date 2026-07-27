# pikaboo-playwright-practice

This repository is dedicated to learning, practicing, and mastering web automation and end-to-end (E2E) testing using **Playwright** with **JavaScript**.

## 🚀 Features & Practice Scope
- **UI Testing:** Automating user interactions like clicking, typing, and navigating.
- **Assertions:** Validating page elements, text, and application states.
- **Locators:** Mastering different built-in locator strategies in Playwright.
- **Hooks & Framework Basics:** Organizing test suites using `beforeEach`, `afterEach`, and custom configurations.

## 📂 Project Structure
```text
├── tests/               # All test files (e.g., example.spec.js)
├── pageObjects/         # All Pages locators
├── playwright.config.js # Playwright configuration file for JavaScript
├── package.json         # Project dependencies and scripts
└── README.md            # Documentation
```

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pikaboo-playwright-practice
   ```

2. **Initialize Playwright with  JavaScript:**
   ```bash
   npm init playwright@latest
   ```
   *During setup, choose `JavaScript`, name your test folder (default is `tests`), and select `false` for GitHub Actions unless needed.*

3. **Install dependencies:**
   ```bash
   npm install
   ```

## 🧪 Running Tests

You can run your Playwright tests using the following commands:

- **Run all tests in headless mode:**
  ```bash
  npx playwright test
  ```

- **Run tests in UI mode (Interactive View):**
  ```bash
  npx playwright test --ui
  ```

- **Run tests on a specific browser (e.g., Chromium):**
  ```bash
  npx playwright test --project=chromium
  ```

- **Show HTML test report:**
  ```bash
  npx playwright show-report
  ```

## 📝 Author 
Ankan Das
