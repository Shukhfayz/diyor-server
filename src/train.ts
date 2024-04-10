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
function countOccurrences(obj: any, key: string): number {
  let count = 0;

  if (typeof obj === "object" && obj !== null) {
    for (const k in obj) {
      if (k === key) {
        count += 1;
      }
      count += countOccurrences(obj[k], key);
    }
  }

  return count;
}

const car = { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } };
console.log(countOccurrences(car, "model"));

// javob 2
