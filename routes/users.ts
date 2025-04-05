import express from "express";
import {
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/users.ts";

const router = express.Router();

router.post("/", createUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
