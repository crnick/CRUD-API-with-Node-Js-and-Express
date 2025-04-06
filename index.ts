import express from "express";
import userRoutes from "./routes/users.ts";
import logger from './middleware/logger.js'


const PORT_NUMBER:number = 5000
const app = express(); //initialize express
const PORT =  PORT_NUMBER || process.env.PORT;

app.use(express.json());
app.use(logger)
app.use("/users", userRoutes); //starting part of this all user routes
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
