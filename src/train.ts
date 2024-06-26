
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


