import express from "express";
import {
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/users";

const router = express.Router();

//browsers can only make get request
let users = [];

router.get("/", (req, res) => {
  res.send("List of all users", users);
});

router.post("/", createUser);

router.get("/:id", getUserById);

router.delete("/:id", deleteUser);

//when you want to partially modify something or use put when all fields need to be updated
router.patch("/:id", updateUser);

export default router;
