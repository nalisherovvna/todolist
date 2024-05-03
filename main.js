function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === '') {
        alert("Yangi vazifa qo'shish");
        return;
    }

    var listItem = document.createElement("li");
    var textNode = document.createTextNode(input);
    listItem.appendChild(textNode);

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("o'chirish"));
    deleteButton.setAttribute("onclick", "deleteTask(this)");

    listItem.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(listItem);

    document.getElementById("taskInput").value = '';
}

function deleteTask(item) {
    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}