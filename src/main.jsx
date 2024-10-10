import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import BlogProvider from './contexts/BlogProvider.jsx'
import { StoreProvider } from 'easy-peasy';
import store from './components/easy-peasy/store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider store={store}>
     <BrowserRouter>
   
   
  <App/>
  
    
    </BrowserRouter>
  </StoreProvider>
  </StrictMode>
)
