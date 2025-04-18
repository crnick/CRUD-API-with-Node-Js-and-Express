const express = require("express")
const {
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controllers/users.ts") ;

const router = express.Router();

router.post("/", createUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
