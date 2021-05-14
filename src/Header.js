import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://img-premium.flaticon.com/png/512/174/174857.png?token=exp=1621013788~hmac=1c16ca07d69b06964f46132fca48f2c2" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://img-premium.flaticon.com/png/512/808/808439.png?token=exp=1621019443~hmac=ce5b8ede54173a8230d951e232cb9c5b" title='me' />
            </div>
        </div>
    )
}

export default Header
