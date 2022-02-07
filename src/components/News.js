import React, { useState , useEffect } from 'react'
import NewsItem from './NewsItem'
import './News.css'
import logo from '../logo.png'
import Spinner from './Spinner'
import '../colorToggle.css';


function News({ category }) {

    const [articles , setArticles] = useState([]);

    const [loading , setLoading] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            const url = `https://cyber-news-api.herokuapp.com/${category}`;
            setLoading(true);
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(parsedData);
            setLoading(false);
        }
        fetchNews();
    } , [category]);


    return (
        <>
            {loading === true && <Spinner/>}
            <section id="news-section">
                <div className="news-container">
                {articles?.map((element) => {
                    return <div className="news" key={element.id}>
                        <NewsItem title = {element.headlines?element.headlines:""} author = {element.author?element.author:"Unknown"} description = {element.fullNews.length > 200 ? element.fullNews.slice(0 , 200) + '...' : element.fullNews} imgURL = {element.imgToURL?element.imgToURL:logo} newsURL = {element.newsUrl} newsDate = {element.newsDate}/>
                    </div>
                })}
                </div>
            </section>
        </>
    )
}

export default News;