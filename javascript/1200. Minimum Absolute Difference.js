// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr


// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]


// Constraints:

// 2 <= arr.length <= 105
// -106 <= arr[i] <= 106





/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr = arr.sort((a, b) => a - b)
    let sol = []
    let min = arr[1] - arr[0]

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] < min) {
            min = arr[i + 1] - arr[i]
            sol = []
        }
        if (arr[i + 1] - arr[i] == min) sol.push([arr[i], arr[i + 1]])
    }

    if (min == arr[1] - arr[0]) sol.unshift([arr[0], arr[1]])

    return sol
};

