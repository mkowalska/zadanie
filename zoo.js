var using = require('jasmine-data-provider');



describe('ZOO', function() {
    using("imiona", ["abc", "longusername", "john_doe"], function(value){
        it('wpisanie imienia', function() {

            // browser.driver.ignoreSynchronization = true;
            browser.get('http://thetestroom.com/jswebapp/index.html');
            element(by.model('person.name')).sendKeys(value);
            var imie_sczytane = element(by.binding('person.name')).getText();
            //expect(imie_sczytane).toEqual(value);
            element(by.id('continue_button')).click();
            var napis = "Select you Animal from the drop down below"
            expect(element(by.xpath('//*[@id="table1"]/tbody/tr[2]/td/div/h1')).getText()).toEqual(napis);
            var select = element(by.model('animal'));
            select.$('[value="2"]').click();
            element(by.id('continue_button')).click();
            expect(element(by.xpath('//*[@id="title"]')).getText()).toEqual('Thank you');
            element(by.id('back_button')).click();
            expect(element(by.xpath('//*[@id="table1"]/tbody/tr[2]/td/div/h1')).getText()).toEqual('WELCOME TO THE ZOO ADOPTION CENTER');
        });
    });
});

