console.log('MATH works')

// Fibonacci sequence
// Find first 'n' elements of F.S.
function fibonacci(n) {
    const fib = [0,1];
    for (let i = 2; i<n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

// Bid-O = O(n)

// console.log(fibonacci(2)); // [0,1]

// Factorial
function factorial(n) {
    let result = 1;
    for (let i = 2; i<=n; i++) {
        result = result * i;
    }
    return result;
}

// Bid-O = O(n)

// Prime Number
// given natural number > 1 and can be divided only by itself
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
// Big-O O(n)

//BETTER ALGO FOR with square root
// because if it's dividable by 2 we shouldn't care if it's
// dividable by 4 
// Prime Number
function isPrimeB(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
// Big-O O(sqrt(n))

// Power of 2
// give n determine if it's a power of 2
function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n/2;
    }
    return true;
}

// console.log(isPowerOfTwo(1)); // true since it's 2 pow 0
// console.log(isPowerOfTwo(2)); // true since it's 2 pow 1
// console.log(isPowerOfTwo(5)); // false

// Big-O = O(log n) because on each iteration of a loop value of n is twice smaller than previous

// Power of 2 BIT WISE
// give n determine if it's a power of 2
function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0;
}
// Big-O = O(1) because it's a one liner

// 0 0 0 0 - 0
// 0 0 0 1 - 1
// 0 0 1 0 - 2
// 0 0 1 1 - 3
// 0 1 0 0 - 4
// 0 1 0 1 - 5

// bitwise & -> true if both items true

// isPowerOfTwo(4) ->
// 0 0 1 1 - 3
// 0 1 0 0 - 4

// 0 0 0 0 

// isPowerOfTwo(5) ->
// 0 1 0 0 - 4
// 0 1 0 1 - 5

// 0 1 0 0 


// console.log(isPowerOfTwoBitWise(1)); // true 
// console.log(isPowerOfTwoBitWise(2)); // true
// console.log(isPowerOfTwoBitWise(5)); // false