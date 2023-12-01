const jwt = require('jsonwebtoken');

exports.authenticateToken = (req,res,next) => {
    const token=headers.authorization;

    if(!token){
        return res.status(401).json({error:"No se proporcinó un token de"})
    }
    jwt.verify(token, 'secreto', (error,decoded)=>{
        if(error){
            return res.status(401).json({error:"Token invalido"});
        }
        req.userId=decoded.userId;
        next();
    });
};