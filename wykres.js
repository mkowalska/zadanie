/**
 * Created by magdalen on 04.02.2016.
 */
describe('Protractor Demo App', function() {
    it('open chart', function() {
        browser.driver.ignoreSynchronization = true;
        browser.driver.get('http://stockcharts.com/freecharts/marketsummary.html?E');

        browser.driver.findElement(by.css('.th-inner')).getText().then(function(text) {
            console.log(text);
        });
        browser.driver.findElement(by.css('.marketsummary-sym')).getText().then(function(text) {
            console.log(text);
            });

        });
});