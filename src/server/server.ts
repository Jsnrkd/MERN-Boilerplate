import express from "express";
import config from "./config";

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
  res.render("index", {
    initialContent: "Loading!",
  });
});

server.listen(config.PORT, config.HOST, () => {
  console.info(
    `Express server is listening at ${config.SERVER_URL}`,
  );
});
