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
// U- task

// countChars.js

//  X-TASK: Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
//  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

function findIntersection(arr1: number[], arr2: number[]): number[] {
  const intersection: number[] = [];
  for (const num of arr1) {
    if (arr2.includes(num) && !intersection.includes(num)) {
      intersection.push(num);
    }
  }
  return intersection;
}
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [3, 2, 0];
console.log(findIntersection(arr1, arr2));
//otvet: [2, 3]
