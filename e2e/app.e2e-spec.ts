import {WebDemoPage} from "./app.po";

describe('web-demo App', function() {
  let page: WebDemoPage;

  beforeEach(() => {
    page = new WebDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
