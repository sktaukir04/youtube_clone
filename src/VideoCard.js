import React from 'react'
import './videocard.css';
import { Avatar } from '@material-ui/core';

function VideoCard({image, title, channel, views, timestamp, channelimage}) {
    
  return (
    <div className='videocard'>
        <img className='videocard_thumbnail' src={image} alt=""/>
        <div className='videocard_info'>
            <Avatar className='videocard_avatar' alt={channel} src={channelimage}/>
            <div className='videocard_text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p> 
                    {views} • {timestamp}
                </p>

            </div>
        </div>
    </div>
  )
}

export default VideoCard