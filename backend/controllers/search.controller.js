import { User } from "../models/user.model.js"
import { fetch } from "../services/tmdb.js"


const searchTv = async (req ,res) => {
    const {query} = req.params
    const response = fetch( `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`)
    if(response.length ==0){
        return res.status(400).json("empty")
    }

await  User.findByIdAndUpdate(req.user._id , {
    $push :{
        searchHistory :{
            id : response.results[0].id,
            image : response.results[0].poaster_path,
            title : response.results[0].name ,
            searchType : "tv" ,
            createdAt : new Date(),
        }
    }
})
    res.status(201).json({success : true , content : response.results})
}

const searchMovie = async (req ,res) => {
    const {query} = req.params
    const response = fetch( `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`)
    if(response.length ==0){
        return res.status(400).json("empty")
    }

await  User.findByIdAndUpdate(req.user._id , {
    $push :{
        searchHistory :{
            id : response.results[0].id,
            image : response.results[0].poaster_path,
            title : response.results[0].title ,
            searchType : "movie" ,
            createdAt : new Date(),
        }
    }
})
    res.status(201).json({success : true , content : response.results})
}

const searchPerson =async (req ,res) => {
    const {query} = req.params
    const response = fetch( `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`)

    if(response.length ==0){
        return res.status(400).json("empty")
    }

await  User.findByIdAndUpdate(req.user._id , {
    $push :{
        searchHistory :{
            id : response.results[0].id,
            image : response.results[0].profile_path,
            title : response.results[0].name ,
            searchType : "person" ,
            createdAt : new Date(),
        }
    }
})

    res.status(201).json({success : true , content : response.results})
}

const searchHistory = async (req , res) => {
    res.status(201).json({success : true , content : req.user.searchHistory})
}

const removeItemFromSearchHistory = async (req ,res) => {
    const {id} = req.params
}


export {searchMovie ,searchPerson ,searchTv ,searchHistory ,removeItemFromSearchHistory }