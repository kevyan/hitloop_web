const express = require('express');
const User = require('./models/User');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const app = express();

mongoose.connect("mongodb+srv://dev1:D7WSlwY1JGrBE1UX@cluster0-c42tk.mongodb.net/test?retryWrites=true")
.then(()=>{
  console.log('connection success');
})
.catch((err)=> {
  console.log('connection failed', err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
