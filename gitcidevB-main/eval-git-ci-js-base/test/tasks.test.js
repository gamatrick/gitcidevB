const { getTasks, reset, addTask} = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test("add task pass", () => {
  expect(addTask("Dexter")).toEqual({ name: "Dexter", id: 1, done: false });
});

test("add task to list", () => {
  addTask("Dexter");
  addTask("Mazuka");
  expect(getTasks()).toEqual([
    { name: "Dexter", id: 1, done: false },
    { name: "Mazuka", id: 2, done: false },
  ]);
});
