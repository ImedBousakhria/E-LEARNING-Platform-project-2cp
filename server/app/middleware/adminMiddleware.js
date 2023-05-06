module.exports.requireAdmin = function (req, res, next){
  //this middleware expects the "user middleware" to be already executed
  
  if(!res.locals.user.isAdmin){
      // res.status(403).json({message: "Admin permission required"});
      res.status(303).redirect('/user/login');
  }else{
      next();
  }
}


// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// // // module.exports.requireAdmin = (req, res, next)=>{
// // //     //this middleware expects the "user middleware" to be already executed
    
// // //     if(!res.locals.User.isAdmin){
// // //         res.status(403).json({message: "Admin permission required"});
// // //         res.status(303).redirect('/user/login');
// // //     }else{
// // //         next();
// // //     }
// // // }

// // // module.exports.requireAdmin = (req, res, next)=>{
// // //   //this middleware expects the "user middleware" to be already executed
  
// // //   if(!req.query.isAdmin === true){
// // //       res.status(403).json({message: "Admin permission required"});
// // //       res.status(303).redirect('/user/login');
// // //   }else{
// // //       next();
// // //   }
// // // }


// // // check if user is an admin
// // module.exports.requireAdmin = async (req, res, next) => {
// //   try {
// //     const user = await User.findById(req.user._id);

// //     if (!user.isAdmin) {
// //       return res.status(403).json({ message: 'Forbidden' });
// //     }

// //     next();
// //   } catch (error) {
// //     console.error(error);
// //     return res.status(500).json({ message: 'Internal Server Error' });
// //   }
// // };


// // module.exports.requireTeacher = (req, res, next) => {
// //     if(res.locals.user.isTeacher){
// //       next();
// //     }else{
// //       res.status(303).redirect('/user/login');
// //     }
// //   };

// // // middleware personnalisé qui vérifie si l'utilisateur est un enseignant ou un admin
// // module.exports.requireTeacherOrAdmin = (req, res, next) =>{
// //   if (req.user && (req.user.isTeacher || req.user.isAdmin)) {
// //     next(); // passer à l'étape suivante (par exemple, le contrôleur de la route)
// //   } else {
// //     res.status(401).json({ message: "Unauthorized" }); // renvoyer une erreur 401 si l'utilisateur n'est pas autorisé
// //   }
// // };



// // adminMiddleware.js
// const requireAdmin = (req, res, next) => {
//   if (req.user.isAdmin) {
//     next();
//   } else {
//     res.status(403).send('Access denied. You are not an admin.');
//   }
// };

// module.exports = { requireAdmin };