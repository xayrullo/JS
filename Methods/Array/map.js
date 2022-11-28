function myMap(callback) {
  let mapArr = [];
  for (let index = 0; index < this.length; index++) {
    mapArr.push(callback(this[index]));
  }
  return mapArr;
}

Array.prototype.myMap = myMap;
const arr = [1, 3, 4, 2, 2, 32];
console.log(arr.myMap((res) => res * 3));
