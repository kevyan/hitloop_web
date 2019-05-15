const express = require('express');
// const User = require('./models/User');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require("./routes/user");

const app = express();

mongoose.connect("mongodb+srv://dev1:D7WSlwY1JGrBE1UX@cluster0-c42tk.mongodb.net/hitloop?retryWrites=true")
.then(()=>{
  console.log('connection success');
})
.catch((err)=> {
  console.log('connection failed', err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   res.send('hello from nodemon');
// });

app.use("/api", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.send('success');
  next();
});

app.use("/api/user", userRoutes);
// app.use("/api/user/signup", (req, res, next) => {
//   res.send('hello from nodemon');
//   next();
// });
module.exports = app;
