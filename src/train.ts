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

// Task: ZE
function removeDuplicate(inputString: string): string {
  let result: string = "";
  for (let i = 0; i < inputString.length; i++) {
    if (inputString.indexOf(inputString[i]) === i) {
      result += inputString[i];
    }
  }
  return result;
}
console.log(removeDuplicate("stringg"));
