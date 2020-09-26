/*jshint esversion: 6 */

const list = document.getElementById("list");
const inputField = document.getElementById("list-text-input");


function createListNode() {
    const newListElement = document.createElement("li");
    const textNode = document.createTextNode(inputField.value);
    
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas");
    deleteIcon.classList.add("fa-trash");
    deleteIcon.classList.add("delete-icon");

    deleteIcon.addEventListener("click", function() {
        removeListItem(newListElement);
    });

    newListElement.appendChild(textNode);
    newListElement.appendChild(deleteIcon);
    
    return newListElement;
}

function addListItem() {
    if (inputField.value && inputField.value !== "") {
        list.appendChild(createListNode());
        inputField.value = "";
    }
    else {
        alert("Please enter a task!");
    }
}

function updateListItem(node) {    
    if (inputField.value === "" || list.childElementCount === 0) {
        alert("Please enter a task first!");
        return;
    }

    list.replaceChild(createListNode(), node);
    inputField.value = "";
}

function removeListItem(node) {    
    if (list.childElementCount > 0) {
        list.removeChild(node);
    }
    else {
        alert("Please enter a task first!");
    }
}


inputField.addEventListener('keydown', function(e) {
   if (e.key.toLowerCase() === "enter") {
        addListItem();
   }
});

const addListButton = document.getElementById("add-list-btn");
addListButton.addEventListener("click", function() {
    addListItem();
}); 

const updateListButton = document.getElementById("update-list-btn");
updateListButton.addEventListener("click", function() {
    updateListItem(list.firstElementChild);
}); 

const removeListButton = document.getElementById("remove-list-btn");
removeListButton.addEventListener("click", function() {
    removeListItem(list.firstElementChild);
}); 