import express from "express";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
