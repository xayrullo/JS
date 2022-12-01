const { myAt } = require("../methods/array/at");
Array.prototype.myAt = myAt;
const cart = ["apple", "banana", "pear"];
test("Array Custom At Property: ", () => {
  expect([1, 2, 3, 4, 5].myAt(5)).toBe(undefined);
});
test("Return last element: ", () => {
  expect(cart.myAt(-1)).toBe(cart[cart.length - 1]);
});
const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
};
test("Calling at() on non-array objects: ", () => {
  expect(Array.prototype.myAt.call(arrayLike, -1)).toBe("b");
});
