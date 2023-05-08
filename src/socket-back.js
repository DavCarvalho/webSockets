import { addDocument, deleteDocument, findDocument, getDocuments, updateDocument } from "./documentsDb.js";
import io from "./server.js";

io.on("connection", (socket) => {

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


  socket.on('get_documents', async (returnDocuments) => {
    const documents = await getDocuments();

    returnDocuments(documents);
  });

  socket.on('add_document', async (documentName) => {
    const documentExists = (await findDocument(documentName)) != null;

    if(documentExists){
      socket.emit('document_exist', documentName)
    } else {
      const result = await addDocument(documentName);
  
      if(result.acknowledged){
        io.emit('add_document_interface', documentName);
      }
    }
  });

  socket.on('delete_document', async (documentName) => {
    const result = await deleteDocument(documentName);

    if(result.deletedCount){
      io.emit("deleted_document_sucess", documentName);
    }
  });

  // socket.on('disconnect', (reason) => {
  //   console.log(`Client "${socket.id}" disconnected!
  //   Reason: ${reason}`);
  // });

});


