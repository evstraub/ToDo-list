import { compareAsc, format, parseISO, startOfToday } from 'date-fns';
import { clearForm } from './dom-manip';
import { saveToDoToLocal } from './manage-local-storage.js';
// creating an array for ToDo, if needed later
const toDoArray = [];

// factory function to create todo list
export const createToDo = () => {
  const Title = document.getElementById('Title').value;
  const Description = document.getElementById('Description').value;
  const DueDate = document.getElementById('DueDate').value;
  const Priority = document.getElementById('Priority').value;

  // Check to see if empty fields exist
  // eslint-disable-next-line eqeqeq
  if (Title == '' || Description == '' || DueDate == '') {
    alert(
      'Title, Description, and Due Date are required fields, please try again!'
    );
    return;
  }

  // Check to see if a pre-date was entered
  if (parseISO(DueDate) < startOfToday()) {
    alert(
      'You have entered a date that has already passed!  Please enter a date greater than or equal to today.'
    );
    console.log('due date', parseISO(DueDate));
    console.log('date now', startOfToday());
    return;
  }

  // Loop over the nodelist for Check List items from the DOM and format to string
  const nodeListCheckList = document.querySelectorAll('.form-li');
  const CheckListArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < nodeListCheckList.length; i++) {
    // Strip off the "x" from end of each li then push to temp array
    const strippedCheckList = nodeListCheckList[i].textContent.replace(
      '\u00D7',
      ''
    );
    CheckListArray.push(strippedCheckList);
  }

  // Strip off the checklist array and convert to string with commas
  const CheckList = CheckListArray.join(', ');

  console.log('called createToDo module...creating todo now');
  console.log({ Title, Description, DueDate, Priority, CheckList });
  console.log('pushing this object to the toDoArray...');
  // TODO: remove 2 lines of coe if array is not  needed
  toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
  console.log(toDoArray);
  // call storage module and push object to local storage
  saveToDoToLocal({ Title, Description, DueDate, Priority }, CheckList);
  // reset form after successful submission
  clearForm();

  // eslint-disable-next-line no-sequences
  return { Title, Description, DueDate, Priority }, CheckList;
};
