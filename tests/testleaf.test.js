const { test } = require('@playwright/test');
const ScenarioModel = require('../scenariomodel/scenarioModel');

test(`Landing Page @homepage`, async ({ page }) => {
  const scenario = new ScenarioModel(page);

  await test.step('Go to Home Page', async () => {
    await scenario.gotoHomePage();
  });
});

test(`Landing Page @draganddrop`, async ({ page }) => {
  const scenario = new ScenarioModel(page);

  await test.step('Go to Home Page', async () => {
    await scenario.dragAndDrop();
  });
});
