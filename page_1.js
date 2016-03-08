function title_of_page(){
   var x = browser.driver.findElement(by.css('.site-content.container')).then(function(step){
         return step.findElement(by.css('.content-area.col-md-8')).then(function (step2) {
             return step2.findElement(by.css('.site-main')).then(function (step3) {
                return step3.findElement(by.css('.post-9.page.type-page.status-publish.hentry')).then(function (step4) {
                    return step4.findElement(by.css('header')).getText().then(function (tytul) {
                        return(tytul);
                    })
                })
            })
        })
   });
    return x;
}
function content_of_tabs(){
    var x = browser.driver.findElement(by.css('.site-content.container')).then(function(step){
        return step.findElement(by.css('.content-area.col-md-8')).then(function (step2) {
            return step2.findElement(by.css('.site-main')).then(function (step3) {
                return step3.findElement(by.css('.post-9.page.type-page.status-publish.hentry')).then(function (step4) {
                    return step4.findElement(by.css('.entry-content')).then(function (step5) {
                        return step5.findElement(by.css('.col-md-6.tabcontents')).then(function (step6) {
                            return step6.findElement(by.css('.ui-tabs.ui-widget.ui-widget-content.ui-corner-all')).then(function (step7) {
                                return step7.findElement(by.css('.tabs.ui-tabs-nav.ui-helper-reset.ui-helper-clearfix.ui-widget-header.ui-corner-all')).then(function (step8) {
                                    return step8.findElement(by.css('.ui-state-default.ui-corner-top.ui-tabs-active.ui-state-active')).then(function (step9) {
                                        step9.getInner();
                                    })
                                })
                            })

                        })
                    })
                })
            })
        })
    });
}

module.exports = {
    title_of_page: title_of_page,
    content_of_tabs: content_of_tabs
};
