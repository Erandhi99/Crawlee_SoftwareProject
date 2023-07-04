import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import coursesRoute from "./routes/courses.js";
import imageRoute from "./routes/imageRoutes.js"
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnect", () => {
  console.log("Disconnected from mongoDB.");
});

//middleware
app.use(
  cors({
     origin: ["http://localhost:3000"], //requests originating from http://localhost:3000 are allowed to access the server's resources
     credentials: true, //This indicates that the server is willing to accept and send cookies as part of cross-origin requests.
     
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/courses", coursesRoute);
app.use("/api/images", imageRoute);



app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend server!");
});
