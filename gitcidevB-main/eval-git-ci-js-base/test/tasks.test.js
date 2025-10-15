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

