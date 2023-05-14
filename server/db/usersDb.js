import createHashAndSalt from "../utils/createHashAndSalt.js";
import { collectionsUsers } from "./dbConnect.js";


function registerUser({user, password}) {
  const { hashPassword, salt } = createHashAndSalt(password);

  return collectionsUsers.insertOne({
    user,
    hashPassword,
    salt
  });
}

function findUser(user) {
  return collectionsUsers.findOne({ user });
}

export { registerUser, findUser };