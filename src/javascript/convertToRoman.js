/**
  Problem Statement:
  Convert decimals to roman numarals
    
  Hint:
  Creating two arrays, one with the Roman Numerals and one with the decimal equivalent for the new forms will be very helpful.
  
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  CodePen:
  https://codepen.io/nsaravanan27/pen/yLMbrOv
**/

const decimal = [10, 9, 5, 4, 1];
const roman = ['X', 'XI', 'V', 'VI', 'I'];


function convertToRoman(num) {
  let romanized = '';
  for(let i = 0; i < decimal.length; i++) {
    while(decimal[i] <= num) {
      romanized = romanized + roman[i];
      num = num - decimal[i];
    }
  }
  return romanized;
}

console.log(convertToRoman(7));