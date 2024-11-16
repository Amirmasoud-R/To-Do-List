const todoList = [
  { name: 'Wash dishes', dueDate: '2023/08/28' },
  { name: 'Watch youtube', dueDate: '2023/08/28' },
];

const inputElem = document.querySelector('.js-input');

showList();

/**
 * @param {Event} event - The event object to be processed
 * @returns {undefined} - Return value
 */
function onEnterKey(event) {
  if (event.key === 'Enter') addTodo();
}

/** @returns {undefined} */
function showList() {
  const containerElem = document.querySelector('.js-todo-container');

  result = '';
  todoList.forEach((todoObject, i) => {
    const { name, dueDate } = todoObject;
    result += /*html*/`
    <span>${name}</span>
    <span>${dueDate}</span>
    <button class="delete-button js-delete-button">
      Delete
    </button>
  `;
  });

  containerElem.innerHTML = result;

  document.querySelectorAll('.js-delete-button').forEach((button, index) => {
    button.addEventListener('click', () => {
      console.log(index);
      deleteTodo(index);
    });
  });
}

/**
 * @param {number} index
 * @returns {undefined}
 */
function deleteTodo(index) {
  todoList.splice(index, 1);
  showList();
}

/** @returns {undefined} */
function addTodo() {
  const name = inputElem.value;
  const dateInputElem = document.querySelector('.js-date-input');
  const dueDate = dateInputElem.value;

  todoList.push({ name, dueDate });

  inputElem.value = '';
  showList();
}

inputElem.addEventListener('keydown', (event) => onEnterKey(event));

document
  .querySelector('.js-add-button')
  .addEventListener('click', () => addTodo());
