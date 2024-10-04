import React from "react";
import { Post } from "./Post";
export const Feed=({data})=>{
    return(
        <>
          {
            data.map((val)=>(
                <Post key={val.id} post={val}/>
            ))
        }
        </>
      
    
    )
}