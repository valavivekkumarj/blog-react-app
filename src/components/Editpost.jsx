import React,{useContext, useEffect,useState} from "react";
import BlogContext from "../contexts/Blogcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export const Editpost=()=>{
    const navigate=useNavigate();
    const [editpost,setEditpost]=useState(null);

    const {posts,setFetcherror,setPosts}=useContext(BlogContext);
    const {id}=useParams();
    useEffect(()=>{
        if(posts.length){
            let data=posts.find((val)=>(val._id).toString()==id.toString());
            if(data){
                setEditpost((val)=>(
                    {...val,title:data.title||'',body:data.body||''}
                ))
            }
        }
    },[posts,id,setEditpost]);
    
   
//edit post:
const EditPost=async(id)=>{
    try{
       
        let editedpost={title:editpost.title,body:editpost.body,datetime:Date.now()}
        let response=await axios.patch(`http://localhost:3000/edit/${id}`,editedpost);
        if(response.status===201){
            let refreshedPosts = await axios.get('http://localhost:3000/posts');
            setPosts(refreshedPosts.data.payload);
        
        navigate(`/post/${id}`);
        }
    }catch(err){
        setFetcherror(err);
        console.log(err);
    }
    }   
   
   const onsubmitform=(evt)=>{
    evt.preventDefault();
    EditPost(id);
    setEditpost({title:'',body:''});
   }
    const onpostchange=(evt)=>{
setEditpost((val)=>(
    {...val,[evt.target.name]:evt.target.value}
))
    }

    if (!editpost) {
        return <div style={{textAlign:'center',marginTop:'2rem'}}>Loading...</div>;  // This ensures editpost is populated before rendering the form
    }
    return(
       
    <main className="newpost">
        <form onSubmit={onsubmitform} className="form">
            <div>
            <input onChange={onpostchange} name="title" value={editpost.title} required></input>
            </div>
            <div>
            <textarea rows={10} name="body" onChange={onpostchange} value={editpost.body} required ></textarea>
            </div>
            <div>
            <button type="submit">Edit Post</button>
            </div>
        </form>
    </main>
    )
}