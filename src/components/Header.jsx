import React from "react";
import { Nav } from "./nav";

export const Header=({search,setSearch})=>{
    return(
        
        <header>
          
           <div className="header-nav">
            <form>
                <input type="text" autoFocus placeholder="search blog here" onChange={(evt)=>setSearch(evt.target.value)} value={search}></input> </form>
                <h3 className="header-title"> React JS Blog</h3>
                <Nav/>
           </div>
        </header>
    )
}