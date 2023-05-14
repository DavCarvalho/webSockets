import { alertAndRedirect, updateTextEditor } from "./document.js";
const socket = io();


function selectDocument(documentName) {
  socket.emit('select_document', documentName, (text) => {
    updateTextEditor(text);
  });
}

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

