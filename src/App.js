import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import {Navbar, VideoPreview, NewsFeed, NewReleases, Explore, Content} from './components'
import {Footer} from './containers'

import "./App.css";

const App = () => {
  return (
  <BrowserRouter>
    <div className='App'>

        <Navbar>
        </Navbar>

    <div className='first-Big-Img'>
      <div className='overlay'>
      <VideoPreview/>
    
      <NewsFeed />  
        
     </div>
    </div>

    <NewReleases/> 

    <div className='last-Big-Img'>
        <div className='overlay_two'>


            <div id="Explore"></div>
              <Explore  />
            
            
          

            
         
         
         </div>
    </div>
    <Content />
    <Footer id="footer" />
    </div>
  </BrowserRouter>
  )
}

export default App 