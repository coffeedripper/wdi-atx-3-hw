 function CurrencyConverter(F, T, x) {

var Q1=== prompt("Do you currently have USD or GBP?");
F = Q1.toUpperCase();
var x = prompt("How much would you like to exchange?");


if (F === 'USD') {
     T = 'GBP';
    fx = Number(x * .68).toFixed(2);
prompt(x + " USD equals " + fx + " GBP.");

  }

  else {
    F = 'GBP' ;
     T = 'USD';
    fx = Number(x * .68).toFixed(2);
prompt(x + " GBP equals " + fx + " USD.");

  }

}


CurrencyConverter();








// function UsdToGbp(x) {
// y = (x * .68)
// console.log(x + " USD equals " + y + " GBP. ");

// }


// function GbpToUsd(a) {
// b = (a * 1.47)
// console.log(a + " GBP equals " + b + " USD. ");

// }

