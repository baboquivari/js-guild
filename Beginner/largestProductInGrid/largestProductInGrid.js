// https://projecteuler.net/problem=11 -- YOU NEED THIS

// In the 20×20 grid, four numbers along a diagonal line have been marked in red.

// The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
// What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 19ms result time

const start = Date.now();

// import grid from different module to save space in this one
const grid = require('./grid');

// keep track of current largest product
let largestProduct = 0;

// dynamically search entire grid for every possibility
searchHorizontal();
searchVertical();
searchDiagRight();
searchDiagLeft();

console.log(`Result: ${largestProduct} / Time to Compute: ${Date.now() - start}ms`);


function searchHorizontal() {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length - 3; j++) {
            const product = grid[i][j] * grid[i][j+1] * grid[i][j+2] * grid[i][j+3];

            if (product > largestProduct) largestProduct = product;
        }
    }
}
function searchVertical () {
    for (let i = 0; i < grid.length - 3; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const product = grid[i][j] * grid[i+1][j] * grid[i+2][j] * grid[i+3][j];

            if (product > largestProduct) largestProduct = product;                
        }
    }
}
function searchDiagRight () {
    for (let i = 0; i < grid.length - 3; i++) {
        for (let j = 0; j < grid[i].length - 3; j++) {
            const product = grid[i][j] * grid[i+1][j+1] * grid[i+2][j+2] * grid[i+3][j+3];

            if (product > largestProduct) largestProduct = product;                                
        }
    }
}
function searchDiagLeft () {
    for (let i = 0; i < grid.length - 3; i++) {
        for (let j = grid[i].length - 1; j > 2; j--) {
            const product = grid[i][j] * grid[i+1][j-1] * grid[i+2][j-2] * grid[i+3][j-3];
            
            if (product > largestProduct) largestProduct = product;                                
        }
    }
}



