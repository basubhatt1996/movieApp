import React ,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './heroBanner.scss';
import useFetch from '../../../components/hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImages/img';
import Wrapper from '../../../components/contentWraper/Wrapper';


const HeroBanner = () => {
  const url= useSelector(state=>state.home.url)
  const [background, setBackground]=useState("");
  const [query,setQuery]=useState("");
  const navigate=useNavigate();

  const {data,error,loading}=useFetch('/movie/popular')

  useEffect(()=>{
    const bg=data?.data.results[Math.floor(Math.random() * 20)].backdrop_path
    setBackground(url+'original'+bg)
  },[data])

  
  const searchQueryHandler=(e)=>{
    if(query.length>0 && e.key==="Enter"){
      navigate(`/search/${query}`)
    }
  }
  return (
     <div className="heroBanner">
        <Wrapper>
        <div className="heroSection">
            <span className="title">Welcome</span>
            <span className="subtitle">One destination for searching your favourite movies and tv shows</span>
            <div className="searchInput">
              <input type="text" 
                onKeyUp={searchQueryHandler} 
                 onChange={(e)=>setQuery(e.target.value)}
                 placeholder='Search for movies and tv shows' />
              <button >SEARCH</button>
            </div>
            <div className="opacity-layer"></div>
          </div>
        </Wrapper>
        {!loading && <div className="backdrop-img">
        <Img src={background}/>
      </div>}
     </div>
  )
}

export default HeroBanner