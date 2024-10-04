import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Feed } from "./Feed";
export const Home=({data,search,setSearch})=>{



    return(
       <div className="container">

<Header search={search} setSearch={setSearch}/>
<main>
<Feed data={data}/>
</main>
<Footer/>
       </div>
    )
}