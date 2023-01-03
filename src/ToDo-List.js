// import { setDateField } from './date-input';

export function ToDoList() {
  const addToDoButton = document.getElementById('addToDo');
  const toDoContainer = document.getElementById('toDoContainer');
  const inputField = document.getElementById('inputField');
  const modal = document.querySelector('#modal');
  const openModal = document.querySelector('.open-button');
  // const closeModal = document.querySelector('.close-button');

  openModal.addEventListener('click', () => {
    modal.showModal();
  });
  // closeModal.addEventListener('click', () => {
  // modal.close();
  // });
  addToDoButton.addEventListener('click', () => {
    const paragraph = document.createElement('div');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;

    toDoContainer.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', () => {
      paragraph.style.textDecoration = 'line-through';
    });
    paragraph.addEventListener('dblclick', () => {
      toDoContainer.removeChild(paragraph);
    });
  });
}
