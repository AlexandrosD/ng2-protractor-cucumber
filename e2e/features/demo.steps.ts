import {binding, given, when, then} from 'cucumber-tsflow';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
var expect = chai.use(chaiAsPromised).expect;
import { BoilerplateBddPage } from '../app.po';

@binding()
class DemoSteps {
  
  private page;

  @given(/^I open the browser$/)
  private givenIOpenTheBrowser(callback: cucumber.CallbackStepDefinition): void {
    this.page = new BoilerplateBddPage();
    callback();
  };

  @when(/^I visit the page$/)
  private whenIVisitThePage(callback: cucumber.CallbackStepDefinition): void {
    this.page.navigateTo();
    callback();
  };

  @then(/^it should display a the message '(.+)'$/)
  private thenAssertTitle(text: string, callback: cucumber.CallbackStepDefinition): void {
    expect(this.page.getParagraphText()).to.eventually.equal(text).and.notify(callback);
  };
}

export = DemoSteps;
