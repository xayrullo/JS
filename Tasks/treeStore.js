class TreeStore {
  constructor(items) {
    this.items = items;
  }

  getAll() {
    return this.items;
  }

  getItem(id) {
    const item = this.items.find((item) => item.id === id);
    return item ? item : "Not Found";
  }

  getChildren(id) {
    return this.items.filter((item) => item.parent === id);
  }

  getAllChildren(id) {
    return this.items.filter((item) => item.parent >= id);
  }

  getAllParents(id) {
    let _parents = [];
    let _item = this.items.find((item) => item.id === id);
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].parent !== _item.parent) {
        const ind = _parents.find(
          (parent) => parent.parent === this.items[i].parent
        );
        if (!ind) {
          _parents.push(this.items[i]);
        }
      }
    }
    return _parents.reverse();
  }
}

const items = [
  { id: 1, parent: "root" },
  { id: 2, parent: 1, type: "test" },
  { id: 3, parent: 1, type: "test" },

  { id: 4, parent: 2, type: "test" },
  { id: 5, parent: 2, type: "test" },
  { id: 6, parent: 2, type: "test" },

  { id: 7, parent: 4, type: null },
  { id: 8, parent: 4, type: null },
];

const ts = new TreeStore(items);

console.log(ts.getAll());
console.log(ts.getItem());
console.log(ts.getChildren(5));
console.log(ts.getAllChildren(2));
console.log(ts.getAllParents(7));

module.exports = TreeStore;
