const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String, //it should be a String
    default: null,
  },
  email: {
    type: String,
    required: [true, 'No email address provided'],
    unique: true,
    lowercase: true,
    // validate: [isEmail, 'Invalid email address']
  },
  password: {
    type: String,
    required: [true, 'No password provided'],
    minlength: 8,
  },
  isAdmin: {
    type: Boolean,
    // required: true,
    default: false,
  },
  isTeacher: {
    type: Boolean,
    // required: true,
    default: false,
  },
  isStudent: {
    type: Boolean,
    // required: true,
    default: false,
  },
  // isGerant: {
  //   type: Boolean,
  //   // required: true,
  //   default: true,
  // },
  // isVerified: {
  //   type: Boolean,
  //   // required: true,
  //   default: false,
  // },
  courses: [{
    courseID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses"
    },
    //am not sure about this
    // name: {
    //   type: String,
    //   enum: ["general", "pro", "other"],
    //   default: "general"
    // }
  }]

  // notifications: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Notification'
  // }]

  }, {timestamps: true});
  
  
// function to hash the password before saving it to the database
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt); //"this" refers to the local version of the document (object) before it's saved
  next();
});

// function to hash the password when it's updated before it's saved to the database
userSchema.pre('findOneAndUpdate', async function(next) {
  try {
    const salt = await bcrypt.genSalt();
    
    if(this._update.password) this._update.password = await bcrypt.hash(this._update.password, salt); //"this" refers to the local version of the document (object) before it's saved
    
    next();
  
  } catch (error) {
    res.status(400).json(error);
  }
  
});

// static method to login user ('static' <==> the method is defined on the model and not the instance)
userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password); //hash 'password' and compare it against user.password from the database
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};


const User = mongoose.model("User", userSchema);

module.exports = User;