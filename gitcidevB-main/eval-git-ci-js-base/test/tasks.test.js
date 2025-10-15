const { getTasks, reset, addTask} = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('add task to list', () => {
  addTask("Mazuka");
  expect(getTasks()).toEqual([
    { name: "Mazuka", id: 1, done: false }
  ]);
});
