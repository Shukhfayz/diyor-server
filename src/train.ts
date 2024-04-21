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

// Task: ZB
// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45

function randomBetween(minNum: number, maxNum: number) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}
console.log(randomBetween(30, 50));
