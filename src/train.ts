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
function delayHelloWorld(text: string): Promise<string> {
  return new Promise<string>((resolve) => {
      setTimeout(() => {
          resolve(text);
      }, 3000); 
  });
}

delayHelloWorld("Hello World").then((result) => {
  console.log(result); 
});

