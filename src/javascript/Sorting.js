/**
 * Sort the numbers Ascending and Descending order
 */


const num = [5, 3, 4, -1, 1, 2];

console.log(num.sort());

console.log(num.sort((a, b) => b - a ));


/**
 * Sort an object based on age, ascending and descending order
 */

const obj = [
  {name: 'a', age: 20},
  {name: 'b', age: 18},
  {name: 'c', age: 16},
  {name: 'd', age: 5}
];

console.log(obj.sort((obj1, obj2) => obj1.age - obj2.age));
console.log(obj.sort((obj1, obj2) => obj2.age - obj1.age));


/**
 * Sort a String
 */

const str = ['hello', 'world', 'hallow', 'hat', 'hbpen', 'hat'];

console.log(str.sort());
console.log(str.sort((str1, str2) => {
  if(str2 < str1) {
    return -1;
  } else if(str2 > str1) {
    return 1;
  } else {
    return 0;
  }
}));