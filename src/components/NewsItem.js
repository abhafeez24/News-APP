import React from "react";

const NewsItem = (props) =>  {
  
    let { title, description, imageUrl, newsUrl , author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">
            <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:"0"}}>
              <span className="badge rounded-pill bg-danger" >
                {source}
              </span>
            </div>
          <img src={imageUrl} className="card-img-top" alt="..."/>
            <h5 className="card-title px-3 pt-3">{title}</h5>
            <p className="card-text px-3">{description}</p>
            <p className="card-text px-3"><small className=" text-danger">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer"  className="btn btn-sm btn-dark" style={{width:'100px'}}>
              Read More
            </a>
          
        </div>
      </div>
    );
  
}

export default NewsItem;
