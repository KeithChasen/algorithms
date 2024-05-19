const endlessSum = (value) => {
    console.log(value, 'value')

    return (int) => endlessSum(value + int);
}

console.log(endlessSum(4)(5)(6)(7), 'endlessSum');


const tree = {
    value: 4,
    left: {
        value: 5,
        left: {
            value: 10,
            left: {
                value: 14,
                left: {
                    value: 16
                },
                right: {
                    value: 18
                }
            }
        },
        right: {
            value: 3
        }
    },
    right: {
        value: 7,
        left: {
            value: 25
        },
        right: {
            value: 13
        }
    }
}

const sumTreeRecursive = (tree) => {
    let result = 0;

    if (tree.value) {
        result += tree.value;
    } 
    if (tree.left) {
        result += sumTreeRecursive(tree.left);
    }
    if (tree.right) {
        result += sumTreeRecursive(tree.right);
    }

    return result;
}

const anotherTree = {
    v: 5,
    c: [
        { v: 1, c: [
            {
                v: 6,
                c: []
            }
        ]},
        { v: 4, c: [
            { v: 9, c: [
                { v: 3, c: []},
                { v: 5, c: [
                    { v: 1, c: []}
                ]},
            ]},
            { v: 7, c: [
                { v: 3, c: []},
                { v: 5, c: [
                    { v: 1, c: [
                        { v: 3, c: []},
                        { v: 5, c: [
                            { v: 1, c: []}
                        ]},
                    ]}
                ]},
            ]},
            { v: 3, c: [
                { v: 1, c: []}
            ]}
        ]},
    ]
}

const sumTreeRec = (tree) => {
    let sum = 0;
    if (tree.v) {
        sum += tree.v
    }
    if (tree.c.length) {
        tree.c.forEach(child => {
            sum += sumTreeRec(child);
        })
    }
    return sum
}

const sumTreeLoop = (tree) => {
    const stack = [...tree.c];

    let sum = 0;

    if (tree.v) {
        sum += tree.v
    }

    while(stack.length) {
        const [item] = stack.splice(0, 1);

        if (item.v) {
            sum += item.v;
        }
        if (item.c.length) {
            stack.push(...item.c);
        }
    }

    return sum;
}

// const result = sumTreeRecursive(tree);
// console.log(result, 'result')

console.log(sumTreeRec(anotherTree))
console.log(sumTreeLoop(anotherTree));



function someFn() {
    // console.log(arguments, 'arguments')
}

Function.prototype.delay = function (ms) {
    return (...args) => {
        setTimeout(() => {
            this(...args);
        }, ms);
    }
}

const someFnWithDelay = someFn.delay(2000)

someFn('arg1', 2, [])

someFnWithDelay('arg1', 2, []);



const isPalindrom = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// console.log(isPalindrom('abba'));

const maxChar = (str) => {
    const map = {};

    str.split('').forEach(char => {
        char in map ? 
            map[char]++ : 
            map[char] = 1;
    });

    const keys = Object.keys(map);

    let result = '';
    let max = 0;

    keys.forEach(key => {
        if (map[key] > max) {
            max = map[key];
            result = key;
        }
    })

    return { result, max };
}

// console.log(maxChar('32eddseew3'))
// console.log(maxChar('#%he3#33ll#l#o'))

const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        let fizz = false;
        let buzz = false;
        if (i % 3 === 0) {
            fizz = true;
        }
        if (i % 5 === 0) {
            buzz = true
        }
        if (fizz && buzz) {
            // console.log(`${i}: fizzbuzz`)
        } else if (fizz) {
            // console.log(`${i}: fizz`)
        }
        else if (buzz) {
            // console.log(`${i}: buzz`)
        } else {
            // console.log(i)
        }
    }
}

fizzBuzz(15)


const chunkedArray = (arr, n) => {
    let initArr = [...arr];
    const resultArr = [];
    while (initArr.length) {
        resultArr.push(initArr.splice(0, n));
    }

    return resultArr;
}

// console.log(chunkedArray([1,3,4,6,2,3,8,6,5], 2))
// console.log(chunkedArray([1,3,4,6,2,3,8,6,5], 3))
// console.log(chunkedArray([1,3,4,6,2,3,8,6,5], 5))
// console.log(chunkedArray([1,3,4,6,2,3,8,6,5], 7))