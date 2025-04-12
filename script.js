//your code here

let input = document.getElementById("newTodoInput")
let btn = document.getElementById("addTodoBtn")
let output = document.getElementById("todoList")

btn.addEventListener("click",addTask)

function addTask(){
	let task = input.value.trim()
	if(!task){
		alert("Add item to list")
		return
	}
	let li = document.createElement("li")
	li.innerHTML = task
	output.append(li)
	input.value = ""
}