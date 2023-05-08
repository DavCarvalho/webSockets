import { updateTextEditor } from "./document.js";
const socket = io();


function selectDocument(documentName) {
  socket.emit('select_document', documentName, (text) => {
    updateTextEditor(text);
  });
}

function emitTextEditor(text, documentName) {
  socket.emit('text_editor', text, documentName);
}

socket.on('text_editor_clients', (text) => {
  updateTextEditor(text);
});


socket.on("disconnect", (reason) => {
  console.log(`Server disconnected!
  Reason: ${reason}`);
});

export { emitTextEditor, selectDocument };

