import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './News.css'
import logo from '../logo.png'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import '../colorToggle.css';

export class News extends Component {
    static defaultProps = {
        category : 'basic'
    }

    static propTypes = {
        category : PropTypes.string
    }

    constructor () {
        super();
        this.state = {
            articles : [],
            loading : false
        }
    }
    async componentDidMount() {
        let url = `https://cyber-news-api.herokuapp.com/${this.props.category}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData , 
                    loading : false})
    }

    render() {
        return (
            <>
                {this.state.loading === true && <Spinner/>}
                <section id="news-section">
                    <div className="news-container">
                    {this.state.articles?.map((element) => {
                        return <div className="news" key={element.id}>
                            <NewsItem title = {element.headlines?element.headlines:""} author = {element.author?element.author:"Unknown"} description = {element.fullNews.length > 200 ? element.fullNews.slice(0 , 200) + '...' : element.fullNews} imgURL = {element.imgToURL?element.imgToURL:logo} newsURL = {element.newsUrl} newsDate = {element.newsDate}/>
                        </div>
                    })}
                    </div>
                </section>
            </>
        )
    }
}

export default News