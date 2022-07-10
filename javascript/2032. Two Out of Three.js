// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.


// Example 1:

// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.
// Example 2:

// Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
// Output: [2,3,1]
// Explanation: The values that are present in at least two arrays are:
// - 2, in nums2 and nums3.
// - 3, in nums1 and nums2.
// - 1, in nums1 and nums3.
// Example 3:

// Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
// Output: []
// Explanation: No value is present in at least two arrays.


// Constraints:

// 1 <= nums1.length, nums2.length, nums3.length <= 100
// 1 <= nums1[i], nums2[j], nums3[k] <= 100






/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    let s = new Set(nums1.concat(nums2.concat(nums3)))
    s = Array.from(s)
    let sol = []
    for (let i = 0; i < s.length; i++) {
        let count = 0
        if (nums1.includes(s[i])) count++
        if (nums2.includes(s[i])) count++
        if (nums3.includes(s[i])) count++
        if (count > 1) {
            sol.push(s[i])
        }
    }
    return sol
};