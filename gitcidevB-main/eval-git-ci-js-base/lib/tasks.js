
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

function addTask(name) {
  let trimmedName = name.trim();
  tasks.push({trimmedName, id: nextId, done: false});
  nextId++;
  return {trimmedName, id: nextId, done: false};
}

function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, addTask };
