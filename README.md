# Vantage Fit Dashboard Automation

This project contains automated tests for the Vantage Fit Dashboard using Playwright.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

- Run all tests:
```bash
npm test
```

- Run tests in headed mode (with browser UI):
```bash
npm run test:headed
```

- Run tests in debug mode:
```bash
npm run test:debug
```

- View test report:
```bash
npm run report
```

## Project Structure

- `tests/` - Contains all test files
- `pages/` - Contains Page Object Models
  - `BasePage.ts` - Base page object with common methods
  - `LoginPage.ts` - Login page specific methods
- `playwright.config.ts` - Playwright configuration

## Writing Tests

1. Create new page objects in the `pages/` directory
2. Create test files in the `tests/` directory
3. Use the page objects in your tests for better maintainability

## Best Practices

- Use data-testid attributes for reliable element selection
- Keep tests independent and atomic
- Use page objects to encapsulate page-specific logic
- Add meaningful assertions to verify expected behavior
