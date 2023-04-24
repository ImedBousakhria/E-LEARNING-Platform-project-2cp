const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports.requireAdmin = (req, res, next)=>{
    //this middleware expects the "user middleware" to be already executed
    
    if(!res.locals.user.isAdmin){
        // res.status(403).json({message: "Admin permission required"});
        res.status(303).redirect('/user/login');
    }else{
        next();
    }
}

// module.exports.requireGerant = (req, res, next) => {
//   if(res.locals.user.isGerant){
//     next();
//   }else{
//     res.status(303).redirect('/user/login');
//   }
// };

module.exports.requireTeacher = (req, res, next) => {
    if(res.locals.user.isTeacher){
      next();
    }else{
      res.status(303).redirect('/user/login');
    }
  };

// middleware personnalisé qui vérifie si l'utilisateur est un enseignant ou un admin
module.exports.requireTeacherOrAdmin = (req, res, next) =>{
  if (req.user && (req.user.isTeacher || req.user.isAdmin)) {
    next(); // passer à l'étape suivante (par exemple, le contrôleur de la route)
  } else {
    res.status(401).json({ message: "Unauthorized" }); // renvoyer une erreur 401 si l'utilisateur n'est pas autorisé
  }
};
