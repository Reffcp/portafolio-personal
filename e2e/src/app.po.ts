import { browser, by, element } from 'protractor';

export class AppPage {
<<<<<<< HEAD
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
=======
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
>>>>>>> 32caa8ed5f9c4704b95ea9c87df60f6aef20ca29
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
