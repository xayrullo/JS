function myShift() {
  console.log("length: ", this.length);
  for (var i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  --this.length;
}

Array.prototype.myShift = myShift;
let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.myShift());
// console.log(arr);
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.shift.call(arrayLike));
console.log(arrayLike);
// console.log(Array.prototype.myShift.call(arrayLike));
// console.log(arrayLike);
