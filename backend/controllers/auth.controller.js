import { generateTokenandsetCookie } from '../config/generateToken.js';
import { User } from '../models/user.model.js';
import bcyprjs from "bcryptjs"

async function Signup(req ,res){

   // try {
      

   // } catch (error) {
   //    res.status(500).json({message:"internal server error"})
   // }
   const {email , password , username} = req.body;

 if(!email || !password || !username){
  return res.status(400).json("all feilds are required")
 }

 if(password.length <6){
  return res.status(400).json({message:"password must be at least 6"})
 }


 const existingUserbyEmail = await User.findOne({email:email})
 if(existingUserbyEmail){
  return res.status(400).json({message:"email is already existing"})
 }
 const existingUserbyUsername = await User.findOne({username: username})
 if(existingUserbyUsername){
  return res.status(400).json({message:"username is already existing"})
 }

const salt = await bcyprjs.genSalt(10);
const hashedPassword = await bcyprjs.hash(password , salt);

 const newUser = new User({
    email,
    password : hashedPassword,
    username
  });


    generateTokenandsetCookie(newUser._id , res)
    await newUser.save();
    res.status(201).json({
      success:true ,
      user :{
         ...newUser.doc_,
         password :"",
      },
    });
  
 
}





async function Login(req ,res){
try {
   const {email , password }=req.body
   if(!email || !password ){
      return res.status(400).json("all feilds are required")
     }
     const user = await User.findOne({email:email})
     if(!user) {
      return res.status(200).json("invalid credentials")
     }
 
     const isPasswordCorrect = await bcyprjs.compare(password ,user.password)
     if(!isPasswordCorrect) {
      return res.status(200).json("invalid password")
     }
 
     generateTokenandsetCookie(user._id , res)
     
     res.status(201).json({
       success:true ,
       user :{
          ...User.doc_,
          password :"",
       },
     });
} catch (error) {
   res.status(400).json("invalid login")
}
 
}

async function Logout(req ,res){
   try {
    res.clearCookie("token-netflix")
      res.status(200).json({message:"logout successfully"})
   } catch (error) {
      res.status(500).json("failed logout")
   }
}

async function AuthCheck(req ,res) {
   try {
      res.status(201).json({success : true , user : req.user})
   } catch (error) {
      res.status(500).json("internal error")
   }
}

export {Signup , Login ,Logout , AuthCheck}