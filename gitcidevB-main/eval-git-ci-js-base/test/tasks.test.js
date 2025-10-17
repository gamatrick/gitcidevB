const { getTasks, reset, toggleTask, addTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});


test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('toggleTask changes task status', () => {
  toggleTask(0);
  addTask('git');
  const tasksBefore = getTasks();
  expect(tasksBefore[0].done).toBe(false);
  toggleTask(tasksBefore[0].id);
  const tasksAfter = getTasks();
  expect(tasksAfter[0].done).toBe(true);
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
