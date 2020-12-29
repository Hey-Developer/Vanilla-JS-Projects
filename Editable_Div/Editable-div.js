// Creating a Elements to be append
var div = document.createElement("div");
div.innerText = "click here to edit";
div.classList.add("editableDiv");
var txtArea = document.createElement("textarea");

// Appending it into the body:
let parent = document.getElementById("container");
parent.appendChild(div);

// Adding Events listeners:
div.addEventListener("click", editDiv);
txtArea.addEventListener("focusout", editText);

// Defining handlers:
function editDiv(e) {
    txtArea.classList.add("txt");
    div.remove();
    parent.appendChild(txtArea);
}

function editText(e) {
    var text = txtArea.value;
    if (text != "") {
        div.innerText = text;
    }
    txtArea.remove();
    parent.appendChild(div);
}