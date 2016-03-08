/**
 * Created by magdalen on 04.02.2016.
 */
describe('Protractor Demo App', function() {
    it('open email', function() {
        browser.driver.ignoreSynchronization = true;
        browser.driver.get('https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/&hl=de#identifier');
        browser.driver.findElement(by.id('Email')).sendKeys('tefmk123123');
        browser.driver.findElement(by.id('next')).click();
        browser.driver.findElement(by.id('Passwd')).sendKeys('Kotfilemon123');
        browser.driver.findElement(by.id('signIn')).click();
    });
});