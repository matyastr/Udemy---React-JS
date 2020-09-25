/*jshint esversion: 6 */

const list = document.getElementById("list");
const inputField = document.getElementById("list-text-input");

function addListItem() {
    if (inputField.value && inputField.value !== "") {
        const newListElement = document.createElement("li");
        const textNode = document.createTextNode(inputField.value);
        
        newListElement.appendChild(textNode);
        list.appendChild(newListElement);
    }
    else {
        alert("Please enter a task!");
    }
}

document.body.addEventListener('keydown', function(e) {
   if (e.key === "Enter") {
        addListItem();
   }
});

const addListButton = document.getElementById("add-list-btn");

addListButton.addEventListener("click", function(e) {
    addListItem();
});