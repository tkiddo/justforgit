import { ZeroPage } from './app.po';

describe('zero App', () => {
  let page: ZeroPage;

  beforeEach(() => {
    page = new ZeroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
