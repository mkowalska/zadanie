//nie działa mi pętla for, ale próbuję zrobić to tak jak w http://conceptf1.blogspot.de/2013/11/javascript-closures.html

describe('x', function() {
    var opis;

    it ("otwieram stronę", function(){
        browser.get('https://weather.com/de-DE/wetter/stundlich/l/PLXX0029:1:PL');
    });
    for (var j=2;j<9;j++) {
        it('y', function() {
            opis = element(by.xpath('//*[@id="wx-main"]/div[1]/article/div/div/div/div/div[2]/div['+j+']/a/div/section/h3/span[2]'));
            opis.getText().then(function(text){
                console.log(text);
            });
            //done();
        });
    };//koniec pętli
});


