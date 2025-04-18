const express = require("express")
const userRoutes = require( "./routes/users.ts")
const logger = require("./middleware/logger.js")



const PORT_NUMBER = 5000
const app = express(); //initialize express
const PORT =  PORT_NUMBER || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}))
// app.use(logger())
app.use("/users", userRoutes); //starting part of this all user routes
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

module.exports = app;
