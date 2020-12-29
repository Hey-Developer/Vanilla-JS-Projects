// If user add a note add it local storage:
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", e => {
    let addTxt = document.getElementById("addTxt");
    let titleTxt = document.getElementById("titleTxt");
    let notes = localStorage.getItem("notes");
    let title = localStorage.getItem("title");
    let notesObj;
    let titleObj;
    if (notes == null) {
        notesObj = [];
        titleObj = [];
    } else {
        notesObj = JSON.parse(notes); // returns an array
        titleObj = JSON.parse(title); // returns an array
    }
    notesObj.push(addTxt.value);
    titleObj.push(titleTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("title", JSON.stringify(titleObj));
    addTxt.value = "";
    titleTxt.value = "";
    showNotes();
});

// Function to show notes when we click on add note;
function showNotes() {
    let notes = localStorage.getItem("notes");
    let title = localStorage.getItem("title");
    let notesObj;
    let titleObj;
    if (notes == null) {
        notesObj = [];
        titleObj = [];
    } else {
        notesObj = JSON.parse(notes); // returns an array
        titleObj = JSON.parse(title); // returns an array
    }

    let html = "";

    notesObj.forEach(function(note, index) {
        html += `
         <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title font-weight-bold" >${titleObj[index]}-</h5>
            <p class="card-text">${note}</p>
            <button id="${index}" class="btn btn-primary" onclick="deleteNote(this.id)">Delete Note</button>
        </div>
        </div>`;
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show!! Use "ADD NOTE" section above to create NOtes`;
    }
}

// When we reload existing notes should show on screen;
window.addEventListener("load", showNotes);

// Deleting notes when user click on Delete notes;
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    let title = localStorage.getItem("title");
    let notesObj;
    let titleObj;
    if (notes == null) {
        notesObj = [];
        titleObj = [];
    } else {
        notesObj = JSON.parse(notes); // returns an array
        titleObj = JSON.parse(title); // returns an array
    }
    notesObj.splice(index, 1);
    titleObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("title", JSON.stringify(titleObj));
    showNotes();
}

// Search functionality-->
let search = document.getElementById("searchTxt");
search.addEventListener("input", e => {
    let inputVal = search.value.toLowerCase();
    let noteCards = document.querySelectorAll(".noteCard");
    Array.from(noteCards).forEach(elements => {
        let bodyTxt = elements.getElementsByTagName("p")[0].innerText.toLowerCase();
        let titleTxt = elements
            .getElementsByTagName("h5")[0]
            .innerText.toLowerCase();
        if (bodyTxt.includes(inputVal) || titleTxt.includes(inputVal)) {
            elements.style.display = "block";
        } else {
            elements.style.display = "none";
        }
    });
});

/* 
Further Features
-- Add Title
-- Mark note as important.
-- Separate notes by user
-- Sync and host to the webserver. 
*/