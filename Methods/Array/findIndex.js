function myFindIndex(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) return i;
  }
}
Array.prototype.myFindIndex = myFindIndex;
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.myFindIndex((res) => res === 5));
