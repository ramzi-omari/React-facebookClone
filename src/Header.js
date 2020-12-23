import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import FlagIcon from "@material-ui/icons/Flag"
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined"
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined"
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle"


function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                alt=""></img>
                <div className="header__input">
                    <SearchIcon></SearchIcon>
                    <input type="text"></input>
                </div>
            </div>


            <div className='header__middle'>
                <div className="header__option">
                    <HomeIcon fontSize="large"></HomeIcon>
                </div>
            </div>
                
            <div className="header__right"></div>
            
        </div>
    )
}

export default Header
