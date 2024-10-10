import React from "react";
import { BrowserRouter,Route,Routes,Link, NavLink } from "react-router-dom";
export const Nav=()=>{
    return(
        <nav>
            <ul>
                <li><NavLink to='/' exact='true' className={({isActive})=>(isActive?"nav-link active":"nav-link")} >Home</NavLink></li>
                <li><NavLink to='/Newpost' className={({isActive})=>(isActive?"nav-link active":"nav-link")}>Post</NavLink></li>
               
                <li><NavLink to='/About' className={({isActive})=>(isActive?"nav-link active":"nav-link")} >About</NavLink></li>
            </ul>
        </nav>
    )
}