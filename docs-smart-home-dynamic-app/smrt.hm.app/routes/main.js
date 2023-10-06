// The main.js file of your application
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index.html", {
      title: "Djes bad bonda baj",
      heading: "Dynamic header",
    });
  });
  app.get("/about", function (req, res) {
    res.render("about.html");
  });
  app.get("/add-device", function (req, res) {
    res.render("add-device.html");
  });
  app.get("/status-device", function (req, res) {
    res.render("status-device.html");
  });
  app.get("/delete-device", function (req, res) {
    res.render("delete-device.html");
  });
};

// my database name is myhomedevices, my table nema is smartdevices
// CREATE TABLE books (id INT AUTO_INCREMENT, name VARCHAR(50), price DECIMAL(5, 2) unsigned,PRIMARY KEY(id));
