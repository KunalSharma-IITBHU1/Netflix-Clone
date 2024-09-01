import mongoose from "mongoose"
import { ENV_VAR } from "./env.js"

export const  connectMongoDb =async() =>{

// try {
   
// } catch (error) {
//     console.log(" error occured connecting mongodb")
// }
await mongoose.connect('mongodb+srv://kunalsharmaisfromindia:mY0kyoPnM8isH2x2@cluster0.wekum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
console.log("mongodb connected")
}