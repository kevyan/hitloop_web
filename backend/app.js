const express = require('express');
const User = require('./models/User');

const app = express();

app.post("/api/users", (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });
  console.log('user: ', user);
  res.status(201).json({
    message: 'user added!'
  })
})

app.use((req, res, next) => {
  res.send('hello from nodemon');
});

module.exports = app;
