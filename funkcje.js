/**
 * Created by MAGDALEN on 03.03.2016.
 */


function next_chart() {
    setTimeout(function (){
        browser.driver.findElement(by.css('.fancybox-nav fancybox-next')).click();
    }, 10000);
}


function number_of_charts(){
    var value;
    var xzy = browser.driver.findElements(by.css('.block3')).then(function(elems){
        value = elems.length;
        return value;
    });
    return xzy;
}

function data_from_chart(){
    console.log('rety');
    //(function (){
      //  console.log('rety');
//
  //     browser.driver.findElements(by.xpath('//*[@id="raphael-paper-10"]/g[2]/text')).then(function(elems){
    //        console.log(elems.length);
      //     console.log('rety');

       // for (var i=1; i<elems.length; i++){
        //    console.log('jestem tu3');
        //    (function(e) {
        //        browser.driver.findElement(by.xpath('//*[@id="raphael-paper-10"]/g[2]/text['+e+']/tspan')).getText().then(function(text){
        //           console.log(text);
        //        }, 10000);
         //   })(i);
        //}

      // }, 10000);
   // })();

}


//*[@id="raphael-paper-10"]/g[2]/path[1]

module.exports = {
    next_chart: next_chart,
    number_of_charts: number_of_charts,
    data_from_chart: data_from_chart
};
