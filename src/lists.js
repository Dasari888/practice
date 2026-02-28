function ReverseArray1(arr) {
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[arr.length - 1 - i]);
  }
  return arr1;
}

console.log(ReverseArray1([1, 2, 3, 4, 5]));