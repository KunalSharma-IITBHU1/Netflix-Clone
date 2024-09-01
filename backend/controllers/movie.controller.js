import { fetch } from "../services/tmdb.js"

const getTrendingMovie = async (req ,res)=>{
try {
    const data = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US")
    const randommovie = data.results[Math.floor(Math.random()*data.results?.length)];
    res.json({success : true , content : randommovie})
} catch (error) {
    res.status("failed uploading movies")
}
}

const getMovieTrailer = async (req ,res)=>{
    const {id} = req.params.id;
// try {
//     const data = await fetch('https://api.themoviedb.org/3/movie/${id}/videos?language=en-US')
//     res.json({message :'successfully uploaded trailers' , trailers : data.results})
// } catch (error) {
//     res.json("internal server error")
const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
    res.json({message :'successfully uploaded trailers' , trailers : data.results})
// }
}

const getMoviesByCategory= async (req, res)=> {
	const { category } = req.params;
	try {
		const data = await fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
		res.status(200).json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export {getTrendingMovie , getMovieTrailer , getMoviesByCategory}