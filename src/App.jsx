import { useState,useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  {FetchDataFromApi}  from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import homeSlice, { getApiConfguration, getGenres } from './assets/store/homeSlice'

import Error from './pages/404/error'
import Details from './pages/details/details'
import Explore from './pages/explore/explore'
import Home from './pages/home/home'
import SearchResults from './pages/searchResults/searchResults'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    getBaseUrl()},[])

  const getBaseUrl = ()=>{FetchDataFromApi("/configuration")
    .then((res)=>{
      dispatch(getApiConfguration(res.data.images.base_url))
    })
  }
  

  return (
   <BrowserRouter>
    <Header/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='*' element={<Error/>}/>
         <Route path='/:mediaType/:id' element={<Details />}/>
         <Route path='/search/:query' element={<SearchResults/>}/>
         <Route path='/explore/:mediaType' element={<Explore/>} />
      </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
