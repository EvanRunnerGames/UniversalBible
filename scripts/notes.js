// Function to load notes from localStorage and display them
function loadNotes() {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    // Display each note immediately when loading
    storedNotes.forEach(note => {
        displayNote(note.title, note.content);
    });
}

// Function to display a note on the page
function displayNote(title, content) {
    const noteElement = document.createElement("div");
    noteElement.classList.add("verse", "verse_nohover", "note-bg");

    noteElement.innerHTML = `
        <h2 class="verse-item verse-name" id="note-title">${title}</h2>
        <h4 id="note-content" class="verse-item">${content}</h4>
        <div class="note-buttons">
            <button class="reset-note delete-note">Delete Note</button>                     
        </div>
    `;

    // Append the new note to the container (at the top)
    document.getElementById("notes-container").insertBefore(noteElement, document.getElementById("notes-container").firstChild);

    // Add event listener for delete button
    noteElement.querySelector(".delete-note").addEventListener("click", function() {
        deleteNote(noteElement);
    });
}

// Function to save a note to localStorage and update the view
function saveNote() {
    const noteTitle = document.getElementById("note-title-typein").value;
    const noteContent = document.getElementById("note-content-typein").value;

    if (noteTitle && noteContent) {
        const note = { title: noteTitle, content: noteContent };

        // Get existing notes from localStorage
        const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

        // Prepend the new note to show it first (newest first)
        storedNotes.unshift(note);

        // Save the updated array to localStorage
        localStorage.setItem("notes", JSON.stringify(storedNotes));

        // Display the note on the page immediately
        displayNote(noteTitle, noteContent);

        // Clear input fields
        document.getElementById("note-title-typein").value = "";
        document.getElementById("note-content-typein").value = "";
    } else {
        alert("Please provide both a title and content for the note.");
    }
}

// Function to delete a note
function deleteNote(noteElement) {
    // Get the note title and content from the DOM
    const noteTitle = noteElement.querySelector("#note-title").textContent;
    const noteContent = noteElement.querySelector("#note-content").textContent;

    // Get the existing notes from localStorage
    let storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    // Remove the note from the stored array
    storedNotes = storedNotes.filter(note => note.title !== noteTitle || note.content !== noteContent);

    // Save the updated notes back to localStorage
    localStorage.setItem("notes", JSON.stringify(storedNotes));

    // Remove the note from the page
    noteElement.remove();
}

// Add event listener to the "Add Note" button
document.getElementById("add-note").addEventListener("click", saveNote);

// Load notes from localStorage when the page is loaded
window.addEventListener("load", loadNotes);
