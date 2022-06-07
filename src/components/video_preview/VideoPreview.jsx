import React from 'react'
import './video_preview.css'
import Video from "../../assets/What_is_the_Predator_X.mp4"

const playVideo = Video 

const VideoPreview = () => {
  return (
    <div id='VideoPreview'>
      <div className='video-player'>
              <video 
              src={playVideo}
              poster='..../src/assets/Animated-Tiranosaurus-Rex-unsplash.jpg' 
              className='Video'
              controls muted
              autoPlay="autoplay"
              loop={true}
              /> 
      </div>
    </div>
  )
}

export default VideoPreview