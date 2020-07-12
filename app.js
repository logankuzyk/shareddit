var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("express-handlebars");

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");

var app = express();

// view engine setup
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "site/layout",
    layoutsDir: __dirname + "/views",
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/r", apiRouter);

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
  res.render("error", {
    title: "shareddit: error",
    body: err.status + " - that's an error",
  });
});

module.exports = app;
