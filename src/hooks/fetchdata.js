//custom hook for fetching data:
import { useState,useEffect } from "react";
import axios from "axios";
function useFetchdata(url){
const [data,setData]=useState(null);
const [loading,setLoading]=useState(true);
const [fetchError,setFetchError]=useState(null);

useEffect(()=>{
    const fetchData=async()=>{
        setLoading(true);
        setFetchError(null);
        try{
let response=await axios.get(url);
if(!response.ok){
    throw new Error(`error occured ${response.status}, ${response.statusText}`)
}
setData(response.data);
        }catch(err){
            setFetchError(err);
        }finally{
            setLoading(false)
        }
    }
    fetchData();
},[url])
return {data,loading,fetchError}
}