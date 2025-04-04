//have all the logic for your callbaack function in this particular file
import { v4 as uuidv4 } from "uuid";

//browsers can only make get request
let users = []; //acting as a database for storing user data

export const createUser = (req, res) => {
  const users = req.body;
  const userId = uuidv4();
  const userWithId = { ...users, id: userId };
  users.push(userWithId);
  res.send("User Added successfuly");
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(`Retrieving user ${foundUser}`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  // if condition is true user is kept in array otherwise deleted
  users = users.filter((user) => user.id !== id);
  res.send(`User is deleted`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  res.send(`User info has been updated`);
};
