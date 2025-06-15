class PageModel {
  constructor(page) {
    this.page = page;
   

  }

  waitForPageLoad = () => {
    return this.page.waitForLoadState('domcontentloaded');
  };
scrollToBottom = async () => {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }
  takeScreenshot = async (name) => {
    const timestamp = Date.now();
    const screenshotPath = `screenshots/${name}-${timestamp}.png`;
    await this.page.screenshot({ path: screenshotPath ,fullPage: true });

    if (this.testinfo) {
      await this.testinfo.attach(name, { path: screenshotPath, contentType: 'image/png' });
    }
  };
   dragElementByOffset = async(locator, offsetX) => {
  const box = await locator.boundingBox();
  if (box) {
    const startX = box.x + box.width / 2;
    const startY = box.y + box.height / 2;
    await this.page.mouse.move(startX, startY);
    await this.page.mouse.down();
    await this.page.mouse.move(startX + offsetX, startY, { steps: 200 });
    await this.page.mouse.up();
  }
}


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
