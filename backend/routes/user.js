const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const User = require("../models/user");
router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
      // username: req.body.username
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          failed: 'failed at save',
          error: err
        });
      });
  });
});

module.exports = router;

