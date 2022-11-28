function myFindLastIndex(callback) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback(this[i])) return i;
  }
  return -1;
}

Array.prototype.myFindLastIndex = myFindLastIndex;
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.myFindLastIndex.call(arrayLike, (x) => Number.isInteger(x))
); // 2
