// console.log("Hello World!");

/* Project Standart:
-- Logging standarts
-- Naming standarts
    function, method, variable => CAMEL     goHome
    class => PASCAL                         MemberService
    folder, file=> KEBAB
    css => SNAKE                            button_style


*/

/**
 Traditional Api
 Rest Api
 GraphQL Api
 ......
 */

/*
  Traditional FD => BSSR (Admin) => EJS
  Modern FD      => SPA => REACT

  */

/**
 request join 
 self destroy
 */

function countVowels({ string }: { string: any }): number {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of string) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels({ string: "string" }));
