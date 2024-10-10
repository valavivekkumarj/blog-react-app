import React, { useState,useContext } from "react";
import BlogContext from "../contexts/Blogcontext";
import { Feed } from "./Feed";
import Timer from "./DemouseRef";
export const Home=()=>{
const {loading}=useContext(BlogContext);
    return(
     
<>
<Timer/>
<main>
    {loading && <p>loading....</p>}

{!loading && <Feed/>}
</main>
</> 
    )
}