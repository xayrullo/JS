function myForEach(callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index]);
  }
}

Array.prototype.myForEach = myForEach;

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.myForEach((res) => console.log(res));
