import React from 'react'
import './NewsItem.css'
import '../colorToggle.css';

function NewsItem({title , author , description , imgURL , newsURL , newsDate}) {

    const colors = ['#e5989b','#d62828','#ef476f','#e76f51'];

    return(

        <div className="news-card">
            <div className="style-color" style={{backgroundColor : colors[Math.floor(Math.random() * colors.length)]}}></div>
            <div className="news-img-container">
                <img id="logo" src={imgURL} alt="img" />
            </div>
            <div className="news-card-body">
                <div className="news-card-title">{title}</div>
                <div className="news-details">
                    <p className="news-card-author">{author}</p>
                    <p className="news-card-date">{newsDate}</p>
                </div>
                <p className="news-card-text">{description}</p>
                <a rel="noreferrer" href={newsURL} target="_blank"id="read-more-button">Read More</a>
            </div>
        </div>
        
    )
}

export default NewsItem
