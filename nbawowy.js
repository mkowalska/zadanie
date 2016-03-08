/**
 * Created by MAGDALEN on 10.02.2016.
 */

describe('x', function() {
    it('y', function() {
        browser.driver.ignoreSynchronization = true;
        browser.get('https://weather.com/de-DE/wetter/stundlich/l/PLXX0029:1:PL').then(function(website){
            for (j=1;j!=9;j++) {

                var char;
                element(by.xpath('//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div['+j+']/a/div/section/p[4]/span')).getText().then(function(score){
                    var q = require('C:/Users/MAGDALEN/AppData/Roaming/npm/node_modules/q');
                    var t = [];
                    t.push(score);
                    q.all(t).done(function(ressu){
                        char = ressu
                        //console.log(char);
                        return char;
                    });

                });
                console.log(char);
            };
        });
    });
});


//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div[1]/a/div/section/h3/span[1]/div/img  chmurka
//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div[1]/a/div/section/h3/span[1]/div/img
//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div[1]/a/div/section/h3/span[2] opis
//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div baza
//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div[1]/a/div/section/p[4]/span