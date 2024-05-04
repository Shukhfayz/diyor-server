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

// Task: ZH
function findDisappearedNumbers(nums: number[]): number[] {
  const n: number = nums.length;
  const disappeared: number[] = [];

  for (const num of nums) {
    if (nums[Math.abs(num) - 1] > 0) {
      nums[Math.abs(num) - 1] *= -1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      disappeared.push(i + 1);
    }
  }

  return disappeared;
}

console.log(findDisappearedNumbers([1, 3, 4, 7]));
