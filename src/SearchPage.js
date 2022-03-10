import React from 'react'
import './searchpage.css'
import TuneOutLinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
  return (
    <div className='searchpage'>
      <div className='searchpage_filter'>
        <TuneOutLinedIcon/>  
        <h2>Filter</h2>
      </div>  
      <hr/>
      <ChannelRow 
      image="https://i.ytimg.com/vi/--XrIa-iey0/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLDz2fDDJumvMRYTZ2LtqshhdIofdQ"
      Channel="Shaikh Taukir"
      Verified
      subs="100k"
      noOfVideos={56}
      description="You can find multiple videos based on your interest and that to its completely free of cost and bring value to your career by getting the right job through this programming channel"
      
      />
      <hr/>
      <VideoRow 
      views="11.4k"
      subs="100k"
      description="You can find multiple videos based on your interest and that to its completely free of cost and bring value to your career by getting the right job through this programming channel"
      timestamp='59 minutes ago'
      channel='Shaikh Taukir'
      title="Lets Build Projects"
      image="https://i.ytimg.com/vi/--XrIa-iey0/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLDz2fDDJumvMRYTZ2LtqshhdIofdQ"
      />
      <VideoRow 
      views="11.4k"
      subs="100k"
      description="You can find multiple videos based on your interest and that to its completely free of cost and bring value to your career by getting the right job through this programming channel"
      timestamp='59 minutes ago'
      channel='Shaikh Taukir'
      title="Lets Build Projects"
      image="https://i.ytimg.com/vi/--XrIa-iey0/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLDz2fDDJumvMRYTZ2LtqshhdIofdQ"
      />
      <VideoRow 
      views="11.4k"
      subs="100k"
      description="You can find multiple videos based on your interest and that to its completely free of cost and bring value to your career by getting the right job through this programming channel"
      timestamp='59 minutes ago'
      channel='Shaikh Taukir'
      title="Lets Build Projects"
      image="https://i.ytimg.com/vi/--XrIa-iey0/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLDz2fDDJumvMRYTZ2LtqshhdIofdQ"
      />
      <VideoRow 
      views="11.4k"
      subs="100k"
      description="You can find multiple videos based on your interest and that to its completely free of cost and bring value to your career by getting the right job through this programming channel"
      timestamp='59 minutes ago'
      channel='Shaikh Taukir'
      title="Lets Build Projects"
      image="https://i.ytimg.com/vi/--XrIa-iey0/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLDz2fDDJumvMRYTZ2LtqshhdIofdQ"
      />
    </div>
  )
}

export default SearchPage