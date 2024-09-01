import { fetch } from "../services/tmdb.js";

const getTrendingTv = async (req , res)=>{
    try {
        const data = await fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US")
        const randommovie = data.results[Math.floor(Math.random()*data.results?.length)];
        res.json({success : true , content : randommovie})
    } catch (error) {
        res.status("failed uploading movies")
    }
}

const getTvTrailer = async (req , res)=>{
    const {id} =req.params;
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
    res.json({message :'successfully uploaded trailers' , trailers : data.results})
}
const getTvsByCategory = async(req, res)=> {
	const { category } = req.params;
	try {
		const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);
		res.status(200).json({ success: true, content: data.results });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export {getTrendingTv , getTvTrailer ,getTvsByCategory}