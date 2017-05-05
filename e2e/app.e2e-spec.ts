import { AngularKarmaChromeHeadlessDemoPage } from './app.po';

describe('angular-karma-chrome-headless-demo App', () => {
  let page: AngularKarmaChromeHeadlessDemoPage;

  beforeEach(() => {
    page = new AngularKarmaChromeHeadlessDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
