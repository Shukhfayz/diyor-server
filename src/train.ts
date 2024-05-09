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

// Task: ZI
function reduceNestedArray(arr: (number | any)[]): number {
  let total: number = 0;

  for (const element of arr) {
      if (Array.isArray(element)) {
          total += reduceNestedArray(element);
      } else if (typeof element === 'number') {
          total += element;
      }
  }

  return total;
}

console.log(reduceNestedArray([1, [1, 2, [4]]])); 


