/**
 * Count duplicates
 */
const arr = [1,1,1,3,4,4,5,7,7,7,7,'a','b','b'];


function countDuplicates(argArr) {
  const counter= {};

  for(let i=0; i<argArr.length; i++) {
    if(counter[argArr[i]]) {
      counter[argArr[i]] += 1;
    } else {
      counter[argArr[i]] = 1;
    }
  }

  return counter;
}

console.log(countDuplicates(arr));

