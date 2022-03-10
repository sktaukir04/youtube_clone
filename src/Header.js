import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import VideoCall from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className='header'>
            <div className='leftheader'>
                <MenuIcon />
                <Link to='/'>
                    <img
                        className='header_logo'
                        src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                        alt='youtube_logo' />
                </Link>

            </div>

            <div className='header_input'>
                <input onChange={e => { setInputSearch(e.target.value) }} value={inputSearch} placeholder='Search' type={'text'} />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='header_inputbtn' />
                </Link>

            </div>

            <div className='headericons'>
                <VideoCall className='header_icon' />
                <AppsIcon className='header_icon' />
                <NotificationIcon className='header_icon' />
                <Avatar
                    className='header_icon'
                    alt='Shaikh Taukir'
                    src='https://www.google.com/search?q=shaikh+taukir&rlz=1C1SQJL_enIN924IN924&sxsrf=APq-WBt3a1HnB9dJFKwyrQDzXQtop9tOVQ:1646743498799&source=lnms&tbm=isch&sa=X&ved=2ahUKEwikvp_Kxbb2AhUar1YBHUQQC8oQ_AUoAnoECAIQBA&biw=1536&bih=754&dpr=1.25#imgrc=thAzjGMHHAL7mM' />


            </div>


        </div>
    )
}

export default Header