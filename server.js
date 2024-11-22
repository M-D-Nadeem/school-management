import bodyParser from "body-parser";
import dotenv from "dotenv"
import express from "express"
import router from "./routers.js";

const app=express();
dotenv.config();

app.use(bodyParser.json());
app.use("/api",router);

const PORT=process.env.PORT || 3002;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})