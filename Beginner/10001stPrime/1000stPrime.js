// https://projecteuler.net/problem=7

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 2206ms result time

const start = Date.now();

// keep track of how many primes found
let primeCount = 0;

//start the count on 2 as it's the first prime
let int = 2;

while (true) {
  // if INT is a prime, add 1 to the primeCount
  if (isPrime(int)) primeCount++;

  // if we reach our desired primeCount, CONSOLE.LOG the INT and BREAK out of the function
  if (primeCount === 10001) {
    console.log(`Result: ${int} / Time to Compute: ${Date.now() - start}ms`);
    break;
  }
  // increment the integer to check for the next iteration
  int++;
}

// this function checks if a number is prime and returns a boolean value
function isPrime (num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true; 
}
