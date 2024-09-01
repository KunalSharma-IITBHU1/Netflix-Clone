import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"


const secretKey = 'lkclkdknxlj'
const protectRoute = async (req ,res ,next) => {
    const token = req.cookies["token-netflix"]
    if(!token){
       return res.json({message:"not found cookie"})
    }
    const decoded = jwt.verify(token , secretKey);
    if(!decoded){
      return  res.json({message:"not decoded"})
    }

    const user = await User.findById(decoded.userId).select("-password")
    if(!user){
        return  res.json({message:"not any user"})
    }

    req.user =user;
    next();
}
export {protectRoute};