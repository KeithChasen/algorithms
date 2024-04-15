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