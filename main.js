console.log("Your code goes in this document.");


//QUESTION 1//
var arrPrices =
items.map(function(el) {
  return el.price;
});

var sumOfAllPrices =
arrPrices.reduce(function(acc,curr) {
  return acc + curr;
});

var avgPrice = sumOfAllPrices / arrPrices.length;

document.querySelector('#answer1').innerHTML = avgPrice;

//QUESTION 2//

var arrItemsInPriceRange = items.filter(function(obj){
  return obj.price >= 14.00 && obj.price <= 18.00;
});

var arrItemTitles = arrItemsInPriceRange.map(function(obj){
  return "\n" + obj.title;
});


document.querySelector('#answer2').innerHTML = arrItemTitles;

//QUESTION 3//

var arrItemCurrencyCode = items.filter(function(obj){
  return obj.currency_code === "GBP";
});

var arrCurrencyInfo = arrItemCurrencyCode.map(function(obj){
  return obj.title + " @ $" + obj.price;
});

document.querySelector('#answer3').innerHTML = arrCurrencyInfo;

//QUESTION 4//

var arrWoodenNames = [];
var arrWoodenItems = items.filter(function(obj){
  if (obj.materials.indexOf("wood") > -1) {
    arrWoodenNames.push("\n" + obj.title);
  };
});

document.querySelector('#answer4').innerHTML = arrWoodenNames;

//QUESTION 5//

var arrLotsOfMaterials = [];
var arrMoreThan8 = items.filter(function(obj){
  if (obj.materials.length >= 8) {
    arrLotsOfMaterials.push("\n" + "title = " + obj.title + "\n" + "# of materials = " + obj.materials.length + "\n" + "Materials = " + obj.materials);
  };
});

document.querySelector('#answer5').innerHTML = arrLotsOfMaterials;

//QUESTION 6//

var arrSelfMade = 0;
var arrItemsMadeBySeller = items.filter(function(obj){
  if(obj.who_made === "i_did") {
    arrSelfMade++
  }
});

document.querySelector('#answer6').innerHTML = arrSelfMade;
