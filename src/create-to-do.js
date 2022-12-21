// creating an array for ToDo, if needed later
const toDoArray = [];

// factory function to create todo list
export const createToDo = (
  Title,
  Description,
  DueDate,
  Priority,
  Checklist
) => {
  console.log('called createToDo module...creating todo now');
  console.log({ Title, Description, DueDate, Priority, Checklist });
  console.log('pushing this object to the toDoArray...');
  // TODO: remove 2 lines of coe if array is not  needed
  toDoArray.push({ Title, Description, DueDate, Priority, Checklist });
  console.log(toDoArray);
  return { Title, Description, DueDate, Priority, Checklist };
};
