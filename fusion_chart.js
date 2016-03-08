var func = require('./funkcje.js');
describe('reading data from char no:', function() {
    beforeAll(function(done){
        browser.driver.ignoreSynchronization = true;
        browser.driver.get('http://www.fusioncharts.com/charts/pie-doughnut-charts/');
        browser.driver.manage().window().maximize();
        done();
    });
    it ('policz wykresy', function() {

        func.number_of_charts().then(function (ilosc_wykresow) {
            console.log('wykresów jest '+ilosc_wykresow)
        })
    }, 10000);

    it('otworz pierwszy wykres', function() {
        setTimeout(function(){
            browser.driver.findElement(by.xpath('//*[@id="pagespeed_img_rwb3-p9Q6D"]')).click();
        }, 10000);
        setTimeout(function(){
            func.data_from_chart();
            expect(1).toBe(1);
        }, 10000);
        //func.next_chart();
    });
});

