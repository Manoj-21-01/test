import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import taskRoutes from "./routes/tasks.js";

const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(cors());

app.use("/",taskRoutes);

app.get("/", (req,res) => res.send("Hello there"));
app.get("*", (req,res) => res.send("This route doesn't exist"));

app.listen(port, () => 
    console.log(`server is listening on port: http://localhost:${port}`)
);