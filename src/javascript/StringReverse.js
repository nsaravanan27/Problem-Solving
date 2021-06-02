/* Given a string reverse each word in sentence */

const str = "Hello welcome to hello world";

function reverseBySeparator(argStr, separator) {
  return argStr.split(separator).reverse().join(separator);
}

const reverseByWords = reverseBySeparator(str, '');

console.log(reverseByWords);

console.log(reverseBySeparator(reverseByWords, " "));