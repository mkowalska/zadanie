var func = require('./page_1.js');
require('C:/Users/magdalen/node_modules/jasmine-custom-message');

describe('On first page', function() {
    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });
    it ('check the title of the page', function() {
        browser.driver.get('http://demoqa.com');
        func.title_of_page().then(function(tytul){
           since('Zły tytuł!').expect(tytul).toEqual('Home');
        });
    });
    it ('check content of Tabs', function() {
        func.content_of_tabs();

    });
});

