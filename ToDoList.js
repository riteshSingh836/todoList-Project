document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM content to be fully loaded before attaching the event listener
  
    // Get input, ul, span elements by their IDs
    const newTaskInput = document.getElementById('newTask');
    const ListInput = document.getElementById('List');
    const countInput = document.getElementById('count');
  
    // Initialize the task count
    let totalTasks = 0;
  
    // Event listener for the "Add Task" button
    function addTask() {
      const taskText = newTaskInput.value.trim();

    //    if input is empty
      if (taskText == '') {
        const addButton = document.querySelector('#add-button');
        addButton.addEventListener('click', alert('Please Enter The Task'));
      }
  
      // Check if the input is not empty
      if (taskText !== '') {
        // Create a new li element
        const listItem = document.createElement('li');
        
        // Create a checkbox for the task
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
          updateTaskCounter(checkbox.checked ? -1 : 1); // Decrement if checked, increment if unchecked
          updateTaskStyle(listItem, checkbox.checked);
        });
  
        // Create a label for the task text
        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;
  
        // Add a delete button to each task
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
          listItem.remove();
          updateTaskCounter(checkbox.checked ? 0 : -1); // Decrement if not checked
        };
  
        // Append the checkbox, label, and delete button to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(deleteButton);
  
        // Append the new task to the task list
        ListInput.appendChild(listItem);
  
        // Increment the task count
        updateTaskCounter(1);
  
        // Clear the input field
        newTaskInput.value = '';
      }
    }
  
    // Update the task count
    function updateTaskCounter(change) {
      totalTasks += change;
      countInput.textContent = totalTasks;
    }
  
    // Update the task style based on the completion status
    function updateTaskStyle(listItem, completed) {
      listItem.style.textDecoration = completed ? 'line-through' : 'none';
      listItem.style.color = completed ? '#808080' : 'black';
    }
  
    // Expose the addTask function to the global scope (for the inline onclick attribute)
    window.addTask = addTask;
  });
  