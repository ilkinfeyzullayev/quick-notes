const main = document.getElementById("notes-grid");
const dialog = document.getElementById("dialog");

const notes = [];

document.addEventListener("DOMContentLoaded", function () {
  main.innerHTML = notes.join("");

  const addNote = document.getElementById("add-note");
  addNote.addEventListener("click", function () {
    // notes.push(`<h1>Hello${notes.length}</h1>`);
    // main.innerHTML = notes.join("");
    dialog.showModal();
  });
});
