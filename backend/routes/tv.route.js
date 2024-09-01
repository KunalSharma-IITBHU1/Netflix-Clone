import express from "express"
import { getTrendingTv ,getTvTrailer , getTvsByCategory} from "../controllers/tv.controller.js"
const router = express.Router()

router.get('/trending' , getTrendingTv)
router.get('/:id/trailers' , getTvTrailer)
router.get("/:category", getTvsByCategory);

export default router ;