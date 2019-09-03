const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type,authorization,Access-Control-Request-Headers,access-control-allow-headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});
app.get("/", function (req, res) {
    return res.json({
        message: "UI API!"
    });
});