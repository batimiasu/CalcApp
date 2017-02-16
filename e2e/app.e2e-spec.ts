import { CalcAppPage } from './app.po';

describe('calc-app App', function() {
  let page: CalcAppPage;

  beforeEach(() => {
    page = new CalcAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
