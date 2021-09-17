import React from "react";
import './Topbar.css';
import FlashOnTwoToneIcon from '@material-ui/icons/FlashOnTwoTone';
import {NotificationsNone,Language,Settings} from '@material-ui/icons';
import ProfileImg from '../../Assets/Profile.png';


export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper" >
        <div className="topLeft">
            <FlashOnTwoToneIcon fontSize='large' />
            <p>ReactD</p>
            </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNone fontSize='medium' />
                <span className='topIconBadge'>2</span>
            </div>
            <div className="topbarIconContainer">
                <Language fontSize='medium' />
                <span className='topIconBadge'>2</span>
            </div>
            <div className="topbarIconContainer">
                <Settings fontSize='medium' />
            </div>
            <img src={ProfileImg} alt="Profile" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};
