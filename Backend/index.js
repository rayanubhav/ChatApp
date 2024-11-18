import express, { response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import {app,server} from "./SocketIO/server.js";
import path from 'path';
dotenv.config();


app.use(express.json());
app.use(cookieParser());
app.use(cors());



const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

try {
  await mongoose.connect(URI);
  console.log("MONGODB Connected");
} catch (error) {
  console.log(error);
}

app.use("/api/user", userRoute);
app.use("/api/message",messageRoute);


//Code for deployment
if(process.env.NODE_ENV==='production'){
const dirPath=path.resolve();
app.use(express.static(path.join(dirPath,'client/build')));
app.use(express.static('./Frontend/dist'));

app.get('*',(req,res)=>{
  res.sendFile(path.join(dirPath,'./Frontend/dist','index.html'))
})

}

server.listen(PORT, () => {
  console.log(`Example app listening on ${PORT}`);
});
