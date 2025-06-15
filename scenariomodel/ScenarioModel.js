const exp = require('constants');
const PageModel = require('../pagemodel/PageModel');

class ScenarioModel extends PageModel {
  constructor(page) {
    super(page);
    this.page = page;

  }

  goto = async (url) => {
    await this.page.goto(url);
    await this.waitForPageLoad();
  };




  /**
   * Navigate to the Leafground home page.
   * This method initializes the browser context and navigates to the Leafground dashboard.
   */

  gotoHomePage = async () => {

    await this.goto('https://leafground.com/dashboard.xhtml');
    await this.takeScreenshot('home-page');
  };

  dragAndDrop = async () => {
    await this.goto('https://leafground.com/drag.xhtml');

    const source = this.page.locator("//tbody[@id='form:j_idt111_data']//tr[@data-ri='5']");
    const target = this.page.locator("//tbody[@id='form:j_idt111_data']//tr[@data-ri='0']");

    await source.dragTo(target);
    const locatorMoved = this.page.locator("//div[@class='ui-growl-message']");
    await locatorMoved.waitFor({ state: 'visible' });
    const message = await locatorMoved.textContent();
    console.log('Drag and Drop Message:', message);
    const rowCount = await this.page.locator("//tbody[@id='form:j_idt111_data']//tr").count();
    console.log('Row Count After Drag and Drop:', rowCount);
    let rowValue = await this.page.locator("//tbody[@id='form:j_idt111_data']//tr[@data-ri='5']").textContent();
    console.log('Row Value After Drag and Drop:', rowValue);
    await this.page.waitForTimeout(4000);
  }

  dragAndDropMouse = async () => {
    await this.goto('https://leafground.com/drag.xhtml');

    // Locate the draggable object
    const source = this.page.locator("//div[@id='form:conpnl_header']");
    const sourceBox = await source.boundingBox();
    console.log('Source Box:', sourceBox);

    if (sourceBox) {
      // Move mouse to center of source element
      await this.page.mouse.move(100, 180, { steps: 20 });
      console.log('Moving mouse to:', { x: 100, y: 180 });

      // Drag the element to a new position
      await this.page.mouse.down();
      await this.page.mouse.move(150, 150, { steps: 20 });
      console.log('Dragging mouse to:', { x: 300, y: 300 });
    }
    await source.hover(); // Hover over the draggable element
    await this.page.mouse.down();
    await this.takeScreenshot('drag-and-drop-coordinates');

    await this.page.mouse.move(500, 500, { steps: 200 });
    console.log('Dragging mouse to:', { x: 300, y: 300 });
    await this.page.mouse.up();
    await this.page.waitForTimeout(4000);
  };
  progressBar = async () => {
    await this.goto('https://leafground.com/drag.xhtml');
    await this.waitForPageLoad();
    await this.page.waitForTimeout(4000);
    await this.page.locator("//button[@id='form:j_idt119']").click();
    console.log('Clicked on Progress Bar Button');

    const progressBarLabel = this.page.locator('.ui-progressbar-label');
    await progressBarLabel.waitFor({ state: 'visible' });

    let progressValue = await progressBarLabel.textContent();
    console.log('Progress Bar Value:', progressValue);

    // Poll the progress bar dynamically until it reaches 100% or disappears
    while (progressValue !== '100%') {
      await this.page.waitForTimeout(300); // Poll every 300ms
      if (!(await progressBarLabel.isVisible())) {
        console.log('Progress bar disappeared before reaching 100%');
        break;
      }
      progressValue = await progressBarLabel.textContent();
      console.log('Progress Bar Value:', progressValue);
    }

    if (progressValue === '100%') {
      const progressComplete = this.page.locator("//div[@class='ui-growl-message']");
      await progressComplete.waitFor({ state: 'visible' });
      const message = await progressComplete.textContent();
      console.log(message);

    }
  };
  rangeSlider = async () => {
    await this.goto('https://leafground.com/drag.xhtml');
    await this.page.waitForTimeout(4000);
   await this.scrollToBottom();
    const sliderLeft = this.page.locator("//div[@id='form:j_idt125']//span[1]");
    await sliderLeft.waitFor({ state: 'visible' });
    if (!await sliderLeft.isVisible()) {
      console.log('Left slider is not visible');
      return;
    }else {
      console.log('Left slider is visible');
    }
    await sliderLeft.waitFor({ state: 'visible' });
    console.log('Dragging left slider by 200 pixels');
    await this.dragElementByOffset(sliderLeft, - 80);
    await this.page.waitForTimeout(2000);

   const sliderRight = this.page.locator("//div[@id='form:j_idt125']//span[2]");
   if (!await sliderRight.isVisible()) {
      console.log('Right slider is not visible');
      return;
    }else {
      console.log('Right slider is visible');
    }
      await sliderRight.waitFor({ state: 'visible' });
    console.log('Dragging right slider by -600 pixels');
    await this.dragElementByOffset(sliderRight, 60);
  };
}

module.exports = ScenarioModel;
