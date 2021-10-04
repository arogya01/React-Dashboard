import React from "react";
import "./Users.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Users = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>

          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>

            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">123 4567 45</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">arogya@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Bangalore, india</span>
            </div>
          </div>
        </div>
      </div>

      <div className="userUpdateDetails">
        <span className="userUpdateTitle">Edit</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Username</label>
              <input
                type="text"
                placeholder="annabeck99"
                className="userUpdateInput"
              />
            </div>

            <div className="userUpdateItem">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Anna Becker"
                className="userUpdateInput"
              />
              </div>
              <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="text"
                placeholder="arogya@gmail.com"
                className="userUpdateInput"
              />
              </div>
              <div className="userUpdateItem">
              <label>Phone</label>
              <input
                type="text"
                placeholder="123 456 67"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Address</label>
              <input
                type="text"
                placeholder="Bangalore,India"
                className="userUpdateInput"
              />
            </div>
          
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="userUpdateImg"
              />
              <label htmlFor="file">
                <Publish large className="userUpdateIcon" />
              </label>
              <input
                type="file"
                id="file"
                style={{
                  display: "none",
                }}
              />
            </div>

            <button className="userUpdateButton">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
