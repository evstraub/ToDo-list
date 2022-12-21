import { todosFunc } from './todosBlankLoad.js';

// dom manip to display the ui components
export function initialdomManip() {
  // dom for the heading
  const contentDiv = document.querySelector('.content');
  const heading = document.createElement('h1');
  heading.textContent = '2Do app';
  contentDiv.appendChild(heading);
  // dom for the default project load
  const projectsinfoDiv = document.createElement('div');
  projectsinfoDiv.setAttribute('id', 'card');
  projectsinfoDiv.textContent = todosFunc().projectTitle;
  contentDiv.appendChild(projectsinfoDiv);
}
