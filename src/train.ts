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

function calculate(expression: string) {
  // ifodani "+" belgisiga qarab bo'lib bo'lish
  const parts = expression.split("+");

  // Har bir elementni sona aylantiramiz va yig'indisini hisoblaymiz
  const total = parts.reduce((acc, curr) => acc + parseInt(curr), 0);

  return total;
}

// Misol uchun:
console.log(calculate("1+3")); // 4
