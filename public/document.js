import { emitTextEditor, selectDocument } from "./socket-front-document.js";

const params =  new URLSearchParams(window.location.search);
const documentName = params.get('name');

const titleDocument = document.getElementById('title-document');
const textEditor = document.getElementById('text-editor');

titleDocument.textContent = documentName || "Untitled Document";

selectDocument(documentName);

textEditor.addEventListener('keyup', () => {
  emitTextEditor(textEditor.value, documentName);
});

function updateTextEditor(text) {
  textEditor.value = text;
}

export { updateTextEditor };