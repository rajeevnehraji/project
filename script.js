const noteInput = document.getElementById('note-input');
const addNoteButton = document.getElementById('add-note');
const notesList = document.getElementById('notes-list');

let notes = [];

function addNote() {
  const noteText = noteInput.value;
  if (noteText.trim() !== '') {
    notes.push(noteText);
    renderNotes();
    noteInput.value = '';
  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
}

function editNote(index) {
  const noteText = prompt('Edit note:', notes[index]);
  if (noteText.trim() !== '') {
    notes[index] = noteText;
    renderNotes();
  }
}

function renderNotes() {
  notesList.innerHTML = '';
  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.innerText = note;
    const editButton = document.createElement('span');
    editButton.innerText = 'Edit';
    editButton.className = 'edit';
    editButton.addEventListener('click', () => editNote(index));
    const deleteButton = document.createElement('span');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', () => deleteNote(index));
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    notesList.appendChild(li);
  });
}

addNoteButton.addEventListener('click', addNote);
