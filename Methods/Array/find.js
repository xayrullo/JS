function myFind(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) return this[i];
  }
}

Array.prototype.myFind = myFind;
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.myFind((res) => res === 4));
