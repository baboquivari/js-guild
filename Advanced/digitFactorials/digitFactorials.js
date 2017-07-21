// https://projecteuler.net/problem=34

// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Find the sum of all numbers which are equal to the sum of the factorial of their digits.
// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

///////////////////////////////////////////////////////////////////////////////////////

// 2060ms result time

const start = Date.now();

const maxNumber = 2540161; // this is the upper boundary of 9! * 7
const base9Factorials = [1, 1, 2]; // I prepopulated some
let res = 0;

// create a tally of the base 9 factorials to save re-computation
for (var i = 3; i < 10; i++) {
    base9Factorials.push(createFactorial(i));
}

// now we've got the factorials from 0-9, let's start on 10
i = 10;

while (i < maxNumber) {
    // convert each single-digit within 'i' to it's factorial, then sum up 
    var summedFactorials = i.toString().split('').reduce((acc, num) => {
        num = base9Factorials[num];
        return acc += num;
    }, 0);

    // if the sum is equal to the original number (i), then add to the final result variable
    if (summedFactorials === i) res += i;
    i++;
}

console.log(`Result: ${res} / Time to Compute: ${Date.now() - start}ms`);

function createFactorial (num) {
    if (num == 1) return num;
    return num * createFactorial(num - 1);
}
    

