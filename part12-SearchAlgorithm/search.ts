// 1. Overview, phân loại; 1 + slide
// Two categories:
// a. Sequential Search: for list, array (linear search, ...)
// b. Interval search: for sorted data structures (binary search, jump search, interpolation search, ...)


// Linear search: O(n)
/*
function search(numbers: number[],
                needle: number) {
    for (const number of numbers) {
        if (number === needle) {
            return true;
        }
    }
    return false;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(search(arr, 6)); // true
console.log(search(arr, 7)); // false
*/


// 2. Binary search: 2 + slide
// loop
/*
function binarySearch(numbers: number[],
                      needle: number): boolean {
    let left = 0;
    let right = numbers.length - 1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (numbers[mid] == needle) {
            return true;
        } else if (numbers[mid] > needle) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}

let arr = [1, 2, 3, 4, 5, 6, 8, 10];
console.log(binarySearch(arr, 6)); // true
console.log(binarySearch(arr, 7)); // false
*/

// recursion
/*
function binarySearch(numbers: number[],
                      needle: number,
                      left: number,
                      right: number): boolean {

    if (right < left) {
        return false;
    }

    let mid = Math.floor((right + left) / 2);
    if (numbers[mid] == needle) {
        return true;
    } else if (numbers[mid] > needle) {
        return binarySearch(numbers, needle, left, mid - 1);
    } else {
        return binarySearch(numbers, needle, mid + 1, right);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 8, 10];
console.log(binarySearch(arr, 6, 0, arr.length - 1)); // true
console.log(binarySearch(arr, 7, 0, arr.length - 1)); // false
*/

// recursion
// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
/*
function binarySearch(arr, l, r, x) {
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);

        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x);

        // Else the element can only be present
        // in right subarray
        return binarySearch(arr, mid + 1, r, x);
    }

    // We reach here when element is not
    // present in array
    return -1;
}

let arr = [2, 3, 4, 10, 40];
let x = 10;
let n = arr.length
let result = binarySearch(arr, 0, n - 1, x);
(result == -1) ? console.log("Element is not present in array")
    : console.log("Element is present at index " + result);
*/

// 3. Khái niệm độ phức tạp của thuật toán (complexity, Big-O): slide + websites

// ▪ A logarithmic algorithm – O(logn)
// Runtime grows logarithmically in proportion to n.
// ▪ A linear algorithm – O(n)
// Runtime grows directly in proportion to n.
// ▪ A superlinear algorithm – O(nlogn)
// Runtime grows in proportion to n.
// ▪ A polynomial algorithm – O(nc)
// Runtime grows quicker than previous all based on n.
// ▪ A exponential algorithm – O(cn)
// Runtime grows even faster than polynomial algorithm based on n.
// ▪ A factorial algorithm – O(n!)
// Runtime grows the fastest and becomes quickly unusable for even small values of n.

// examples:
// ▪ Logarithmic algorithm – O(logn) – Binary Search.
// ▪ Linear algorithm – O(n) – Linear Search.
// ▪ Super linear algorithm – O(nlogn) – Heap Sort, Merge Sort.
// ▪ Polynomial algorithm – O(n^c) – Strassen’s Matrix Multiplication, Bubble Sort, Selection Sort, Insertion Sort, Bucket Sort.
// ▪ Exponential algorithm – O(c^n) – Tower of Hanoi.
// ▪ Factorial algorithm – O(n!) – Determinant Expansion by Minors, Brute force Search algorithm for Traveling Salesman Problem.



