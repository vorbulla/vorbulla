const express = require("express");
const next = require("next");
const path = require("path");
const url = require("url");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const mongoSanitize = require("express-mongo-sanitize");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8080;

const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const contact = require("./routes/contact");

nextApp.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(mongoSanitize());

  server.use("/api/v1/contact", contact);

  server.get("*", (req, res) => {
    // res.set({
    //   'Cache-Control': 'public, max-age=3600'
    // });
    const parsedUrl = url.parse(req.url, true);
    nextHandler(req, res, parsedUrl);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on http://localhost:${port}`);
  });
});
