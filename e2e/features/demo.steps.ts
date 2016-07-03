import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
var expect = chai.use(chaiAsPromised).expect;
import { BoilerplateBddPage } from '../app.po';

var steps = function steps() {

  var page;
  
  cucumber.Given('/^I open the browser$/', function(callback) {
    page = new BoilerplateBddPage();
    callback();
  });

  cucumber.When('/^I visit the page$/', function(callback) {
    page.navigateTo();
    callback();
  });

  cucumber.Then('/^Then it should display a the message "(.+))"$/', function(text: string, callback) {
    expect(page.getParagraphText()).to.eventually.equal(text).and.notify(callback);
  }); 

}

export = steps;
