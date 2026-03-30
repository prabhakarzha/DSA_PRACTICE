// Input: head = [1,2,3,4,5]
// Explanation: 3

function MiddleLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
