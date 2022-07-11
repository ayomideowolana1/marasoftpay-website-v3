const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("landingpage");
});

router.get("/merchant-service-agreement", (req, res) => {
  res.render("merchant-service-agreement");
});

router.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy");
});

router.get("/terms-of-service", (req, res) => {
  res.render("terms-of-service");
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
