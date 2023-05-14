import createHashAndSalt from "../utils/createHashAndSalt.js";
import { collectionsUsers } from "./dbConnect.js";


function registerUser({username, password}) {
  const { hashPassword, salt } = createHashAndSalt(password);

  return collectionsUsers.insertOne({
    username,
    hashPassword,
    salt
  });
}

function findUser(username) {
  return collectionsUsers.findOne({ username });
}

export { registerUser, findUser };