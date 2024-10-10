import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
export const Post=({post})=>{
    return(
<Link to={`/post/${post._id}`} key={post._id}>
       <article className="article">
        
        <h2>{post.title}</h2>
        <p>{format(post.datetime,'MMMM dd, yyyy pp')}</p>
        <p>{(post.body).length<25?post.body:`${(post.body).slice(0,25)}....`}</p>
       </article>
       </Link>
    )
}