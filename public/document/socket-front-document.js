import { getCookie } from "../utils/cookies.js";
import { alertAndRedirect, treatAuthorizationSuccess, updateInterface, updateTextEditor } from "./document.js";

const socket = io('/users', {
  auth: {
    token: getCookie("tokenJwt"),
  }
});

socket.on('authorization_good', treatAuthorizationSuccess);

socket.on("connect_error", (erro) => {
  alert(erro);
  window.location.href = '/login/login.html';
});

function selectDocument(dataEntry) {
  socket.emit('select_document', dataEntry, (text) => {
    updateTextEditor(text);
  });
}

socket.on('users_in_document', updateInterface);

socket.on('user_already_in_document', () => {
  alert(' Document already open in other page');
  window.location.href = "/";
})

function emitTextEditor(data) {
  socket.emit('text_editor', data);
}

function emitDeleteDocument(name){
  socket.emit('delete_document', name);
}

socket.on('text_editor_clients', (text) => {
  updateTextEditor(text);
});

socket.on('deleted_document_sucess', (name) => {
  alertAndRedirect(name);
});

socket.on("disconnect", (reason) => {
  console.log(`Server disconnected!
  Reason: ${reason}`);
});

export { emitTextEditor, selectDocument, emitDeleteDocument };

