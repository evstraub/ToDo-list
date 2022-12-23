export function ToDoList() {
  const addToDoButton = document.getElementById('addToDo');
  const toDoContainer = document.getElementById('toDoContainer');
  const inputField = document.getElementById('inputField');

  addToDoButton.addEventListener('click', () => {
    const paragraph = document.createElement('p');
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
