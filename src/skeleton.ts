export function estSubsets(arr: (number|string)[]): number {
  let cleanedArr = removeDuplicates(arr)
  let n = cleanedArr.length
  for (let i = cleanedArr.length - 1; i > 0; i--) {
    n += sumOfNaturalNumbers(i)
  }
  return n // n = amount of subsets that don not have repeated elements
}

const sumOfNaturalNumbers = (num: number) => num * (num + 1) / 2

export function removeDuplicates(arr: (number|string)[]): (number|string)[]{   
  /*
  [1,2,3,1,2,1,1] => [1,2,3]  
  */ 
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length-1; j > i; j--) {
      if (arr[j] === arr[i]) {
        arr.splice(j + i + 1, 1)
        // j--
      }
    }
  }
  return arr
}   


/*[2, 3, 4, 5, 5, 6, 6, 7, 8, 8]
[2, 3, 4 , 5, 6, 7, 8]

noOfsingleElems = length
noOfpairElems = sum of numbers from 1 to length-1

{2, 3, 4} {2,3 5} {2, 3, 6}, {2,3, 7} {2,3, 8} =>5
{2,4,5} ... => 4
3
2
{2, 7, 8} => 1 => sum 1 to 5
{3,4, 5} {3,4, 6}, {3, 4, 7} {3, 4, 8} => 4 => sum 1 to 4
.
.
. => 1

noOfTripleElems = 
{
{2}, {3}, {4}, {5}, {6}, {7}. {8}
{2, 3} {2,4} {2,5} ...
{3, 4}, {3,5} ...
{4,5} ... 
{5,6} ...
{6, 7} ...
{7,8}

{2, 3, 4}, {2, 3, 5}, {2, 3, 6}/ / /
{}
}
psuedocode

ASSUME Duplicates are pretty much ignored from ex case
function estSubsets(array of elements which are string or number)
returns number of subsets

cleanedArr = removeDuplicates(arr)

*/
