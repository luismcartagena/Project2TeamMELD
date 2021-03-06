var db = require("../models");

module.exports = function(app) {
  // Get all reports
  app.get("/search/reports", function(req, res) {
    db.Report.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // get specific report by zipcode
  app.get("/search/zipcode/:zipcode", function(req, res) {
    // console.log(req);
    db.Report.findAll({
      where: {
        zipcode: req.params.zipcode
      }
    }).then(function(data) {
      // console.log(data);
      res.json(data);
    });
  });

  // get specific report by address
  app.get("/search/address/:address", function(req, res) {
    db.Report.findAll({
      where: {
        address: req.params.address
      }
    }).then(function(data) {
      // console.log(data);
      res.json(data);
    });
  });

  // get specific report by city
  app.get("/search/city/:city", function(req, res) {
    db.Report.findAll({
      where: {
        city: req.params.city
      }
    }).then(function(data) {
      // console.log(data);
      res.json(data);
    });
  });

  // get specific report by state
  app.get("/search/state/:state", function(req, res) {
    db.Report.findAll({
      where: {
        state: req.params.state
      }
    }).then(function(data) {
      // console.log(data);
      res.json(data);
    });
  });


  // Create a new report
  app.post("/api/reports", function(req, res) {
    // console.log("in reports(POST)");
    db.Report.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  // Delete an report by id
  app.delete("/api/reports/:id", function(req, res) {
    db.Report.destroy({ where: { id: req.params.id } }).then(function(data) {
      res.json(data);
    });
  });
};
