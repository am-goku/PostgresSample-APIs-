import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express();

const port = 3000;

app.use(express.json())


// importing routers
import studentsRouter from "./src/routers/router.js";

app.get("/", (req, res) => {
  res.send("hello world");
});


app.use('/api/v1/students', studentsRouter)



app.listen(port, () => {
    console.log(`app running on: http://localhost:${port}`);
})