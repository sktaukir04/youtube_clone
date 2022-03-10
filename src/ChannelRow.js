import React from 'react'
import './channelrow.css'
import { Avatar } from '@material-ui/core'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'

function ChannelRow({image, Channel, Verified, subs, noOfVideos, description}) {
  return (
    <div className='channelrow'>
        <Avatar className='channelrow_logo' alt={Channel} src={image}/>
        <div className='channelrow_text'>
            <h4>{Channel} {Verified && <VerifiedIcon/>} </h4> 
            <p>{subs} subscribers • {noOfVideos} videos</p>   
            <p>{description}</p>
        </div>

        
    </div>
  )
}

export default ChannelRow