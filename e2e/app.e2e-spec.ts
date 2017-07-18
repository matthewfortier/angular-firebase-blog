import { AngularBlogPage } from './app.po';

describe('angular-blog App', () => {
  let page: AngularBlogPage;

  beforeEach(() => {
    page = new AngularBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
