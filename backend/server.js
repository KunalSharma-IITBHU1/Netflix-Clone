import express from "express"
import authRoutes from './routes/auth.route.js'
import movieRoutes from './routes/movie.route.js'
import tvRoutes from './routes/tv.route.js'
import { connectMongoDb } from "./config/db.js"
import cookieParser from "cookie-parser"
import { protectRoute } from "./middleware/protectRoute.js"
import searchRouter from './routes/search.route.js'
import cors from 'cors'



const app = express()
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173' 
}));


app.use('/api/v1/auth' , authRoutes)
app.use('/api/v1/movie' ,protectRoute ,  movieRoutes)
app.use('/api/v1/tv' , protectRoute , tvRoutes)
app.use('/api/v1/search' , protectRoute ,searchRouter)

connectMongoDb()
app.listen(4000 , ()=>{
    console.log("server started at local host")
})



