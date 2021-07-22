import React from 'react';
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("This build is very basic","1d ago . 100 readers")}
            {newsArticle("This is a react build","1d ago . 120 readers")}
            {newsArticle("This is not real news","1d ago . 50 readers")}
            {newsArticle("Get vaccinated!","15h ago . 1000 readers")}
            {newsArticle("I got vaccinated","2h ago . 2 readers")}
        </div>
    )
}

export default Widgets
