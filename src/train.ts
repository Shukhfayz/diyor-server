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

// Z-TASK:

function sumEvens(numbers: number[]): number {
  let sum: number = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sum += number;
    }
  }
  return sum;
}

console.log(sumEvens([1, 2, 3]));
// otvet: 2
