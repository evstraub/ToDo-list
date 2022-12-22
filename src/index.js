import './style.css';
import { createToDo } from './create-to-do.js';
import { todosFunc } from './todosBlankLoad.js';
import {
  displayDefaultProject,
  displayTheForm,
  addItemToCheckList,
  clearForm,
} from './dom-manip.js';

// call todosFunc on first land
todosFunc();

// Call DOM Manipulation module to load default project
// displayDefaultProject();

// Click events module
const clickEventsModule = (function () {
  // Click event for displaying the form
  const addNewToDo = document.querySelector('.add-todo-button');
  addNewToDo.addEventListener('click', displayTheForm);

  // Click event for adding an item to the checklist on the form
  const addToChecklist = document.querySelector('.add-to-checklist');
  addToChecklist.addEventListener('click', addItemToCheckList);

  // Click event to clear the form
  const clearButton = document.querySelector('.reset-button');
  clearButton.addEventListener('click', clearForm);

  // Click event to submit a new todo form to project
  const submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', createToDo);
})();

// call create-to-do.js module file and appl some objects/properties(this will eventually be replaced by ui)
// const myToDo = createToDo(
//   'christmas presents',
//   'for emma',
//   '02/25/2001',
//   'high',
//   'card',
//   'money',
//   'book'
// );
// const myToDo2 = createToDo(
//   'christmas presents',
//   'for lane',
//   '02/25/2001',
//   'high',
//   'ticket',
//   'dollars',
//   'video games'
// );
// console.log('show me properties on my ToDo from index.js.....', myToDo);
// console.log('show me properties on my ToDo2 from index.js.....', myToDo2);
