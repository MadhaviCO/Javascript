// Problem: User interaction doesn't provide desired results.
// Solution: Add interactivity so the user can manage daily tasks.

// Add a new task
var taskInput = document.getElementById('new-task'); // new-task
var addButton = document.getElementsByTagName('button')[0]; // first button on the page
addButton.disabled = true;
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); // #incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); // #completed-tasks

var createNewTaskElement = function(taskString){
  var listItem = document.createElement('li');
  // input (checkbox)
  var checkBox = document.createElement('input');
  // label
  var label = document.createElement('label');
  // input (text)
  var editInput = document.createElement('input');
  // button.edit
  var editButton = document.createElement('button');
  // button.delete
  var deleteButton = document.createElement('button');

  //Each element needs modifying
  checkBox.type = 'checkbox';
  label.textContent = taskString;
  editInput.type = 'text';
  editButton.className = 'edit';
  editButton.textContent = 'edit';
  deleteButton.className = 'delete';
  deleteButton.textContent = 'delete';

  //Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);  
  return listItem;
}

//when the add button is pressed, 
var addTask = function () {

  // create a new list item with the text from #new-task:
  var listItem = createNewTaskElement(taskInput.value);
  
  // Append newTask to the incomplete task items.
  
  incompleteTasksHolder.appendChild(listItem);
  
  // Bind task events to the new list item;
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value = "";
  addButton.disabled = true;
} // end addTask

// Edit an existing task
var editTask = function () {
  
    // When the Edit button is pressed
          // if the class of the parent is .editMode
            // switch from .editMode
            // label text become the input's value
    var listItem = this.parentNode;
    var editInput = listItem.querySelector('input[type="text"]');
    var label = listItem.querySelector("label");
  
    if(listItem.classList.contains("editMode")) {
       label.innerText = editInput.value;
    } else {
       editInput.value = label.innerText;
    }
  
    // Toggle . editMode on the parent    
    listItem.classList.toggle('editMode');
  
} // end editTask
    
// Delete an existing task
var deleteTask = function () {
  
    // When delete is pressed
        // remove the parent lis titem from the ul
    var listItem = this.parentNode;
    var list = listItem.parentNode;
    list.removeChild(listItem);
} // end deleteTask

// Mark a task as complete

var taskCompleted = function() {
  
  // append the task list item to the #completed-task
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
  
} // end taskCompleted

// Mark a task as incomplete

var taskIncomplete = function () {

  // append this to #incomplete-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  
} // end taskIncomplete

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  
  var checkBox = taskListItem.querySelector('input[type=checkbox]');
  var editButton = taskListItem.querySelector('button.edit');
  var deleteButton = taskListItem.querySelector('button.delete');

  // bind editTask to edit button  
  editButton.onclick = editTask;
  // bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  // bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function (){
  console.log('AJAX Request');
};

var toggleAddButton = function(){
  console.log ('Inside Toggle Add Button');
  if(taskInput.value){
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
  }
}

taskInput.oninput = toggleAddButton;

// Set the click handler to the addTask function
addButton.addEventListener('click', addTask);
addButton.addEventListener('click', ajaxRequest);

// Cycle over incompleteTaskHolder ul list items
var incompleteItems = incompleteTasksHolder.children;
for(var i = 0; i < incompleteTasksHolder.children.length ; i++) {
     // select its children
     // Bind events to list item's children (taskCompleted)

  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

// Cycle over completeTaskHolder ul list items

for (var i = 0; i < completedTasksHolder.children.length; i++ ){
     // select its children
     // Bind events to list item's children (taskIncomplete)
  
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}