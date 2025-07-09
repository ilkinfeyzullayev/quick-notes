const main = document.getElementById("notes-grid");
const dialog = document.getElementById("dialog");

document.addEventListener("DOMContentLoaded", function () {
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
      </div>`;
    document.getElementById("title-input").value = "";
    document.getElementById("note-input").value = "";
    document.getElementById("no-note").innerHTML = "";
  });

  const modeChanger = document.getElementById("mode-changer");
  modeChanger.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (modeChanger.innerHTML === "🌙") {
      modeChanger.innerHTML = "☀️";
    } else {
      modeChanger.innerHTML = "🌙";
    }
  });
});
