import { Angular2LokiPage } from './app.po';

describe('angular2-loki App', function() {
  let page: Angular2LokiPage;

  beforeEach(() => {
    page = new Angular2LokiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
