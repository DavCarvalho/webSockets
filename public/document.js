import { emitDeleteDocument, emitTextEditor, selectDocument } from "./socket-front-document.js";

const params =  new URLSearchParams(window.location.search);
const documentName = params.get('name');

const titleDocument = document.getElementById('title-document');
const textEditor = document.getElementById('text-editor');
const deleteButton = document.getElementById('delete-document');

titleDocument.textContent = documentName || "Untitled Document";

selectDocument(documentName);

textEditor.addEventListener('keyup', () => {
  emitTextEditor({
    text: textEditor.value,
    documentName
  });
});


deleteButton.addEventListener('click', () => {
  emitDeleteDocument(documentName);
});

function updateTextEditor(text) {
  textEditor.value = text;
}

function alertAndRedirect(name){
  if(name === documentName) {
    alert(`Document ${name} deleted successfully`);
    window.location.href = '/';
  }
}

export { updateTextEditor, alertAndRedirect };