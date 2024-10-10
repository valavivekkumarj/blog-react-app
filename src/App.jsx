import React,{useState,useEffect} from 'react';
import { format } from 'date-fns';
import BlogProvider from './contexts/BlogProvider';
import './App.css'
import axios from 'axios'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Nav } from './components/nav'
import { Home } from './components/Home'
import { Newpost } from './components/Newpost'
import { Post } from './components/Post'
import { Postpage } from './components/Postpage'
import { Feed } from './components/Feed'
import { About } from './components/About'
import { BrowserRouter, Route,Routes  } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Editpost } from './components/Editpost';

const App=()=> {
  let navigate=useNavigate();

  


return(

  <div className="container">
  
  <Header />

  <Routes >
   
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Feed' element={<Feed />}/>
    <Route path='/Post' element={<Post/>}/>
    <Route path='/post/:id' element={<Postpage/>}/>
    <Route path='/Newpost' element={<Newpost />}/>
    <Route path='/Editpost/:id' element={<Editpost/>}/> 
       <Route path='*' element={<h4>page not found.</h4>}/>

  </Routes >
  <Footer/>

  </div>
) 
}

export default App;