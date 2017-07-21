// https://projecteuler.net/problem=50

// The prime 41, can be written as the sum of six consecutive primes:

// 41 = 2 + 3 + 5 + 7 + 11 + 13
// This is the longest sum of consecutive primes that adds to a prime below one-hundred.
// The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.
// Which prime, below one-million, can be written as the sum of the most consecutive primes?
// 997651

var sieve = require('sieve-of-eratosthenes');
const primes = sieve(1000000); // length of 78498, takes about 4min 15sec for this function to find this prime! Whoah!

let tally = {}; // to store all valid PRIMES and the NUMBER of consecutive primes that add up to them 
let endPoint;
let res;

for (let i = 0; i < primes.length; i++) {
    endPoint = i + 2;
    res = 0;

    while (res < 1000000) {
        res = primes.slice(i, endPoint).reduce((acc, num) => {
            return acc + num;
        }, 0)

        if (res < 1000000 && isPrime(res)) {
            if (!tally[res]) tally[res] = endPoint - i;
        }

        endPoint++;
        if (i === primes.length - 2) break;
    }
    if (i === primes.length - 2) break;
}

let values = [];

for (let key in tally) {
    values.push(tally[key]);
}

values = values.sort((a, b) => {
    return b - a;
});

for (let prop in tally) {
    if (tally[prop] === values[0]) return prop;
}


function isPrime (num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true; 
}


console.log(findFancyPrime())
// findFancyPrime();