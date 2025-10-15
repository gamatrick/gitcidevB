
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

module.exports = { getTasks, reset, addTask };
