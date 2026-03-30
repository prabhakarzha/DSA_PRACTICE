// Input: 1 -> 2 -> 3 -> 4 -> null
// Output: 4 -> 3 -> 2 -> 1 -> null

function ReverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextTemp = current.next; // Store next node
    current.next = prev; // Reverse the pointer
    prev = current; // Move prev forward
    current = nextTemp; // Move current forward
  }

  return prev; // New head
}

// Time: O(n), Space: O(1)
