import React , { useState } from 'react'
import Wrapper from '../../../components/contentWraper/Wrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../components/hooks/useFetch'
import {Carousel}  from '../../../components/carousel/Carousel'
const Trending = () => {
  const [endPoint,setEndPoint]=useState("day");
  const {data,loading}= useFetch(`/trending/all/${endPoint}`)

  const onTabChange=(tab)=>{
    setEndPoint(tab === "Day"?"day":"week" ) 
   }

  return (
    <div className='carouselSection'>
        <Wrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}/>
        </Wrapper>
        <Carousel data={data?.result} loading={loading} />
    </div>
  )
}

export default Trending