describe('reading data from char no:', function() {
    beforeAll(function(done){
        browser.driver.ignoreSynchronization = true;
        browser.driver.get('http://trends.builtwith.com/javascript/Angular-JS');
        browser.driver.manage().window().maximize();
        done();
    });
    it('1.3', function() {
        browser.driver.findElement(by.css('.ct-series.ct-series-c')).then(function (ollllll) {
                ollllll.findElements(by.css('.ct-point')).then(function (element){
                    for (var i = 1; i < element.length; i++){
                        element[i].getAttribute('y1').then(function(linkT){
                        console.log(linkT);
                        });
                    }
                });
        });
    });
});