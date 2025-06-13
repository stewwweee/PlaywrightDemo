const { expect } = require('@playwright/test');

class PageModel {
  constructor(page) {
    this.page = page;
   

  }

  waitForPageLoad = () => {
    return this.page.waitForLoadState('domcontentloaded');
  };

  takeScreenshot = async (name) => {
    const timestamp = Date.now();
    const screenshotPath = `screenshots/${name}-${timestamp}.png`;
    await this.page.screenshot({ path: screenshotPath });

    if (this.testinfo) {
      await this.testinfo.attach(name, { path: screenshotPath, contentType: 'image/png' });
    }
  };

  click = async (selector) => {
    await this.page.locator(selector).click();
  };

  type = async (selector, text) => {
    await this.page.locator(selector).fill(text);
  };

  selectOption = async (selector, option) => {
    await this.page.locator(selector).selectOption(option);
  };

  getText = async (selector) => {
    return await this.page.locator(selector).textContent();
  };

  isVisible = async (selector) => {
    return await this.page.locator(selector).isVisible();
  };

  getCount = async (selector) => {
    return await this.page.locator(selector).count();
  };

  getNthElement = (selector, index) => {
    return this.page.locator(selector).nth(index);
  };

  getElementText = async (selector, index) => {
    return await this.getNthElement(selector, index).textContent();
  };

  getElementAttribute = async (selector, index, attribute) => {
    return await this.getNthElement(selector, index).getAttribute(attribute);
  };
}

module.exports = PageModel;
