import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDowmload = () => {
  return (
    <div className='app-download' id="app-download">
      <p>For Better Experince Download <br/> Tomato App</p>
      <div className="app-downloaf-platform">
      <img src={assets.play_store} alt="" />
      <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDowmload
