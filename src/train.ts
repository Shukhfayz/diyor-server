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

// Task: ZA
interface Person {
  age: number;
}

function sortByAge(objects: Person[]): Person[] {
  objects.sort((a, b) => a.age - b.age);
  return objects;
}

console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));
