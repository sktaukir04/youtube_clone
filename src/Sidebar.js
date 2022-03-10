import React from 'react'
import './sidebar.css';
import SidebarRow from './SidebarRow.js';
import HomeIcon from '@material-ui/icons/Home'
import WhatsHotIcon from '@material-ui/icons/Whatshot'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutLinedIcon from '@material-ui/icons/ThumbDownAltOutlined'
import ExpandOutlinedIcon from '@material-ui/icons/ExpandMore'

function Sidebar() {
  return (
    <div className='sidebar'>
    <SidebarRow Icon={HomeIcon} selected title='Home'/>
    <SidebarRow Icon={WhatsHotIcon} title='Trending'/>
    <SidebarRow Icon={SubscriptionIcon} title='Subscription'/>
    <hr/>
    <SidebarRow Icon={VideoLibraryIcon} title='Library'/>
    <SidebarRow Icon={HistoryIcon} title='History'/>
    <SidebarRow Icon={OndemandVideoIcon} title='Your videos'/>
    <SidebarRow Icon={WatchLaterIcon}  title='Watch Later'/>
    <SidebarRow Icon={ThumbUpAltOutLinedIcon} title='Liked Videos'/>
    <SidebarRow Icon={ExpandOutlinedIcon} title='Show more'/>
    </div>
  )
}

export default Sidebar