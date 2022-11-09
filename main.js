const taskHeading = document.querySelector("#tasks-heading");
let countTasks = 0;

// listens to page load event
window.addEventListener("load", () => {
  const form = document.querySelector("#add-task-form");
  const input = document.querySelector("#add-task-input");
  const listElement = document.querySelector("#tasks");

  taskCount();

  // listens to submit form event
  form.addEventListener("submit", (e) => {
    // prevents the default page reload behaviour
    e.preventDefault();

    // gets the value from input text field
    const task = input.value;

    // creates a new task list element and add different elements to it
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskContentElement = document.createElement("div");
    taskContentElement.classList.add("content");

    const taskRadioElement = document.createElement("button");
    taskRadioElement.classList.add("complete-task");

    const radioImageElement = document.createElement("img");
    radioImageElement.src =
      "https://cdn-user-icons.flaticon.com/83218/83218139/1668028052631.svg?token=exp=1668028973~hmac=fd9ab01783834aaf38a40396c2db0dfe";
    radioImageElement.alt = "edit-button";
    radioImageElement.style = "height: 20px; width: 20px;";

    taskRadioElement.appendChild(radioImageElement);

    const taskCompleteElement = document.createElement("button");
    taskCompleteElement.classList.add("complete-task");

    const completedImageElement = document.createElement("img");
    completedImageElement.src =
      "https://cdn-icons-png.flaticon.com/512/758/758569.png";
    completedImageElement.alt = "edit-button";
    completedImageElement.style = "height: 20px; width: 20px;";

    taskCompleteElement.appendChild(completedImageElement);

    const taskInputElement = document.createElement("input");
    taskInputElement.classList.add("text");
    taskInputElement.type = "text";
    taskInputElement.value = task;
    taskInputElement.setAttribute("readonly", "readonly");

    taskContentElement.appendChild(taskInputElement);

    taskElement.appendChild(taskRadioElement);
    taskElement.appendChild(taskContentElement);

    const taskActionsElement = document.createElement("div");
    taskActionsElement.classList.add("actions");

    const taskEditElement = document.createElement("button");
    taskEditElement.classList.add("edit");

    const editImageElement = document.createElement("img");
    editImageElement.src =
      "https://cdn-icons-png.flaticon.com/512/1828/1828270.png";
    editImageElement.alt = "edit-button";
    editImageElement.style = "height: 30px; width: 30px;";

    const taskDeleteElement = document.createElement("button");
    taskDeleteElement.classList.add("delete");

    const deleteImageElement = document.createElement("img");
    deleteImageElement.src =
      "https://cdn-icons-png.flaticon.com/512/6460/6460112.png";
    deleteImageElement.alt = "delete-button";
    deleteImageElement.style = "height: 30px; width: 30px;";

    const taskSaveElement = document.createElement("button");
    taskSaveElement.classList.add("save");

    const saveImageElement = document.createElement("img");
    saveImageElement.src =
      "https://cdn-icons-png.flaticon.com/512/1828/1828640.png";
    saveImageElement.alt = "save-button";
    saveImageElement.style = "height: 30px; width: 30px;";

    taskEditElement.appendChild(editImageElement);
    taskDeleteElement.appendChild(deleteImageElement);
    taskSaveElement.appendChild(saveImageElement);

    taskActionsElement.appendChild(taskEditElement);
    taskActionsElement.appendChild(taskDeleteElement);

    taskElement.appendChild(taskActionsElement);

    // adds the task list element to the task list
    listElement.appendChild(taskElement);

    // resets the input field
    input.value = "";
    taskCount();

    // disables tasks on radio style button click
    taskRadioElement.addEventListener("click", () => {
      taskInputElement.style.textDecoration = "line-through";
      taskActionsElement.removeChild(taskEditElement);
      taskElement.replaceChild(taskCompleteElement, taskRadioElement);
    });

    // re-enables the task item on radio style button click
    taskCompleteElement.addEventListener("click", () => {
      taskInputElement.style.textDecoration = "none";
      taskActionsElement.insertBefore(taskEditElement, taskDeleteElement);
      taskElement.replaceChild(taskRadioElement, taskCompleteElement);
    });

    // makes the task item editable on click of edit button
    taskEditElement.addEventListener("click", () => {
      taskInputElement.removeAttribute("readonly");
      taskInputElement.focus();
      taskActionsElement.replaceChild(taskSaveElement, taskEditElement);
    });

    // saves the edited task item on click of save button
    taskSaveElement.addEventListener("click", () => {
      taskInputElement.setAttribute("readonly", "readonly");
      taskActionsElement.replaceChild(taskEditElement, taskSaveElement);
    });

    // deletes the task from task list
    taskDeleteElement.addEventListener("click", () => {
      listElement.removeChild(taskElement);
      taskCount();
    });
  });
});

// gets the count of tasks in tasklist
taskCount = () => {
  countTasks = document.querySelectorAll(".task").length;
  taskHeading.innerText = `Tasks Remaining: ${countTasks}`;
};
