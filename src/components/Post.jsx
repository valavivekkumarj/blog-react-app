import React from "react";

export const Post=({post})=>{
    return(
       <article>
        <h2>{post.title}</h2>
        <p>{post.datetime}</p>
        <p>{post.body}</p>
       </article>
    )
}