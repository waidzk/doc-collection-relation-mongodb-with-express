import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes.js"

const app = express();

//koneksi ke database dengan nama database relation_learning
const mongodb = "mongodb://127.0.0.1:27017/relation_learning";
mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//memanggil connection mongoose
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.on("open", () => console.log("Database connected"));

//MIDDLEWARE
app.use(cors());
app.use(express.json()); //agar kita dapat menerima data dalam format json
//Routes
app.use(apiRoutes);

app.listen(5000, () => console.log("server up and running..."));
