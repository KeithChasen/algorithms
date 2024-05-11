// binary search
const binarySearch = (arr, item) => {
    console.log(arr, 'arr');
    console.log(item, 'item');

    let min = 0;
    let max = arr.length - 1;
    

    while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        const guess = arr[mid];

        console.log({
            mid, guess
        })

        if (guess === item) {
            return mid;
        }
        else if (guess > item) { 
            max = mid - 1;
        }
        else if (guess < item) {
            min = mid + 1;
        }
    }

    return -1;
}

const binArr = [3, 5, 6, 7, 11, 25, 44, 47, 48, 50];

console.log(binarySearch(binArr, 6))