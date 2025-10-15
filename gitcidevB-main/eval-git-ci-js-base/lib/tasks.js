
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}


function reset() {
  tasks = [];
  nextId = 1;
}

function toggleTask(id){
  return tasks[id];
}

module.exports = { getTasks, reset, toggleTask };


