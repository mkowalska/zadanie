//http://conceptf1.blogspot.de/2013/11/javascript-closures.html działa fajnie, w następnym dniu dokończenie pętli

describe('x', function() {

    beforeAll(function(){
        browser.get('https://weather.com/de-DE/wetter/stundlich/l/PLXX0029:1:PL');
        browser.driver.manage().window().maximize();
    });

    it('y', function() {
       var myFunctions = [];
        function createMyFunction(i) {
            return function() {
                var ikonka = element(by.xpath('//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div['+i+']/a/div/section/h3/span[1]/div'));
                ikonka.element(by.tagName('img')).getAttribute('alt').then(function(text) {console.log(text, i);});
                element(by.xpath('//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div['+i+']/a/div/section/h3/span[2]')).getText().then(function(text) {
                    console.log(text, i);
                    if (text == "Bedeckt"){
                        expect(ikonka.element(by.tagName('img')).getAttribute('alt')).toEqual("cloudy");
                    };
                });
            };
        }
        for (var i = 2; i<10; i++ ){
            myFunctions[i]=createMyFunction(i);
        }
        for (var j =2; j<10; j++){
            myFunctions[j]();
        }
    });
    it('y', function() {
        var myFunctions = [];

        function createMyFunction(i) {
            return function() {
                var godzina = element.all(by.xpath('//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div['+j+']/a/div/section/div/h2/span')).first();
                var godzina_text = godzina.getText();
                var minuta;
                godzina.click();
                var licznik_sekcji = element.all(by.xpath('//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div['+j+']/a/div/section')).count();
                licznik_sekcji.then(function(liczba){
                    console.log(liczba);
                });

                godzina_text.then(function(text) {
                    console.log(text);
                    minuta = parseFloat(text.substring(3,5));

                    if (j<9){
                        if (minuta == 0 ){
                            //console.log("pełna");
                            expect(licznik_sekcji).toBe(4);
                        } else if (minuta == 15){
                            //console.log("pietnaście");
                            expect(licznik_sekcji).toBe(3);
                        } else if (minuta == 30){
                            //console.log("wpół");
                            expect(licznik_sekcji).toBe(2);
                        }else {
                            //console.log("za pietnaście");
                            expect(licznik_sekcji).toBe(1);
                        }
                    }else {
                        //dopisać co dla ostatniej godziny:
                        /*
                        if (minuta_pierwszej_sekcji == 0 ) {
                            expect(licznik_sekcji).toBe(1);
                        } else if (minuta_pierwszej_sekcji == 15){
                            expect(licznik_sekcji).toBe(4);
                        } else if (minuta_pierwszej_sekcji == 30){
                            expect(licznik_sekcji).toBe(3);
                        } else {
                            expect(licznik_sekcji).toBe(4);
                        }*/
                    }
                });
                godzina.click();
            };
        }
        for (var i = 2; i<10; i++ ){
            myFunctions[i]=createMyFunction(i);
        }
        for (var j =2; j<10; j++){
            myFunctions[j]();
        }
    });
});

