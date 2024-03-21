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

function calculateSumOfNumbers(sonlar: any[]): number {
  const natija = sonlar.reduce((ele: number, current: any) => {
    if (typeof current === "number" && !isNaN(current)) {
      return ele + current;
    } else {
      return ele;
    }
  }, 0);
  return natija;
}

console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
