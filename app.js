import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => {
  //console.log(req);
  res.send("hello from home.");
};

const handleProfile = (req, res) => {
  res.send("you are in profile");
};

const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};

// add midware globally
app.get("/", handleHome);

app.use(cookieParser());
app.use(bodyParser());
app.use(helmet());

// add midware
// app.get("/", betweenHome, handleHome);

app.get("/profile", handleProfile);
app.use("/user", userRouter);

export default app;
