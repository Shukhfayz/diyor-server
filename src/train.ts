// console.log("Hello World!");

/* Project Standart:
-- Logging standarts
-- Naming standarts
    function, method, variable => CAMEL     goHome
    class => PASCAL                         MemberService
    folder, file=> KEBAB
    css => SNAKE                            button_style


*/

/** Request:
 Traditional Api
 Rest Api
 GraphQL Api
 ......
 */

/*Frontend Deevelopment
  Traditional FD => BSSR (Admin) => EJS
  Modern FD      => SPA => REACT

  */

/**Cookies:
 request join 
 self destroy
 */

/** Validation 
  Frontend validation
  Backend validation 
  Database validation
  
  */
// calculateSumOfNumbers.js
// U- task

// countChars.js

// W-TASK:

// function chunkArray(array:number[], num: number) {
//   const commonArr=[]
//   const threeArr[]
//   for (let i = 0; i < array.length; i++ {
//     conct element = array[i];
//     threeArr.push(element)
//     if (threeArr.length === num) {
//       commonArr.push(threeArr)
//     }
//   })

function chunkArray(arr: string | any[], num: number) {
  const chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + num));
    index += num;
  }
  return chunked;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = 3;
console.log(chunkArray(arr, num));
