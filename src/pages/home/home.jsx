import React from 'react'
import './home.scss'
import HeroBanner from './heroBanner/heroBanner.jsx'
import Trending from './trending/Trending'
function Home() {
  return (
    <div  className='homePage'>
        <HeroBanner/>
        <Trending />
    </div>
  )
}

export default Home