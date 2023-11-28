require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");
const router = require("./routes/notesRouter.js");

// MiddleWares
app.use(express.json());
app.use("/api/", router);

//Connecting to database

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("[+] Connected to Notes Database");

    //Server Running
    app.listen(port, () => {
      console.log("Server has started at http://localhost:" + process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
