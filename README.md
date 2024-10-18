This project contains automated tests using Playwright for the Zara website. It covers:

1. Managing cookies.
2. Searching for a product.
3. Adding multiple sizes to the cart.
4. Deleting every second item from the cart.
5. Attempting to register with invalid data and checking error messages.

## Prerequisites

- Node.js
- Playwright

## Setup

1. Clone the repository:
   `git clone <repo_url>`
   `cd zara-automation-tests`

2. Install dependencies:
   `npm install`

3. Install Playwright browsers:
   `npx playwright install`
   
## Running Tests

To run the tests for all browsers:
`npm run test:all`

To run tests in a specific browser:
- Chromium:
`npm run test:chromium`
- Firefox:
`npm run test:firefox`
- WebKit:
`npm run test:webkit`

## Structure

- tests/zara.spec.ts: Contains the main test scenarios.
- playwright.config.ts: Configures the browsers and settings.
- package.json: Contains scripts for running the tests.