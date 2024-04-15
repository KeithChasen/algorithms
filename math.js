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