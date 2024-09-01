const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addBtn = document.getElementById('add-btn');
const deleteBtn = document.getElementById('delete-btn');

addBtn.addEventListener('click', () => {
    if (inputBox.value === '') return;

    const li = document.createElement('li');
    li.textContent = inputBox.value;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    li.prepend(checkbox); // Insert checkbox before task text
    listContainer.appendChild(li);

    inputBox.value = '';
});

deleteBtn.addEventListener('click', () => {
    const completedTasks = listContainer.querySelectorAll('li.completed');
    completedTasks.forEach(task => {
        listContainer.removeChild(task);
    });
});