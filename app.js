const main = document.getElementById("notes-grid");
const dialog = document.getElementById("dialog");

function renderNotes() {
  const notes = loadNotes();
}

document.addEventListener("DOMContentLoaded", function () {
  const notes = [];
  renderNotes();

  const addNote = document.getElementById("add-note");
  addNote.addEventListener("click", function () {
    const isOpen = dialog.getAttribute("open");
    console.log({ isOpen });
    if (isOpen === null) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  });

  document
    .getElementById("cancel-dialog")
    .addEventListener("click", function () {
      dialog.close();
      document.getElementById("title-input").value = "";
      document.getElementById("note-input").value = "";
    });

  document.getElementById("submit-note").addEventListener("click", function () {
    const noteHeader = document.getElementById("title-input").value;
    const noteContent = document.getElementById("note-input").value;
    dialog.close();
    main.innerHTML += `<div class="note">
        <h3 class="note-header">${noteHeader}</h3>
        <p class="note-content">
          ${noteContent}
        </p>
        <img class="delete-note" src="images/trash.svg" alt="" />
      </div>`;
    document.getElementById("title-input").value = "";
    document.getElementById("note-input").value = "";
    if (main.querySelectorAll(".note").length > 0) {
      document.getElementById("no-note").innerHTML = "";
    }
  });

  const modeChanger = document.getElementById("mode-changer");
  modeChanger.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");

    if (isDark) {
      modeChanger.innerHTML = "☀️";
    } else {
      modeChanger.innerHTML = "🌙";
    }
    document.querySelector(".delete-note").classList.toggle("dark-trash");
    document.querySelector("#note-input").classList.toggle("dark-note");
    document.querySelector("#title-input").classList.toggle("dark-title");
  });

  // Event delegation for deleting notes
  main.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-note")) {
      const noteDiv = event.target.closest(".note");
      if (noteDiv) {
        noteDiv.remove();
        if (main.querySelectorAll(".note").length === 0) {
          document.getElementById("no-note").innerHTML =
            "You have no notes... <br />Yet...";
        } else {
          document.getElementById("no-note").innerHTML = "";
        }
      }
    }
  });
});
