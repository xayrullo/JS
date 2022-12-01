function myAt(param) {
  if (Math.abs(param) > this.length) return undefined;
  if (param >= 0) return this[param];
  return this[this.length + param];
}

Array.prototype.myAt = myAt;

const arr = [1, 2, 3, 4, 5];

console.log(arr.myAt(5));

module.exports = { myAt };
