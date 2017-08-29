import { NgDemoPage } from './app.po';

describe('ng-demo App', () => {
  let page: NgDemoPage;

  beforeEach(() => {
    page = new NgDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
