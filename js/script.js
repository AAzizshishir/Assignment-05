const questionContainer = document.getElementById("question-container");
const completeButtons = document.querySelectorAll(".complete-btn");
const incompleteTask = document.getElementById("incompleted task");
const totalTask = document.getElementById("total-task");
const changeTheme = document.getElementById("bg-change-btn");
console.log(questionContainer.textContent);

questionContainer.addEventListener("click", function () {
  window.location = "../aboutJs.html";
});
let incompletedTask = 6;
let completedTask = 0;

for (const completeBtn of completeButtons) {
  completeBtn.addEventListener("click", function (event) {
    alert("Board Update Successfully");
    incompletedTask--;
    completedTask++;
    incompleteTask.innerText = incompletedTask;
    totalTask.innerText = completedTask;
    if (incompletedTask === 0) {
      alert("Congrats!! You have completed all the current task");
    }
    completeBtn.setAttribute("disabled", true);
    completeBtn.classList.add("bg-gray-400");
    completeBtn.classList.remove("hover:bg-blue-700", "cursor-pointer");

    const parentDiv = completeBtn.parentElement;
    const grandPararent = parentDiv.parentElement;
    const heading = grandPararent.querySelector(".heading").innerText;
    
    const currentTime = new Date().toLocaleTimeString();
    let para = document.createElement("p");
    para.classList.add("p-2", "my-2", "bg-gray-100", "rounded-md");
    para.innerText = `You have completed the task ${heading} at ${currentTime}`;
    const history = document.getElementById("history");
    history.appendChild(para);

    const historyButton = document.getElementById("history-btn");
    historyButton.addEventListener("click", function () {
      history.innerHTML = "";
    });
  });
}

function randomColor(){
  let letters = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

changeTheme.addEventListener("click", function(){
  document.body.style.backgroundColor = randomColor();
})

const date = document.getElementById("date");
const newDate = new Date().toDateString();

date.innerText = newDate;