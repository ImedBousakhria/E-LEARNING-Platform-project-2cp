require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());

const cookieParser = require('cookie-parser');

const userRoute = require('./app/routes/userRoute');
const courseRoute = require('./app/routes/courseRoute');
const discussionRoute = require('./app/routes/discussionRoute');
const notificationRoute = require('./app/routes/notificationRoute');
const assegnmentRoute = require('./app/routes/assegnmentRoute');
// const submissionRoute = require('./app/routes/submissionRoute');
const commentRoute = require('./app/routes/commentRoute');
const quizzRoute = require('./app/routes/quizzRoute');
const scheduleRoute = require('./app/routes/scheduleRoute');
const lessonRoute = require('./app/routes/lessonRoute');

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
  console.log('A user disconnected');
  });
});

app.set('io', io);

app.use(express.json());
app.use(cookieParser());


const dbURI = 'mongodb+srv://saidilena:lena123@e-khdem.dsjn9yi.mongodb.net/?retryWrites=true&w=majority';


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
  app.use(discussionRoute);
  app.use(notificationRoute);
  app.use(assegnmentRoute);
  // app.use(submissionRoute);
  app.use(commentRoute);
  app.use(quizzRoute);
  app.use(scheduleRoute);
  app.use(lessonRoute);

  



