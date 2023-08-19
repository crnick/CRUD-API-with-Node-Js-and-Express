import express from "express";
import bodyParse from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParse.json());

app.use("/users", userRoutes); //starting part of this all user routes

app.listen(PORT, () => console.log("server is running...!!!"));
