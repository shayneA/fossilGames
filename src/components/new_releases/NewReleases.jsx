import React from 'react'
import './new_releases.css'
import Slider from "../Slider/slider"
import dataSlider from "../Slider/dataSlider"

const NewReleases = () => {
  return (
    <div className='newReleases-container' id='NewReleases'>
      <h2 className='title'>New Releases</h2>
      <Slider slides={dataSlider} />
      <p className='border-bottom'></p>
    </div>
  )
}

export default NewReleases