import jwt from "jsonwebtoken"

const secretKey = 'lkclkdknxlj'
const NODE_ENV = 'development'

const generateTokenandsetCookie = (userId ,res)=>{
    const token = jwt.sign({userId} , secretKey , {expiresIn : "2d"})
    res.cookie("token-netflix ",token ,  {maxAge : " 7200000" ,
        httpOnly:true ,
        sameSite : "strict",
        secure: NODE_ENV !== "development",
    });
    return token; 
}

export {generateTokenandsetCookie}; 