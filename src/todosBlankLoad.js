export const todosFunc = () => {
  console.log('called todosFunc module ...creating blank my list now');

  const myList = [];
  console.log('pushing the title name of the project to the my list array');

  const projectTitle = 'default Project';
  myList.push(projectTitle);
  console.log(myList);
  return { myList, projectTitle };
};
