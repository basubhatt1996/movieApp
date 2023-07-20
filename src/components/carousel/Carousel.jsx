import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import Wrapper from "../contentWraper/Wrapper";
import Img from "../lazyLoadImages/img"
import PosterFallback from "../../assets/no-poster.png";
import './carousel.scss'


export const Carousel =  ({data, loading}) => {
    console.log("the resturning data is :", data);
    const carouselContainer= useRef();
    const {url}= useSelector((state)=>state.home);
    const navigate= useNavigate();
    const navigation=(dir)=>{

    }
  return (
    <div className="carousel">
        <Wrapper>
           <BsFillArrowRightCircleFill
                 className="carouselRightNav arrow"
                  onClick={()=>navigation("right")}
            />
            <BsFillArrowLeftCircleFill
                className="carouselLeftNav arrow"
                onClick={()=>navigation("left")}
            />
            {!loading?( 
               <div className="carouselItems">
               {data?.map((item)=>{
                const posterUrl=item.poster_path?url.poster+item.poster_path:PosterFallback;
                return(   
                       <div 
                       key={item.id} 
                       className="carouselItem">
                           <div className="posterBlock">
                           <Img src={posterUrl} />
                           </div>
                       </div>
                )
               })}
           </div>
            )
            :
            (
               <span>loading</span> 
            )}
        </Wrapper>
    </div>
  )
}