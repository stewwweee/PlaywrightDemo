const { test } = require('@playwright/test');
const ScenarioModel = require('../scenariomodel/ScenarioModel');

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
test(`Landing Page @progressbar`, async ({ page }) => {
  const scenario = new ScenarioModel(page);

  await test.step('Go to Home Page', async () => {
    await scenario.progressBar();
  });
});
test(`Landing Page @rangeslider`, async ({ page }) => {
  const scenario = new ScenarioModel(page);

  await test.step('Go to Home Page', async () => {
    await scenario.rangeSlider();
  });
});
