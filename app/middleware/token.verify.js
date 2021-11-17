const jwt = require('jsonwebtoken');
// const db = require('../config/config');

function verifyToken(req, res, next) {
    var token
    if (!req.headers['x-access-token'] || !req.headers['authorization']) {
        return res.json({
            success: false,
            message: "No token provided."
        })
    }
    // console.log("token===>",req.headers['x-access-token']);
    if (req.headers['x-access-token']) {

        token = req.headers['x-access-token'];
        // console.log("token===>",req.headers['x-access-token']);
    }
    else {
        token = req.headers['authorization'].split('Bearer')[1].trim();
    }
    console.log(token);
    if (!token)
        return res.json({ success: false, message: 'No token provided.' });
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err)
            return res.json({ success: false, message: 'Authentication failed' });
        // if everything good, save to request for use in other routes
        req.userId = decoded.id;
        next();
    });
}

// // verify token for update device token

// function verifyTokenForDevice(req, res, next) {
//     var token
//     if(!req.headers['x-access-token']){
//         return res.json({
//             success:false,
//             message: "No token provided."
//         })
//     }
//     // console.log("token===>",req.headers['x-access-token']);
//     if(req.headers['x-access-token']){

//          token = req.headers['x-access-token'];
//           // console.log("token===>",req.headers['x-access-token']);
//     }
//     else{
//          token = req.headers['authorization'].split('Bearer')[1].trim();
//           console.log("token2===>",req.headers['authorization'].split('Bearer '));
//     }
//     console.log(token);
//     if (!token)
//         return res.json({ success: false, message: 'No token provided.' });
//     jwt.verify(token, process.env.SECRET, function (err, decoded) {
//         if (err){
//             db.registration.update({
//                 device_token:""
//             },{
//                 where:{
//                     id:req.body.user_id
//                 }
//             }).then(update=>{
//                 return res.json({ success: false, message: 'Authentication failed' });
//             })
//         }else{
//             // if everything good, save to request for use in other routes
//         req.userId = decoded.id;
//         next();
//         }


//     });
// }


module.exports = verifyToken;