import React, { Component } from 'react'
import './NewsItem.css'

export class NewsItem extends Component {

    render() {
        // Extracting information using props
        let {title , author , description , imgURL , newsURL} = this.props;

        return (
            <div className="news-card">
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
}

export default NewsItem
