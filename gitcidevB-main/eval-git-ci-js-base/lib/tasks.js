
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

function addTask(name) {
  let trimmedName = name.prototype.trim();
  tasks.push({trimmedName, id: nextId, done: false});
  nextId++;
}

function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, addTask };
