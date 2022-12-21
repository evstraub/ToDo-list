export const todosFunc = () => {
  console.log('called todosFunc module ...creating blank my list now');

  const myList = [];
  console.log('pushing the title name of the project to the my list array');

  const projectTitle = 'default Project';
  myList.push(projectTitle);
  console.log(myList);
  return { myList, projectTitle };
  //   class Todos {
  //     constructor(title, description, dueDate, priority) {
  //       this.title = title;
  //       this.description = description;
  //       this.dueDate = dueDate;
  //       this.priority = priority;
  //     }
  //   }
  //   function addTodoToList(title, description, dueDate, priority) {
  //     const todos = new Todos(title, description, dueDate, priority);
  //     myList.push(todos);
  //     displayListOnPage();
  //   }
};
