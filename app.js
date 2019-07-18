"use strict";

var express = require("express");

var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var sm = require("sitemap");

var index = require("./routes/index");
var users = require("./routes/users");

var app = express();

var sitemap = sm.createSitemap ({
  hostname: "http://philippebeck.net",
  cacheTime: 6000000,
  urls: [
    { url: "/", changefreq: "weekly", priority: 0.5 }
  ]
});

app.get("/sitemap.xml", function(req, res) {
  sitemap.toXML( function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header("Content-Type", "application/xml");
      res.send(xml);
  });
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/users", users);

app.use(function(req, res, next) {
  var err = new Error("Page introuvable !");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
