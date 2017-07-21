// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 4221ms result time

const start = Date.now();

// import in an array of prime numbers
const sieve = require('sieve-of-eratosthenes');

// generate all primes up to 1 million
const primes = sieve(1000000);

const res = [];

// loop through primes
primes.forEach(prime => {
    // IF PRIME is a single-digit int, add it to result array, we're only really concerned with primes with lengths of 2 and above
    if (String(prime).length == 1) {
        res.push(prime);
        return; // return early to save unnecessary prime-check below
    }
    // if this is a circular prime... concat it onto res array 
    if (rotate(prime)) res.push(prime);
})

// return number of circular primes found below 1 million
console.log(`Result: ${res.length} / Time to Compute: ${Date.now() - start}ms`);

// this func dynamically rotates and checks each rotation for instance of prime
function rotate (prime) { 
    // split prime into an array
    prime = prime.toString().split('');
    
    // rotate prime as many times as it's length dictates
    for (let i = 0; i < prime.length - 1; i++) {
        // rotate one place to the right
        prime.unshift( prime.pop() );

        // if current rotation is NOT a prime, then return early out of the function with FALSE
        if (primes.indexOf( Number(prime.join('')) ) === -1) return false;
    }
    // if the JS interpreter gets here, all rotations for this prime have passed the prime-check and so we have ourselves a sexy little CIRCULAR PRIME! wooo
    return true;
}
