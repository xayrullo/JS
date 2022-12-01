function myFrom(param, callback) {
  arr = [];
  if (typeof param === "object") {
    arr = param.entries();
  }
  for (let i = 0; i < param.length; i++) {
    if (callback) arr.push(callback(param[i]));
    else arr.push(param[i]);
  }
  return arr;
}
Array.myFrom = myFrom;
const set = new Set(["foo", "bar", "baz", "foo"]);
console.log(Array.myFrom(set));
console.log(Array.from(set));
// console.log(Array.myFrom([1, 2, 3], (x) => x + x));
