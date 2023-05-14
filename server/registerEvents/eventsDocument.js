import { deleteDocument, findDocument, updateDocument } from "../db/documentsDb.js";



function registerEventsDocument(socket, io) {
  socket.on('select_document', async(documentName, returnText) => {
    socket.join(documentName); //take the client that is connected to this socket and put it in a room with the name of the document.

    const document = await findDocument(documentName);

    if(document){
      returnText(document.text);
    }

  });
  
  socket.on('text_editor', async ({text, documentName}) => {
    const update =  await updateDocument(documentName, text);

    if(update.modifiedCount) {
      socket.to(documentName).emit('text_editor_clients', text);
    }
  });


  socket.on('delete_document', async (documentName) => {
    const result = await deleteDocument(documentName);

    if(result.deletedCount){
      io.emit("deleted_document_sucess", documentName);
    }
  });
}

export default registerEventsDocument;