require("dotenv").config();

// Frame work
const express = require("express");
const mongoose = require("mongoose");

// Microservices Routes
const Books = require("./API/Book");
const Authors = require("./API/Author");
const Publications = require("./API/Publication");

// Initializing express
const Booky = express();

// Configurations
Booky.use(express.json());

// Establish Database connection
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log("connection established!!"));

// Initializing Microservices
Booky.use("/book", Books);
Booky.use("/author", Authors);
Booky.use("/publication", Publications);

Booky.listen(3000, () => console.log("Server is running!!"));