/**
 * Created by MAGDALEN on 10.02.2016.
 */

describe('x', function() {

    it('y', function() {
        browser.get('https://weather.com/de-DE/wetter/stundlich/l/PLXX0029:1:PL');
        var dane = element.all(by.xpath('//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div')).getText().then(function(text) {
            console.log(text);
        });
    });
});
