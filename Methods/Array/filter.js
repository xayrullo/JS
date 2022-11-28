function myFilter(callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) arr.push(this[i]);
  }
  return arr;
}

Array.prototype.myFilter = myFilter;

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.myFilter((res) => res >= 5));
