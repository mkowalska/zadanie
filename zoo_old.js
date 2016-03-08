
describe('ZOO', function() {
    it('wpisanie imienia', function() {
        var imie_wpisane = "Mariusz";
        // browser.driver.ignoreSynchronization = true;
        browser.get('http://thetestroom.com/jswebapp/index.html');
        element(by.model('person.name')).sendKeys(imie_wpisane);
        var imie_sczytane = element(by.binding('person.name')).getText();
        expect(imie_sczytane).toEqual(imie_wpisane);
        element(by.id('continue_button')).click();
        var napis = "Select you Animal from the drop down below"
        expect(element(by.xpath('//*[@id="table1"]/tbody/tr[2]/td/div/h1')).getText()).toEqual(napis);

    });
    it('wybor zwierzaka', function() {

        var select = element(by.model('animal'));
        select.$('[value="2"]').click();
        element(by.id('continue_button')).click();
        expect(element(by.xpath('//*[@id="title"]')).getText()).toEqual('Thank you');
    });

    it('powrót', function() {
        element(by.id('back_button')).click();
        expect(element(by.xpath('//*[@id="table1"]/tbody/tr[2]/td/div/h1')).getText()).toEqual('WELCOME TO THE ZOO ADOPTION CENTER');
    });

});

