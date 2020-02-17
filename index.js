import express from "express";
const app = express();
const PORT = 4000;

const handlerListening = () => {
  console.log(`Listening on : http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  console.log(req);
  res.send("hello from home.");
};

const handleProfile = (req, res) => {
  res.send("you are in profile");
};

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handlerListening);
