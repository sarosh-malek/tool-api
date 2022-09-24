require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./routes/users");
const pageRouter = require("./routes/pages");

const bootstrape = async () => {
  mongoose.connect(process.env.DB_URL, { dbName: "tool" });

  var app = express();
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(cors());
  app.use("/page", pageRouter);
  app.use("/user", userRouter);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT} 🚀`);
  });
};

bootstrape().catch((err) => console.log(err));
