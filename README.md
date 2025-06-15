# Playwright Demo

This is a demo project for hands-on experience with Playwright automation.

## Project Structure

```
Rootfolder
│
├── scenariomodel/
│   └── ScenarioModel.js
├── tests/
│   └── testleaf.test.js
├── README.md
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd "Playwright demo"
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Running Tests

To run all Playwright tests:
```sh
npx playwright test
```

Or, to run a specific test file:
```sh
npx playwright test tests/testleaf.test.js
```

### Project Highlights

- Demo project for learning Playwright automation.
- Uses Playwright for browser automation.
- Contains scenario models for reusable test logic.
- Example: Captures and logs progress bar values dynamically.

### Folder Descriptions

- `scenariomodel/`: Contains scenario model classes and logic.
- `tests/`: Contains Playwright test files.

## Useful Commands

- Run tests: `npx playwright test`
- Open Playwright Test Runner UI: `npx playwright test --ui`
- Install browsers: `npx playwright install`

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## Demosites
- [Test leaf Demo site](https://www.leafground.com/dashboard.xhtml)
- [Orande HRM demo site](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)
---



