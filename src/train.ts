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

function getDigits(str: string | any[]) {
  if (!str || typeof str !== "string") {
    return "";
  }

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      result += str[i];
    }
  }
  return result;
}

console.log(getDigits("m14i1t"));
