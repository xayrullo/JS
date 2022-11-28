function myFindLast(callback) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback(this[i])) return this[i];
  }
  return undefined;
}

Array.prototype.myFindLast = myFindLast;
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.myFindLast.call(arrayLike, (x) => Number.isInteger(x))
); // 4
