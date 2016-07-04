import { IHomePage } from '../homepage.api';
import Promise = webdriver.promise.Promise;

export class HomePage implements IHomePage {
  navigateTo(): Promise<void> {
    return browser.get('/');
  }

  getParagraphText(): Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}
