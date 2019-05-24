var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtn = document.querySelectorAll(".Delete");
var listObj = document.querySelectorAll("li")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var buttonCreate = document.createElement("button");
	buttonCreate.appendChild(document.createTextNode("Delete"));
	buttonCreate.setAttribute("class", "Delete");
	buttonCreate.addEventListener("click", deleteAfterClick);
	li.appendChild(document.createTextNode(input.value+" "));
	li.appendChild(buttonCreate);
	ul.appendChild(li);
	input.value = "";
}

function crossOut (event){
	event.target.classList.add("done");
}

function deleteAfterClick(event){
	item = event.target.parentNode;
	item.parentElement.removeChild(item);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

listObj.forEach(function(item){
	item.addEventListener("click",crossOut)
})

deleteBtn.forEach(function (item){
	item.addEventListener("click", deleteAfterClick)
})

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
