const addBtn = document.querySelector('.add')
const deleteAllBtn = document.querySelector('.delete-all')

const noteArea = document.querySelector('.note-area')
const deleteNoteBtn = document.getElementsByClassName('delete-note')
const editBtn = document.getElementsByClassName('edit')

// addPanel
const addPanel = document.querySelector('.add-panel')
const category = document.querySelector('#category')
const addPaneltextarea = document.querySelector('.addpanel-note-area')
const errorAddPanelText = document.querySelector('.error-addpanel-text')
const addNoteBtn = document.querySelector('.add-note')
const cancelBtn = document.querySelector('.cancel')

// editPanel 
const editPanel = document.querySelector('.edit-panel')
const saveBtn = document.querySelector('.save')
const editPaneltextarea = document.querySelector('.editpanel-note-area')
const errorEditPanelText = document.querySelector('.error-editpanel-text')



let selectedValue;
let cardID = 0;
let oldNote;
let newNote;

const showAddPanel = () => {
    addPanel.style.display = 'flex'
}

const closeAddPanel = () => {
    addPanel.style.display = 'none';
    errorAddPanelText.style.visibility = 'hidden'
    addPaneltextarea.value = ''
    category.selectedIndex = 0;
}

const showEditPanel = () => {
    editPanel.style.display = 'flex'
}

const closeEditPanel = () => {
    editPanel.style.display = 'none';
    errorText.style.visibility = 'hidden'
    editPaneltextarea.value = ''
    category.selectedIndex = 0;
}


const addNote = () => {
    if(addPaneltextarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote()
        errorAddPanelText.style.visibility = 'hidden'
    } else {
        errorAddPanelText.style.visibility = 'visible'
    }
}

const createNote = () => {
    newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardID)
    newNote.innerHTML = `<div class="note-header">
    <h3 class="note-header-title">${selectedValue}</h3>
    <button class="edit" onclick="editTextinNote(${cardID})"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete-note" onclick="deleteNote(${cardID})">
    <i class="fa-solid fa-delete-left"></i>
    </button>
</div>
<div class="note-body">
${addPaneltextarea.value}
</div>`
    noteArea.appendChild(newNote)
    cardID++
    checkColor(newNote)
    closeAddPanel()
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
}

const checkColor = (note) => {
    switch(selectedValue) {
        case 'Zakupy':
            note.style.backgroundColor = 'yellow'
            break;
        case 'Praca':
            note.style.backgroundColor = 'rgb(91, 124, 223)'
            break; 
        case 'Inne':
            note.style.backgroundColor = 'lime'
            break;
    }
}

const editTextinNote = (id) => {
    const oldNote = document.getElementById(id);
    // console.log(oldNote);
    
    editedNote = oldNote.children[1].textContent
    // console.log(editedNote);
    editPaneltextarea.value = editedNote;
    editPanel.style.display = 'flex'
}


const changeNote = () => {
    if(editPaneltextarea.value !== '') {
        editedNote = editPaneltextarea.value;
        editPanel.style.display = 'none';
        errorEditPanelText.style.visibility = 'hidden'
    } else {
        errorEditPanelText.style.visibility = 'visible';
    }
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
saveBtn.addEventListener('click', changeNote)
cancelBtn.addEventListener('click', closeAddPanel)
deleteAllBtn.addEventListener('click', deleteAllNotes)