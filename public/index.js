
import { emitAddDocument } from './socket-front-index.js';

const listDocuments = document.getElementById('list-documents');
const form = document.getElementById('form-add-document');
const inputDocument = document.getElementById('input-document');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  emitAddDocument(inputDocument.value);
  inputDocument.value = '';
})

function insertLinkDocument(documentName){
  listDocuments.innerHTML += `
    <a
      href="document.html?name=${documentName}"
      class="list-group-item list-group-item-action"
      id="document-${documentName}"
    >
      ${documentName}
    </a>
  `;
}

function removeLinkDocument(documentName){
  const document = document.getElementById(`document-${documentName}`);

  listDocuments.removeChild(document);
}

export { insertLinkDocument } 