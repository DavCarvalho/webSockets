import { addDocument, findDocument, getDocuments } from "../db/documentsDb.js";



function registerEventsIndex (socket, io) {
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
}

export default registerEventsIndex;