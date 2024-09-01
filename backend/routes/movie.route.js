import express from "express"
import {getTrendingMovie , getMovieTrailer , getMoviesByCategory} from '../controllers/movie.controller.js'

const router = express.Router()

router.get('/trending' , getTrendingMovie)
router.get('/:id/trailers' , getMovieTrailer)
router.get("/:category", getMoviesByCategory);

export default router ;