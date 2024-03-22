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

// P-TASK:

// function objectToArray(obj: { [s: string]: unknown } | ArrayLike<unknown>) {
//   return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 })); // javobi: [['a', 10], ['b', 20]]

// Q-TASK:

function hasProperty(
  obj: { name?: string; model?: string; hasOwnProperty?: any },
  key: string
) {
  return obj.hasOwnProperty(key);
}

// Test
console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // false
