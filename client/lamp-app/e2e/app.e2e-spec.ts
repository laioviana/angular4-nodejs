import { LampAppPage } from './app.po';

describe('lamp-app App', () => {
  let page: LampAppPage;

  beforeEach(() => {
    page = new LampAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
