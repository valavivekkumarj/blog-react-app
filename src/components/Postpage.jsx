import React,{useContext,useState} from "react";
import { useParams,Link } from "react-router-dom";
import BlogContext from "../contexts/Blogcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Postpage=()=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const {posts,setPosts}=useContext(BlogContext);
    let data=posts.find(val=>(val._id).toString()===id.toString());

    if (!data) {
        return <div style={{textAlign:'center',marginTop:'2rem'}}>Loading...</div>;  // This ensures editpost is populated before rendering the form
    }
    
const deletePost=async(id)=>{
    try{
      let response=await axios.delete(`http://localhost:3000/delete/${id}`);
      if(!response.status===200){
  throw new Error('something went wrong please try again later.');
    }
    let refreshedPosts = await axios.get('http://localhost:3000/posts');
        setPosts(refreshedPosts.data.payload);
  navigate('/');
    }catch(err){
      console.log(err);
    }
  }
    return(
       <main >
        {data &&  
        <article className="postpage" style={{width:'100%'}}>
        <h2>{data.title}</h2>
        <p>{data.datetime}</p>
        <p  >{data.body}</p>
        <button onClick={()=>deletePost(data._id)}>Delete Post</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={()=>navigate(`/editpost/${id}`)}>Edit Post</button>
        </article>
        }

        {
            !data &&
            <article>
                <h2>post not found</h2>
                <p>well, that disapointing.</p>
                <p>
                    <Link to='/'>Go Back To Home Page.</Link>
                </p>
            </article>
        }
       
       </main>
    )
}