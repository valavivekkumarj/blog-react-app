import axios from "axios";
import { createStore,action,thunk,computed } from "easy-peasy";

export default createStore({
    posts:[],
    setPosts:action((state,payload)=>{
        state.posts=payload;
    }),
    newpost:{title:'',body:''},
    setNewpost:action((state,payload)=>{
        state.newpost=payload;
    }),
   
    editpost:null,
    setEditpost:action((state,payload)=>{
        state.editTitle=payload;
    }),
  
    search:'',
    setSearch:action((state,payload)=>{
        state.search=payload;
    }),
    searchResult:'',
    setSearchResult:action((state,payload)=>{
        state.searchResult=payload;
    }),
    fetcherror:null,
    setFetcherror:action((state,payload)=>{
        state.fetcherror=payload;
    }),
    loading:true,
    setLoading:action((state,payload)=>{
        state.loading=payload;
    }),
    postCount:computed((state)=>state.posts.length),
    getPostById:computed((state)=>state.posts.find((post)=>(post.id).toString()===id.toString())),

    addnewpost:thunk(async(actions,newpost,helpers)=>{
        try{
            let response=await axios.post('http://localhost:3000/posts',newpost);
    if(response.status===201){
     let refreshedPosts = await axios.get('http://localhost:3000/posts');
          actions.setPosts(refreshedPosts.data.payload);
          actions.setNewpost({title:'',body:''});
    }
        }catch(err){
                console.log(err.message);
        }
    }),

    //delete post:
    deletePost:thunk(async(actions,id,helpers)=>{
try{
    let response=await axios.delete(`http://localhost:3000/delete/${id}`);
    if(!response.status===200){
throw new Error('something went wrong please try again later.');
  }
  let refreshedPosts = await axios.get('http://localhost:3000/posts');
      actions.setPosts(refreshedPosts.data.payload);
}catch(err){
    console.log(err.message);
}
    })
    
})