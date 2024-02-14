import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  }

  const updateNews = async() => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    
    props.setProgress(100)
  }

 
  useEffect(() => {
    updateNews();
  }, [])

  const handleNextClick = async () => {
   
    if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
      setPage(page + 1)
      updateNews();
    }
  };
  const handlePreClick = async () => {
    setPage(page -1 )
    updateNews();
  };

  const fetchMoreData =  async () => {
    setPage(page +1)
    //updateNews()
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    

    let data = await fetch(url);
    let parsedData = await data.json();
    
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    
  };


    return (
      <>
        <h1 className="text-center my-3">News Monkey- Top Headlines on {capitalizeFirstLetter(props.category)}</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
        <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={  element.urlToImage? element.urlToImage : "https://media.wired.com/photos/5b17381815b2c744cb650b5f/master/w_2560%2Cc_limit/GettyImages-134367495.jpg"
                  }
                  newsUrl={element.url} author = {element.author?element.author:'unknown'} date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
              
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        
        </>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: 'general'
}

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
}


export default News;
