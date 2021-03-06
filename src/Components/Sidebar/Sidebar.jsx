import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  ChatBubbleOutline,
} from "@mui/icons-material";
import {Link} from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidarbarList">
            <Link to='/' className='link'>
            <li className="sidebarListItem  active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>

            
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidarbarList">
            <Link to='/users' className='link'>
            <li className="sidebarListItem
            MailOutline,">
              <PermIdentity className="sidebarIcon" />
              Users
            </li>
            </Link>
            <Link to='/products' className='link'>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Products
            </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
      </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidarbarList">
            <li className="sidebarListItem
            MailOutline,">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
      </div>
    </div>
    </div>
  );
};
