import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

//browsers can only make get request
let users = [];

router.get("/", (req, res) => {
  res.send("hello", users);
});

router.post("/", (req, res) => {
  const users = req.body;
  const userId = uuidv4();
  const userWithId = { ...users, id: userId };
  users.push(userWithId);
  res.send("User Added successfuly");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(`found user ${foundUser}`);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  // if condition is true user is kept in array otherwise deleted
  users = users.filter((user) => user.id !== id);
  res.send(`user deleted `);
});

//when you want to partially modify something or use put when all fields need to be updated
router.patch("/:id", (req, res) => {
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
});

export default router;
