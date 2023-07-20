import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./header.scss";

import ContentWrapper from "../contentWraper/Wrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const openSearch =()=>{
      setMobileMenu(false);
      setShowSearch(true);
    }
    const openMobileMenu=()=>{
      setMobileMenu(true);
      setShowSearch(false);
    }
    const searchQueryHandler=(e)=>{
      if(query.length>0 && e.key==="Enter"){
        navigate(`/search/${query}`);
        setTimeout(() => {
          setShowSearch(fasle);
        },1000);
      }
    }

    const navigationHandler=(type)=>{
      if(type==="movie"){
        navigate('/explore/movie');
      }
      else if(type===""){
        navigate('/');
      }
      else{
        navigate('/explore/tv')
      }
      setMobileMenu(false);
    }

    const controlNavbar =()=>{
      if(window.scrollY>200){
        if(window.scrollY>lastScrollY && !mobileMenu){
          setShow("hide");
        }
        else{
          setShow("show")
        }
      }
      else{
        setShow("top");
      }
        setLastScrollY(window.scrollY);
    }
  

    useEffect(()=>{
      window.addEventListener("scroll",controlNavbar);
      return ()=>{
        window.removeEventListener("scroll",controlNavbar);
      }
    },[lastScrollY]);

    useEffect(()=>{
      window.scrollTo(0,0);
    },[location])

    return (
        <header className={`header ${mobileMenu?"mobileView":" "} ${show}`}>
          <ContentWrapper className="contentWrapper">
            <div className="logo" onClick={()=>navigationHandler("")}>
              <img src={logo} alt=" " />
            </div>
            <ul className="menuItems">
              <li className="menuItem" onClick={()=>navigationHandler("movie")}>Movies</li>
              <li className="menuItem" onClick={()=>navigationHandler("tv")}>TV Shows</li>
              <li className="menuItem"><HiOutlineSearch onClick={openSearch}/></li>
            </ul>

           
            <div className="mobileMenuItems">
            <HiOutlineSearch onClick={openSearch}/>
            {mobileMenu? <VscChromeClose onClick={()=>{
              setMobileMenu(false)
            }}/>:<SlMenu onClick={openMobileMenu}/>}
          </div>
            
          </ContentWrapper>
          {showSearch &&
            <div className= "searchBar">
            <ContentWrapper>
            {showSearch&&(<div className="searchInput">
              <input type="text" 
                onKeyUp={searchQueryHandler} 
                onChange={(e)=>setQuery(e.target.value)}
                placeholder='Type here' />
                <VscChromeClose onClick={()=>{setShowSearch(false)}} />
            </div>)}
            </ContentWrapper>
          </div>
          }
          
        </header>
    );
};

export default Header;