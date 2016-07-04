import Promise = webdriver.promise.Promise;

export interface IHomePage {
  navigateTo(): Promise<void>;
  getParagraphText(): Promise<string>;
}
