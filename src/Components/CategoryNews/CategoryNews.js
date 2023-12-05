import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchCategoryNews } from '../../Redux/slices/Category';
import CategoryCard from './CategoryCard';


export default function CategoryNews(props) {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.CategoryNews);

  


  useEffect(() => {
    // Dispatch the action to fetch data when the component first mounts and when the category changes
    dispatch(FetchCategoryNews(props.categ ));
    
  }, [dispatch, props.categ]);






  const articles = data?.articles || []; // Ensure articles array is available

  const render = [...articles].reverse().map((article , index) => {
    return <div className='col-md-4' key={index}>
      <CategoryCard isLoading={isLoading} data={article} />
    </div>;
  });



  return (
    <>

<div className="text-center">
    {isLoading ? <i style={{marginTop:"200px"}} className="fa-solid fa-spinner fa-8x fa-spin"></i> :null}
    </div>




{/* Spinner here */}
    <div className=" container">
          {isLoading ? null :<div data-aos="fade-up" className="col-md-12 py-2">
            {articles.length > 0 ? (
              <div style={{ borderRadius: "0px" , height:"100%" }} className="card text-white">
                <img
                  src={articles[0].urlToImage}
                  className="card-img"
                  alt="Stony Beach"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0",
                    opacity:0.8
                  }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="card-title">{articles[0].title}</h5>
                </div>
              </div>
            ) : (
              null
            )}
          </div> }
    </div>

    <div className="container my-3 ">
      
      {isLoading ? null : <div className="row">
      {render}
      </div>}
 

    </div>

    </>
  );
}
