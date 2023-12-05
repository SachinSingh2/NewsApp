import React from 'react';

export default function TopStoriesCard({ data }) {
  const {
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source: { name },
  } = data;

  return (

    <>
    
    <div className="card" data-aos="fade-up" style={{height:"100%" , paddingBottom:"10px", marginTop:"10px" , border:"none"}}>
<img
style={{height:"200px"}}
  className="card-img-top"
  src={urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
  alt="Card"
/>
      <div className="card-body border">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Source: {name}</p>
        <p className="card-text">Published At: {publishedAt}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>

    
    </>
  );
}
