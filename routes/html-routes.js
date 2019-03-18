var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
      });

    app.get("/about", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/html/about.html"));
    });

    app.get("/portfolio", function(req, res){
      res.sendFile(path.join(__dirname, "../public/html/portfolio.html"))
    })
};
