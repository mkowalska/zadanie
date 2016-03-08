/**
 * Created by magdalen on 04.02.2016.
 */
describe('Protractor Demo App', function() {
    it('open chart', function() {
        browser.driver.ignoreSynchronization = true;
        browser.get('http://www.fusioncharts.com/angularjs-charts/#/demos/ex2');


        element(by.css('.fusioncharts-legenditem')).getText().then(function(text) {
            console.log(text);
        });



    });
});