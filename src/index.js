import './style.css';
import { createToDo } from './create-to-do.js';
import { todosFunc } from './todosBlankLoad.js';
import {
  displayDefaultProject,
  displayTheForm,
  addItemToCheckList,
  clearForm,
  displayToDo,
} from './dom-manip.js';

// call todosFunc on first land
todosFunc();

// Call DOM Manipulation module to load default project
// displayDefaultProject();
// Call displayToDo on first land - pulls from web local storage API (if any)
displayToDo();
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
