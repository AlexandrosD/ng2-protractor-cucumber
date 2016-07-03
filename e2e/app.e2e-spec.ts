import { BoilerplateBddPage } from './app.po';

describe('boilerplate-bdd App', function() {
  let page: BoilerplateBddPage;

  beforeEach(() => {
    page = new BoilerplateBddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
