import React from 'react'
import "./Sidebar.css"
import {Avatar} from "@material-ui/core"
import {useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
      const user =  useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://miro.medium.com/max/1400/0*GKIyAWHbKbANm7d9.png" alt="" />
                <Avatar src={user.photoURL} className="sidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
            <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">11</p>
            </div>
            <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">15</p>
            </div>        
                </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem("Reactjs")}
                    {recentItem("Node")}
                    {recentItem("Mongodb")}
                    {recentItem("Nextjs")}
                    {recentItem("Programming")}
                </div>
        </div>
    )
}

export default Sidebar
