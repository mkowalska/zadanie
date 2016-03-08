

describe('x', function() {
    it('y', function() {

        browser.get('https://weather.com/de-DE/wetter/stundlich/l/PLXX0029:1:PL');
        for (var j=2;j!=10;j++) {
            //var ikonka = element(by.xpath('//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div['+j+']/a/div/section/h3/span[1]/div'));
            var opis = element(by.xpath('//*[@id="wx-main"]/div[1]/article/div/div/div/div/div['+j+']/a/div/section/h3/span[2]')).getText();
            //ikonka.element(by.tagName('img')).getAttribute('alt').then(function(text) {console.log(text);});
            console.log(opis);
            function myobject(){
                return this.value;
            };
            var opis_pogody = new myobject();
            console.log(opis_pogody.value);
            myobject.prototype.chng = function(){
                return this.value = element(by.xpath('//*[@id="wx-main"]/div[1]/article/div/div/div/div/div['+j+']/a/div/section/h3/span[2]')).getText();
            };
            function objectchanger(obj){
                obj.chng();
            }
            objectchanger(opis_pogody);
            console.log(opis_pogody.value);


                /*var char;
                element(by.xpath('//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div['+j+']/a/div/section/h3/span[2]')).getText().then(function(score){
                    //var q = require('C:/Users/MAGDALEN/AppData/Roaming/npm/node_modules/q');
                    console.log(score);
                    this.char = score;
                    return char;
                });
                if (char!='Bedeckt' ) {
                    console.log('text');
                }; */
            };

    });
});


//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div[1]/a/div/section/h3/span[1]/div/img
//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div[1]/a/div/section/h3/span[2] opis
//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div[2]/a/div/section/h3/span[2]
//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div baza