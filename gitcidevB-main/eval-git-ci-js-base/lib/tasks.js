
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

function addTask(name) {
  let trimmedName = name.trim();
  let localId = nextId;
  tasks.push({name: trimmedName, id: localId, done: false});
  nextId++;
  return {name, id: localId, done: false};
}

function reset() {
  tasks = [];
  nextId = 1;
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;

  task.done = !task.done;
  return task;
}


module.exports = { getTasks, reset, toggleTask, addTask };


