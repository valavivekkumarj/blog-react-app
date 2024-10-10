import React,{useState,useContext} from "react";
import { Nav } from "./nav";
import BlogContext from "../contexts/Blogcontext";
import useWindowsize from "../hooks/windowsize";
export const Header=()=>{
    const {search,setSearch}=useContext(BlogContext);
    const width=useWindowsize();
    return(
        
        <header>
          
           <div className="header-nav">
            <form >
                <input type="text" autoFocus placeholder="search blog here" onChange={(evt)=>setSearch(evt.target.value)} value={search}></input> </form>
                <h3 className="header-title"> React JS Blog width={width} </h3>
                <Nav/>
           </div>
        </header>
    )
}