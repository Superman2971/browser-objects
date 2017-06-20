import { BrowserObjectsPage } from './app.po';

describe('browser-objects App', function() {
  let page: BrowserObjectsPage;

  beforeEach(() => {
    page = new BrowserObjectsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
