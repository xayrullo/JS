function myFill(value, start, end) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (start && end && i >= start && i <= end) {
      arr.push(value);
    } else if (start && !end && i >= start && i < this.length) {
      arr.push(value);
    } else if (value && !start) arr.push(value);
    else arr.push(this[i]);
  }
  return arr;
}

Array.prototype.myFill = myFill;
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.myFill(4, 3, 5));
