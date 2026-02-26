function MergeSortedArray(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let mergeArray = m + n - 1; //nums1 jisme merge hogi uski length hai

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[mergeArray] = nums1[i];
      i--;
    } else {
      nums1[mergeArray] = nums2[j];
      j--;
    }
    mergeArray--;
  }
  while (j >= 0) {
    nums1[mergeArray] = nums2[j];
    j--;
  }
  return nums1;
}
nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;
console.log(MergeSortedArray(nums1, m, nums2, n));
