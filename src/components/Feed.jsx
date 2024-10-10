import React,{useContext,useState,useEffect} from "react";
import { Post } from "./Post";
import BlogContext from "../contexts/Blogcontext";
import { Link } from "react-router-dom";
import axios from "axios";
export const Feed=()=>{
    let {searchResult}=useContext(BlogContext);

  
    return(
        <div className="feed">
          {searchResult.length>0 &&
            searchResult.map((val)=>(
                <Post key={val._id.toString()} post={val}/>
            ))
        }
        {
            searchResult.length<1 && 
            <article className="article">
        
            <h2>No posts found.</h2>
            <p><Link to='/'>Go Back To Home Page.</Link></p>
           
           </article>
        }
        </div>
      
    
    )
}