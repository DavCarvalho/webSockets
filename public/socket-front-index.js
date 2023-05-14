import { insertLinkDocument, removeLinkDocument } from "./index.js";

const socket = io();

socket.emit('get_documents', (documents) => {
  documents.forEach(doc => {
    insertLinkDocument(doc.name);
  })
});

function emitAddDocument(name) {
  socket.emit('add_document', name);
}

socket.on('add_document_interface', (name) => {
  insertLinkDocument(name);
});

socket.on('document_exist', (name) => {
  alert(`The document ${name} already exists`);
});

socket.on("deleted_document_sucess", (name) => {
  removeLinkDocument(name);
});


export { emitAddDocument };