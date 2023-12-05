import React from 'react';

export default function NewsCard({ data , isLoading }) {
  if (!data) {
    return null; // Return null if data is not provided
  }

  return (
    <>
    {isLoading ? null : <div  className="card mb-3 " style={{ maxWidth: "540px", borderRadius: "0px" }}>
    <img
    style={{borderRadius:"0px"}}
      className="card-img-top"
      src={data.urlToImage === null  ?  'https://plus.unsplash.com/premium_photo-1661255378914-d0934128d91d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : data.urlToImage }
      alt="Card"
    />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">
              {data.description}
            </p>
            <a target='blank' href={data.url}><button className='btn btn-primary'> Read More</button></a> 
    
            <p className="card-text">
              <small className="text-muted">{data.publishedAt.toLocaleString()}</small>
            </p>
          </div>
        </div>}
        </>
    
  );
}
