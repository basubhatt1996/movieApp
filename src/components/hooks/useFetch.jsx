import {useEffect,useState} from 'react'
import { FetchDataFromApi } from '../../utils/api'

const useFetch = (url) => {
  const [loading,setLoading]=useState(null);
  const[data,setData]=useState(null);
  const [error,setError]=useState(null);

  useEffect(()=>{
    setLoading("Loading ...");
    setData(null);
    setError(null);

    FetchDataFromApi(url)
    .then((res)=>{
        setData(res)
        setLoading(null)
    })
    .catch(e=>{
        setLoading(null);
        setError("Something went wrong :( ")
    })
    
  },[url])
return {data,loading,error}
}


export default useFetch