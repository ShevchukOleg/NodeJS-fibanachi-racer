// use NodeJS 16 or higher

function timestamp() {
  const moment = performance.now().toFixed(3);
  return moment;
}

function calcFibIndexValueRecursive(fibIndex) {
  if (fibIndex === 1 || fibIndex === 0) {
    return 1;
  } else {
    iterationIndex++;
    return calcFibIndexValueRecursive(fibIndex - 1) + calcFibIndexValueRecursive(fibIndex - 2);
  }
}
let iterationIndex = 0;
const start = timestamp();
console.log(calcFibIndexValueRecursive(47));
console.log("Time spent:", timestamp() - start, "iterations count:", iterationIndex);

function calcFibIndexValueSum(fibIndex) {
  const start = timestamp();
  if (fibIndex <= 1) {
    return 1;
  } else {
    let prev = 1;
    let current = 2;
    for (let i = 2; i < fibIndex; i++) {
      const nevPrev = current;
      current += prev;
      prev = nevPrev;
    }
    const end = timestamp();
    console.log("calcFibIndexValueSum time spend:", end - start);
    return current;
  }
}

console.log(calcFibIndexValueSum(47));

//!! i7 -12700H Windows 11 (4807526976)
// Time spent: 31334.149 iterations count: 4807526975
// calcFibIndexValueSum time spend: 0.005000000001018634
