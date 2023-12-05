import React from 'react'

export default function CategoryCard({data , isLoading}) {
    

  return (
    <>

    {isLoading ? null :     <div data-aos="fade-up" className="container">
    <div className="card " style={{height:"100%" , paddingBottom:"10px" , border:"none"}}>
        <span className='position-absolute top-0 badge round-pill bg-danger'>{data.source.name}</span>
  <img style={{border:"none" , borderRadius:"0px"}} src={data.urlToImage || 'https://images.unsplash.com/photo-1586339949216-35c2747cc36d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'} className="card-img-top" alt="News"/>
  <div className="card-body border">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <p>{data.content}</p>
    <p> <b> Author</b> : {data.author?data.author:'Anonymous'}</p>
    <p className='card-text'><small className='text-muted'> By {data.author || 'Anonymous'} on {new Date(data.publishedAt
).toUTCString()}</small></p>
<a href={data.url} className="btn btn-primary">Read More</a>
  </div>
</div>
    </div>}

    </>
  )
}
