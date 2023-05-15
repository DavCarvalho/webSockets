

import { emitAddDocument } from './socket-front-index.js';
import { getCookie, removeCookie } from './utils/cookies.js';

const tokenJwt = getCookie("tokenJwt");

console.log(tokenJwt);

const listDocuments = document.getElementById('list-documents');
const form = document.getElementById('form-add-document');
const inputDocument = document.getElementById('input-document');
const buttonLogout = document.getElementById('button-logout');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  emitAddDocument(inputDocument.value);
  inputDocument.value = '';
});

buttonLogout.addEventListener('click', () => {
  removeCookie("tokenJwt");
  alert('User logged out successfully');
  window.location.href = '/login/login.html';
});

function insertLinkDocument(documentName){
  listDocuments.innerHTML += `
    <a
      href="/document/document.html?name=${documentName}"
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

export { insertLinkDocument, removeLinkDocument } 