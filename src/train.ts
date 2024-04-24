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

// Task: ZC
// function celsiusToFahrenheit(celsius: number): number {
//   const fahrenheit: number = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }

// console.log(celsiusToFahrenheit(0));

// Task: ZD
function changeNumberInArray(
  index: number,
  arr: number[],
  number: number
): number[] {
  arr[index] = number;
  return arr;
}
console.log(changeNumberInArray(1, [1, 3, 7, 2], 2)); // otvet [1, 2, 7, 2]
