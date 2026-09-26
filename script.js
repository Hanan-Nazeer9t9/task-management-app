const taskForm = document.getElementById("taskForm");

const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskPriority = document.getElementById("taskPriority");
const taskDate = document.getElementById("taskDate");

let tasks = [];
let searchTerm = "";
let statusFilter = "all";



const savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
  tasks = JSON.parse(savedTasks);
}
//=======================
//Create Task
//========================

// event listener for form submission
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = {
    id: Date.now(),
    title: taskTitle.value,
    description: taskDescription.value,
    priority: taskPriority.value,
    status: "pending",
    dueDate: taskDate.value,
  };

  tasks.push(task);

  saveTasks();

  displayTasks();
  updateDashboard();
  taskForm.reset();
});

//======================
// Display Tasks
//==================

const taskList = document.getElementById("taskList");

// function to display tasks in the task list
function displayTasks() {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter(function (task) {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm);

    const matchesStatus =
      statusFilter === "all" || task.status === statusFilter;

    return matchesSearch && matchesStatus;
  });


  filteredTasks.forEach(function (task) {
    const taskElement = document.createElement("div");

    //give css class to the task element for styling
    taskElement.classList.add("task-card");

    taskElement.innerHTML = `
    <h3>${task.title}</h3>

    <p>Description:${task.description}</p>

    <p>Priority: ${task.priority}</p>

    <p>Status: ${task.status}</p>

    <p>Due Date: ${task.dueDate || "No date"}</p>



    <button onclick="toggleStatus(${task.id})">
        Change Status
    </button>

    <button onclick="editTask(${task.id})">
        Edit
    </button>

   <button onclick="deleteTask(${task.id})">
   Delete
   </button>
`;
    taskList.appendChild(taskElement);
  });
}

//=======================
//get task status by id
//========================

const totalTasks = document.getElementById("totalTasks");

const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

//================
// dashboard update function
//===================

function updateDashboard() {
  totalTasks.textContent = tasks.length;

  const pending = tasks.filter(function (task) {
    return task.status === "pending";
  });

  const completed = tasks.filter(function (task) {
    return task.status === "completed";
  });

  pendingTasks.textContent = pending.length;
  completedTasks.textContent = completed.length;
}

//==================
// function to delete tasks
//=======================

function deleteTask(taskId) {
  const confirmed = confirm("Are  you sure  you want to delete this task");
  if (!confirmed) {
    return;
  }

  tasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });

   saveTasks();
  displayTasks();
  updateDashboard();
}

//==================
//edit function
//=======================

function editTask(taskId) {
  const task = tasks.find(function (task) {
    return task.id == taskId;
  });

  if (!task) {
    return;
  }

  const newTitle = prompt("Enter new task title:", task.title);

  if (newTitle === null) {
    return;
  }
  const newDescription = prompt("Enter new description", task.description);

  if (newDescription === null) {
    return;
  }

  task.description = newDescription;

  task.title = newTitle;
 saveTasks();
  displayTasks();
  updateDashboard();
}

//============
//function for toggle status
//==============

function toggleStatus(taskId) {
  const task = tasks.find(function (task) {
    return task.id === taskId;
  });

  if (!task) {
    return;
  }

  if (task.status === "pending") {
    task.status = "completed";
  } else {
    task.status = "pending";
  }
 saveTasks();
  displayTasks();
  updateDashboard();
}

//================
//local storage
//============================

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//this to diplay the saved task 
displayTasks();
updateDashboard();


//============//////////////
//Search   functionality in our task management system 
//////////////////////////////////

//first get the search bar 

const searchTask = document.getElementById("searchTask");


// add an event to the searchTask var
searchTask.addEventListener("input",function(){
  console.log(searchTask.value);
});


searchTask.addEventListener("input",function(){
  searchTerm = searchTask.value.toLowerCase();
  displayTasks();
})


const filterStatus = document.getElementById("filterStatus");

filterStatus.addEventListener("change", function () {
  statusFilter = filterStatus.value;

  displayTasks();
});




const student ={
  namee:"Hanan",
  age:23,
  department:"CS",
  semester:4
};


const {namee,age,department,semester} = student;


console.log(namee);

console.log(age);
console.log(semester);
console.log(department);


// arrAY destructuring



const colors = ["red","Blue","Red"];

const [fourth,second,third] = colors;

console.log(fourth);
console.log(second);
console.log(third);


const technologies = ["HTML","CSS","OOP"];

const [one,two,three] = technologies;

console.log(one);
console.log(two);
console.log(three);



// spread operator expand and copies the vlaue form the  array or object 

const teacher = ["Hanan", "subhan","Ali","Haris"];

const newteahcer =[...teacher,"Asad","Hamza","Maryam "];

console.log(newteahcer);


const skills = ["forntend","backend","FullStack"];

const newskill =["Mobile dev","Ai Automation",...skills];

console.log(newskill);


//reset operator 


const number =[10,20,30,40,50];

const [first, ...remaining] = number;

console.log(first);
console.log(remaining);


//map

const doubled = number.map(function(number){
  return number * 2;
});

console.log(doubled);
 

const value = [2,3,4,5,6,7,8,9];

const square = value.map(value => value * 2);

console.log(value);


const students=[
  {name:"Ali",age:22},
  {name:"Subhan",age:42},
  {name:"Haris",age:12},
];

const stdnames = students.map(students => students.name);

console.log(stdnames);


///filter 

const result = number.filter(number => number > 20);

console.log(result);

const task = [
  { title: "Learn JS", status: "completed" },
  { title: "Learn React", status: "pending" },
  { title: "Build project", status: "pending" },
];

const gettask = task.filter(task => task.status === "pending");

console.log(gettask);