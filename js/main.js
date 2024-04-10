const addBtn = document.querySelector('.add')
const deleteAllBtn = document.querySelector('.delete-all')

const noteArea = document.querySelector('.note-area')

const settingsPanel = document.querySelector('.menu')
const settingsBtn = document.querySelector('.settings-icon')
const deleteNoteBtn = document.getElementsByClassName('delete-note')
const editBtn = document.getElementsByClassName('edit')

// addPanel
const addPanel = document.querySelector('.add-panel')
const notePanelTitle = document.querySelector('.note-panel-title')
const addPanelTextArea = document.querySelector('.addpanel-note-area')
const addPanelTitle = document.querySelector('#note-title')
const errorAddPanelText = document.querySelector('.error-addpanel-text')
const addNoteBtn = document.querySelector('.add-note')
const cancelBtn = document.querySelector('.cancel')


let cardID = 0;
let oldNote;
let newNote;

const showAddPanel = () => {
    addPanel.style.display = 'flex'
}

const closeAddPanel = () => {
    addPanel.style.display = 'none';
    errorAddPanelText.style.visibility = 'hidden'
    addPanelTextArea.value = '';
    addPanelTitle.value = '';
}



const addNote = () => {
    if(addPanelTextArea.value !== '' && addPanelTitle.value !== '') {
        createNote()
        errorAddPanelText.style.visibility = 'hidden'
    } else {
        errorAddPanelText.style.visibility = 'visible'
    }
}

const createNote = () => {
    const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    let dateObj = new Date(),
    month = months[dateObj.getMonth()],
    day = dateObj.getDate(),
    year = dateObj.getFullYear();
    let date = `${day} ${month} ${year}`;



    newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardID)
    newNote.innerHTML = `<div class="note-header">
    <h3 class="note-header-title">${addPanelTitle.value}</h3>
    <div class="settings">
						<button class="settings-icon"><i class="fa-solid fa-gear"></i></button>
						<ul class="settings-panel">
							<li onclick="editNote(${cardID}, '${addPanelTitle.value}', '${addPanelTextArea.value}')"><i class="fa-solid fa-pen-to-square"></i>Edytuj</li>
							<li onclick="deleteNote(${cardID})"><i class="fa-solid fa-trash"></i>Usuń</li>
						</ul>
					</div>
</div>
<div class="note-body">
<p class="note-body-text">
${addPanelTextArea.value}
</p>
<hr>
<p class="note-body-date">
${date}
</p>
</div>`
    noteArea.appendChild(newNote)
    cardID++;
    console.log(newNote);
    closeAddPanel();
}

const editNote = (id, title, noteText) => {
    const oldNote = document.getElementById(id)
    addPanelTitle.value = title;
    addPanelTextArea.value = noteText;
    notePanelTitle.innerText = 'Edytuj notatkę'
    addPanel.style.display = 'flex'
}


const deleteNote = (id) => {
    const noteToDelete = document.getElementById(id)
    noteArea.removeChild(noteToDelete)
}

const deleteAllNotes = () => {
    noteArea.textContent = ''
}

addBtn.addEventListener('click', showAddPanel)
addNoteBtn.addEventListener('click', addNote)
cancelBtn.addEventListener('click', closeAddPanel)
deleteAllBtn.addEventListener('click', deleteAllNotes)
