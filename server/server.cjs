require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const { json } = require('express');
app.use(cors());

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


app.use(express.json({ limit: '1000mb' })); // Increase limit to 10 MB
app.use(express.urlencoded({ limit: '1000mb', extended: true }));

const userRoute = require('./app/routes/userRoute');
const courseRoute = require('./app/routes/courseRoute');
// const discussionRoute = require('./app/routes/discussionRoute');
// const notificationRoute = require('./app/routes/notificationRoute');
// const assignmentRoute = require('./app/routes/assignmentRoute');
// const submissionRoute = require('./app/routes/submissionRoute');
// const commentRoute = require('./app/routes/commentRoute');
// const quizzRoute = require('./app/routes/quizzRoute');
// const scheduleRoute = require('./app/routes/scheduleRoute');
const lessonRoute = require('./app/routes/lessonRoute');
const adminRoute = require('./app/routes/adminRoute.js');
const announcementRoute = require('./app/routes/announcementRoute.js');

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
  console.log('A user disconnected');
  });
});

app.set('io', io);
app.use(cors());
app.use(express.json());
app.use(cookieParser());


 // "type": "module",
 const dbURI = 'mongodb+srv://elite:elite@elite.2mfo0dl.mongodb.net/?retryWrites=true&w=majority';



app.get("/", (req, res) => {
  res.json({ message: "Welcome e-khdem" });
});
mongoose.set({strictQuery: true});
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() =>{
    console.log('DataBase connected...');
    app.listen(3000);
  })
  .catch((err) => console.log(err));


  app.use(userRoute);
  app.use(courseRoute);
  // app.use(discussionRoute);
  // app.use(notificationRoute);
  // app.use(assignmentRoute);
  // app.use(submissionRoute);
  // app.use(commentRoute);
  // app.use(quizzRoute);
  // app.use(scheduleRoute);
  app.use(lessonRoute);
  app.use(adminRoute);
  app.use(announcementRoute);
  
    // Set the maximum request body size to 10mb
app.use(bodyParser.json({ limit: '1000mb' }));
app.use(bodyParser.urlencoded({ limit: '1000mb', extended: true, parameterLimit:50000 }));




