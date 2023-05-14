import { collectionsDocuments } from './dbConnect.js';

function findDocument(name){
  const document = collectionsDocuments.findOne({
    name
  });

  return document;
}

function updateDocument(name, text){
  const update = collectionsDocuments.updateOne(
    {
      name,
    },
    {
      $set: {
        text,
      },
    }
  );

  return update;
}

function getDocuments(){
  const documents = collectionsDocuments.find().toArray();
  return documents;
}

function addDocument(name){
  const result = collectionsDocuments.insertOne({
    name,
    text: ""
  });

  return result;
}

function deleteDocument(name){
  const result = collectionsDocuments.deleteOne({
    name
  });;

  return result;
}

export { findDocument, updateDocument, getDocuments, addDocument, deleteDocument};