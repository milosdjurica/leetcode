// 2807. Insert Greatest Common Divisors in Linked List
// Medium
// 192
// 6
// Companies
// Given the head of a linked list head, in which each node contains an integer value.

// Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

// Return the linked list after insertion.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Example 1:

// Input: head = [18,6,10,3]
// Output: [18,6,6,2,10,1,3]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
// - We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
// - We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
// - We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
// There are no more adjacent nodes, so we return the linked list.
// Example 2:

// Input: head = [7]
// Output: [7]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes.
// There are no pairs of adjacent nodes, so we return the initial linked list.

// Constraints:

// The number of nodes in the list is in the range [1, 5000].
// 1 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function findGCD(a: number, b: number): number {
  // Ensure both numbers are positive
  a = Math.abs(a);
  b = Math.abs(b);

  // Euclidean algorithm
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let node = head;
  let prev = node;

  while (node.next !== null) {
    const next = node.next;
    const gcd = new ListNode(findGCD(prev.val, next.val));

    gcd.next = prev.next;
    prev.next = gcd;

    prev = next;
    node = prev;
  }
  console.log(head);
  return head;
}
