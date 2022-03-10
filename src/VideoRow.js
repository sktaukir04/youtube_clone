import React from 'react'
import './videorow.css'

function VideoRow({views, subs, description, timestamp,channel, title, image}) {
  return (
    <div className='videorow'>
        <img src={image} alt="" />
        <div className='videorow_text'>
        <h3>{title}</h3>
        <p className='videorow_headline'>{channel} • {""}
        <span className='videorow_subs'>
            <span className='videorow_subsno'>
                {subs}
            </span>{" "}
            subscribers 
        </span>{""}
        {views} views • {timestamp}</p>
        <p className='videorow_description'>{description}</p>
        </div>        
    </div>
  )
}

export default VideoRow