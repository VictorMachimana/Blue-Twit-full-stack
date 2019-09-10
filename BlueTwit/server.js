const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const path = require("path");

const users = require("./routes/users");
const posts = require("./routes/posts");

//setup environment
dotenv.config();

//mongo db connect
mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true },
  console.log("Server is connected")
);
mongoose.set("useCreateIndex", true);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/posts", posts);

//Serve static assets if in production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// run app
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
