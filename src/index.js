import './style.css';
import { createToDo } from './create-to-do.js';
import { todosFunc } from './todosBlankLoad.js';
import { initialdomManip } from './initial-dom-manip.js';

// call todosFunc on first land
todosFunc();

// call dom manip ui module to control ui
initialdomManip();

// TODO' click event module HERE for todo and project creations

// call create-to-do.js module file and appl some objects/properties(this will eventually be replaced by ui)
const myToDo = createToDo(
  'christmas presents',
  'for emma',
  '02/25/2001',
  'high',
  'card',
  'money',
  'book'
);
const myToDo2 = createToDo(
  'christmas presents',
  'for lane',
  '02/25/2001',
  'high',
  'ticket',
  'dollars',
  'video games'
);
console.log('show me properties on my ToDo from index.js.....', myToDo);
console.log('show me properties on my ToDo2 from index.js.....', myToDo2);
