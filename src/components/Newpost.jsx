import React,{useContext, useState} from "react";
import BlogContext from "../contexts/Blogcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStoreState,useStoreActions } from "easy-peasy";
export const Newpost=()=>{
    const newpost=useStoreState((state)=>state.newpost);
    const setNewpost=useStoreActions((actions)=>actions.setNewpost);
    const addnewpost=useStoreActions((actions)=>actions.addnewpost);
    const navigate=useNavigate();
    const {setPosts}=useContext(BlogContext);

    const onpostchange=(evt)=>{
setNewpost((val)=>(
    {...val,[evt.target.name]:evt.target.value}
))
    }

//add new post:
const addposthandler=(evt)=>{
    evt.preventDefault();
    let newpostobj={title:newpost.title,body:newpost.body,datetime:Date.now()};
    addnewpost(newpostobj);
    navigate('/');
}
// const addnewpost=async(evt)=>{
//     evt.preventDefault();
//       try{
//         let newpostobj={title:newpost.title,body:newpost.body,datetime:Date.now()};
//     let response=await axios.post('http://localhost:3000/posts',newpostobj);
//     if(response.status===201){
//      let refreshedPosts = await axios.get('http://localhost:3000/posts');
//           setPosts(refreshedPosts.data.payload);
//       setNewpost({title:'',body:''});
      
//       navigate('/');
//     }
//       }catch(err){
//     console.log(err);
//       }
//     }
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