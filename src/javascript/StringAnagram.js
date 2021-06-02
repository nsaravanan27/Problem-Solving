/**
 * Given two strings, retrun true if they are anagrams of one another "Mary is anagram of army"
 */


const firstWord = "Mary";
const secondWord = "Army";


function isAnagram(fWord, sWord) {
  const a = fWord.toLowerCase().split('').sort().join('');
  const b = sWord.toLowerCase().split('').sort().join('');
  return a === b;
}

console.log(isAnagram(firstWord, secondWord));