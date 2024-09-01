import React from 'react'
import  {Navbar}  from '../components/navbar.jsx'
import { Play , Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import useGetTrendingContent from '../hooks/trendingcontent.js';
import { MOVIE_CATEGORY, ORIGINAL_IMAGE_BASE_URL, TV_CATEGORY } from '../utils/constants.js';
import { useContentStore } from '../store/content.js';
import {MovieSlider} from '../components/movislider.jsx'

export default function Homescreen() {
 
  const {trendingContent} = useGetTrendingContent();
  const {contentType} = useContentStore();

  return (
  <>
  <div className='relative text-white h-screen'>
    <img src={ORIGINAL_IMAGE_BASE_URL + trendingContent?.backdrop_path} alt="hero img" className='absolute h-full w-full object-cover -z-50' />
    <div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer' />
    <Navbar/>
  <div className='max-w-2xl'>
    <h1 className='flex items-center justify-center mt-72 text-6xl font-extrabold text-balance'>
      {trendingContent?.title || trendingContent?.name}
    </h1>
    <p className='flex items-center justify-center mt-2 mr-56'>
      {trendingContent?.release_date?.split("-")[0] || trendingContent?.first_air_date.split("-")[0]}{""} | {trendingContent?.adult ? "18+" : "PG13" }
    </p>
    <p className='mt-4 ml-48 text-lg'>
     {trendingContent?.overview.lenngth >10 ? trendingContent?.overview.slice(0,10) + "..." : trendingContent?.overview}
    </p>
  </div>
  <div className='flex flex-row ' >
    <Link  to={`/watch/${trendingContent?.id}`} className='flex flex-row items-center justify-center ml-44 mt-3 bg-white text-black w-16 rounded' >
    <Play className='size-6 cursor-pointer fill-black'/>
    Play
    </Link>
    <Link   to={`/watch/${trendingContent?.id}`} className='px-8 py-4  flex flex-row text-bold rounded' >
    <Info className='size-6 cursor-pointer '/>
    More Info
    </Link>
  </div>
  </div>

  <div className='flex flex-col gap-10 bg-black te h-72 py-10 '>
      {contentType === 'movie'? (
        MOVIE_CATEGORY.map((category)=> <MovieSlider key={category} category={category}/>)
      ): (
        TV_CATEGORY.map((category)=> <MovieSlider key={category} category={category}/>)
      )}
  </div>
  </>
  )
}
