import React from 'react'
import "./Sidebar.css"
import {Avatar} from "@material-ui/core"

function Sidebar() {
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
                <Avatar className="sidebar__avatar"/>
                <h2>Vishnu S Mani</h2>
                <h4>vishnutuchanathe@gmail.com</h4>
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
