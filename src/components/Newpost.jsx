import React,{useContext, useState} from "react";
import BlogContext from "../contexts/Blogcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Newpost=()=>{
    const navigate=useNavigate();
    const {setPosts}=useContext(BlogContext)
    const [newpost,setNewpost]=useState({title:'',body:''});
    const onpostchange=(evt)=>{
setNewpost((val)=>(
    {...val,[evt.target.name]:evt.target.value}
))
    }

//add new post:
const addnewpost=async(evt)=>{
    evt.preventDefault();
      try{
        let newpostobj={title:newpost.title,body:newpost.body,datetime:Date.now()};
    let response=await axios.post('http://localhost:3000/posts',newpostobj);
    if(response.status===201){
     let refreshedPosts = await axios.get('http://localhost:3000/posts');
          setPosts(refreshedPosts.data.payload);
      setNewpost({title:'',body:''});
      navigate('/');
    }
      }catch(err){
    console.log(err);
      }
    }
    return(
       
    <main className="newpost">
        <form onSubmit={addnewpost} className="form">
            <div>
            <input onChange={onpostchange} name="title" value={newpost.title} placeholder="post titile"></input>
            </div>
            <div>
            <textarea rows={10} name="body" onChange={onpostchange} value={newpost.body} placeholder="post article"></textarea>
            </div>
            <div>
            <button type="submit">Create Post</button>
            </div>
        </form>
    </main>
    )
}