function myUnshift(...params) {
  console.log("params: ", params, this, typeof this);
  let oldArr = [...params, ...this];
  for (let i = 0; i < oldArr.length; i++) {
    this[i] = oldArr[i];
  }
  return [...params, ...this].length;
}

Array.prototype.myUnshift = myUnshift;
// const arr = [1, 3, 4, 5, 3, 2];
// console.log(arr.myUnshift(9, 9, 9, 9));
// console.log(arr);

const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
Array.prototype.myUnshift.call(arrayLike, 1, 2);
console.log(arrayLike);
