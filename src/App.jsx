import React,{useState,useEffect} from 'react';
import { format } from 'date-fns';

import './App.css'
import { Nav } from './components/nav'
import { Home } from './components/Home'
import { Newpost } from './components/Newpost'
import { Post } from './components/Post'
import { Postpage } from './components/Postpage'
import { Feed } from './components/Feed'
import { About } from './components/About'
import { BrowserRouter, Route,Routes  } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

const App=()=> {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ]);
const [search,setSearch]=useState('');
const [searchResult,setSearchResult]=useState([]);
const [posttitle,setPosttitle]=useState('');
const [postbody,setPostbody]=useState('');

useEffect(() => {
  const filteredResults = posts.filter((post) =>
    ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResult(filteredResults.reverse());
}, [posts, search]);


return(
  <BrowserRouter>
  <Routes >
   
    <Route path='/' element={<Home data={searchResult} search={search} setSearch={setSearch}/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Feed' element={<Feed />}/>
    <Route path='/Post' element={<Post/>}/>
    <Route path='/Postpage' element={<Postpage/>}/>
    <Route path='/Newpost' element={<Newpost/>}/>
    <Route path='*' element={<h4>page not found.</h4>}/>

  </Routes >
  </BrowserRouter>
) 
}

export default App;