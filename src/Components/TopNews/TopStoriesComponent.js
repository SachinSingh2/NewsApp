import React, { useEffect, useState } from 'react';
import TopStoriesCard from './TopStoriesCard';
import { useDispatch, useSelector } from 'react-redux';
import { TopFetchNews } from '../../Redux/slices/TopHeadline';

export default function TopStoriesComponent({isLoading}) {
  const { articles } = useSelector((state) => {
    return state.TopNews;
  });

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TopFetchNews(page));
  }, [page, dispatch]);

  const limit = articles.length;

  const renderData = [...articles].reverse().map((article, index) => {
    return (
      <div key={index} className="col-md-3">
        <TopStoriesCard data={article} />
      </div>
    );
  });
  
  

  return (
    <>

    {isLoading ? null :<div  className="container">
        <h1 style={{ textAlign: "center", margin: "30px 0px", fontSize: "45px", fontWeight: "700", letterSpacing: "2px" }}>TOP STORIES</h1>
        <div className="container">
          <div className="row">
            {renderData}
          </div>
        </div>
        {/* Button container */}
        {}
        <div className="container text-center my-5">
          <button onClick={() => setPage(page - 1)} className='btn btn-primary mx-2' disabled={page === 1}>Previous</button>
          {page}
          <button type="button" onClick={() => setPage(page + 1)} className='btn btn-primary mx-2' disabled={limit < 7}>Next</button>
        </div>
      </div> }
      
    </>
  );
}
