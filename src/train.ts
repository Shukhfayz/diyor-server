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

// Task: ZF
function capitalizeWords(str: string): string {
  if (!str) {
    return "";
  }
  const words: string[] = str.split(" ");

  let newStr: string = "";

  for (let i = 0; i < words.length; i++) {
    const word: string = words[i];

    if (word.length <= 2) {
      newStr += word;
    } else {
      newStr += word[0].toUpperCase() + word.slice(1);
    }
    if (i !== words.length - 1) {
      newStr += " ";
    }
  }

  return newStr;
}
console.log(capitalizeWords("name should be a string"));
