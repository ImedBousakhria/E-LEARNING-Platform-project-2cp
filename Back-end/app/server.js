require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());

const cookieParser = require('cookie-parser');




app.use(express.json());
app.use(cookieParser());


const dbURI = 'mongodb+srv://saidilena:password@nom.dsjn9yi.mongodb.net/?retryWrites=true&w=majority';


app.get("/", (req, res) => {
  res.json({ message: "Welcome e-khdem" });
});
mongoose.set({strictQuery: true});
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() =>{
    console.log('DataBase connected...');
    app.listen(process.env.PORT, ()=> {
      return console.log(`Server listening on PORT ${process.env.PORT}...`);
    });
  })
  .catch((err) => console.log(err));



