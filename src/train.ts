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

function findLongestWord(sentence: string) {
  const words = sentence.split(" ");

  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
console.log(findLongestWord("I come from Uzbekistan"));
