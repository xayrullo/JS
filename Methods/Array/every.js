function myEvery(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) return false;
  }
  return true;
}
Array.prototype.myEvery = myEvery;
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
console.log(
  Array.prototype.myEvery.call(arrayLike, (x) => {
    return typeof x === "string";
  })
); // true
