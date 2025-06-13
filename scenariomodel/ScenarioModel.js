const PageModel = require('../pagemodel/pageModel');

class ScenarioModel extends PageModel {
  constructor(page)  {
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

  const source = this.page.locator("//div[@id='form:drag_content']");
  const target = this.page.locator("//div[@id='form:drop_content']");

  await source.dragTo(target);

  await this.takeScreenshot('drag-and-drop');
  await this.page.waitForTimeout(4000); // Wait for 2 seconds to observe the result
};
// dragAndDrop = async () => {
//   await this.goto('https://leafground.com/drag.xhtml');

//   // Locate the draggable object
//   const source = this.page.locator("//div[@id='form:conpnl_header']");
//   // const sourceBox = await source.boundingBox();
//   // console.log('Source Box:', sourceBox);

//   // if (sourceBox) {
//   //   // Move mouse to center of source element
//   //   await this.page.mouse.move(100,180, { steps: 20 } );
//   //   console.log('Moving mouse to:', { x: 100, y: 180 });  
    
//   //   // Drag the element to a new position
//   //   await this.page.mouse.down();   
//   //   await this.page.mouse.move(150, 150, { steps: 20 });
//   //   console.log('Dragging mouse to:', { x: 300, y: 300 });
//   // }
// await source.hover(); // Hover over the draggable element
// await this.page.mouse.down();
//   // await this.takeScreenshot('drag-and-drop-coordinates');
  
//    await this.page.mouse.move(500, 500, { steps: 200 });
//     console.log('Dragging mouse to:', { x: 300, y: 300 });
//     await this.page.mouse.up();
//     await this.page.waitForTimeout(4000);
// };

}

module.exports = ScenarioModel;
