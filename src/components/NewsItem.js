import React from 'react'
import './NewsItem.css'
import '../colorToggle.css';

function NewsItem(props) {

    // Extracting information using props
    let {title , author , description , imgURL , newsURL} = props;

    let colors = ['#e5989b','#d62828','#ef476f','#e76f51'];

    return(

            <div className="news-card">
                <div className="style-color" style={{backgroundColor : colors[Math.floor(Math.random() * colors.length)]}}></div>
                <div className="news-img-container">
                    <img id="logo" src={imgURL} alt="img" />
                </div>
                <div className="news-card-body">
                    <div className="news-card-title">{title}</div>
                    <p className="news-card-author">by {author}</p>
                    <p className="news-card-text">{description}</p>
                    <a rel="noreferrer" href={newsURL} target="_blank" id="read-more-button">Read More</a>
                </div>
            </div>
        
    )
}

export default NewsItem
