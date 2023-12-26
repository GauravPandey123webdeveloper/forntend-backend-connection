const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./Route/route');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect("mongodb+srv://gp0216716:LHcIWYtwiR7BHw6U@cluster0.ylyfx9i.mongodb.net/fullstack?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log("Connection failed", error);
  });

app.use('/', route);

app.listen(process.env.PORT || 8080, () => {
  console.log("Server has started on the port:", process.env.PORT || 8080);
});
