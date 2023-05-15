import { emitDeleteDocument, emitTextEditor, selectDocument } from "./socket-front-document.js";

const params =  new URLSearchParams(window.location.search);
const documentName = params.get('name');

const titleDocument = document.getElementById('title-document');
const textEditor = document.getElementById('text-editor');
const deleteButton = document.getElementById('delete-document');
const listUsersConnected = document.getElementById("connected-users");


titleDocument.textContent = documentName || "Untitled Document";

function treatAuthorizationSuccess(payloadToken) {
  selectDocument({documentName, nameUser: payloadToken.nameUser})
}

function updateInterface(userInDocument){
  listUsersConnected.innerHTML = '';

  userInDocument.forEach((user) => {
    listUsersConnected.innerHTML += `
      <li class="list-group-item">${user}</li>
    `;
  });
}


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

export { updateTextEditor, alertAndRedirect, treatAuthorizationSuccess, updateInterface };