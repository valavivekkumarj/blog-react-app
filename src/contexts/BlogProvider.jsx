//note: only shared state and function is defined here.
import React,{useState,useEffect} from "react";
import BlogContext from "./Blogcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BlogProvider=({children})=>{
const navigate=useNavigate();
    const [posts, setPosts] = useState([]);
    const [search,setSearch]=useState('');
    const [searchResult,setSearchResult]=useState([]);
    const [fetcherror,setFetcherror]=useState(null);
    const[loading,setLoading]=useState(true);

    //fetch all posts.
    useEffect(()=>{
      const fetchpost=async()=>{
        try{
          let response=await axios.get('http://localhost:3000/posts');
          if(!response.status==200){
      throw new Error('something went wrong.');
          }
          
          setPosts(response.data.payload);
          setLoading(false);
        }catch(err){
          setFetcherror(err);
          console.log(err);
        }
      }
     setTimeout(() => {
      fetchpost();
     }, 1000);
      },[]);
//filteres search result post from 
useEffect(() => {
  const filteredResults = posts.filter((post) =>
    ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()));
    setSearchResult(filteredResults.reverse());
}, [posts, search]);

 


    const value={setLoading,loading,posts,search,searchResult,setPosts,setSearch,setSearchResult,fetcherror,setFetcherror}
    return(
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    )
}
export default BlogProvider;

