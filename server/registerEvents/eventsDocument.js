import { deleteDocument, findDocument, updateDocument } from "../db/documentsDb.js";
import { addConnection, findConnection, getUsersInDocument, removeConnection } from "../utils/documentConnections.js";



function registerEventsDocument(socket, io) {
  socket.on('select_document', async({documentName, nameUser}, returnText) => {
    const document = await findDocument(documentName);
    
    if(document){
      const connectionExist =  findConnection(documentName,nameUser);

      if(!connectionExist){
        socket.join(documentName); //take the client that is connected to this socket and put it in a room with the name of the document.
  
        addConnection({documentName, nameUser});

        socket.data = {
          userEntered: true
        }
  
        const userInDocument = getUsersInDocument(documentName);
  
        io.to(documentName).emit('users_in_document', userInDocument);
  
        returnText(document.text);
      } else {
        socket.emit('user_already_in_document');
      }

    }
    
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

    socket.on('disconnect', () => {
      if(socket.data.userEntered){
        removeConnection(documentName, nameUser);
  
        const userInDocument = getUsersInDocument(documentName);
  
        io.to(documentName).emit('users_in_document', userInDocument);
      }
    });

  });
  
}

export default registerEventsDocument;