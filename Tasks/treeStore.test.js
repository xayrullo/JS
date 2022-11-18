const TreeStore = require("./treeStore");
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
describe("TreeStore", () => {
  const ts = new TreeStore();
  test("defines getAll()", () => {
    const result = ts.getAll(items);
    expect(typeof ts.getAll).toBe("function");
    expect(ts.getAll()).toBeUndefined();
    expect(result).toBeArray();
  });
});
