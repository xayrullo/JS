function myFlat(param) {
  console.log("Param: ", param);
  let oldArr = [...this];
  let arr = [];
  let i = 0;
  if (param === Infinity) {
    while (Array.isArray(oldArr) && i < oldArr.length) {
      if (Array.isArray(oldArr[i])) {
        oldArr = [...oldArr[i]];
        i = 0;
        //   } else if (i === oldArr.length - 1) {
        //     arr.push(oldArr[i]);
      } else {
        arr.push(oldArr[i]);
        i++;
      }
    }
  }
  return arr;
}

Array.prototype.myFlat = myFlat;
const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

console.log([1, [3, 4, 5, 6], 7, 8, 9].myFlat(Infinity));
