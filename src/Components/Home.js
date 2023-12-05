import React from "react";
import "../css/Home.css";
import TopNewsScrollCard from "./TopNews/TopNewsScrollCard";
import TopStoriesComponent from "../Components/TopNews/TopStoriesComponent";
import { useSelector } from "react-redux";

export default function Home() {
  const { articles , isLoading } = useSelector((state) => {
    return state.TopNews || { articles: [] }; // Initialize to an empty array if state.TopNews is undefined
  });
  console.log(articles)


  // const { data } = useSelector((state) => {
  //   return state.Everynews.data || { data: [] }; // Initialize to an empty array if state.TopNews is undefined
  // });

  // console.log("This is data " + data);

  return (
    <>
    <div  className="text-center">
    {isLoading ? <i style={{marginTop:"200px"}} className="fa-solid fa-spinner fa-8x fa-spin"></i> :null}
    </div>

  

      <div className="container scrollable-box">
        <div className="row">

          {isLoading ? null :<div data-aos="fade-up" className="col-sm-8 py-2">
            {articles.length > 0 ? (
              <div style={{ borderRadius: "0px" , height:"100%" }} className="card text-white">
                <img
                  src={articles[0].urlToImage ? articles[0].urlToImage : 'https://plus.unsplash.com/premium_photo-1661255378914-d0934128d91d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
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
          

          {/* Second Box */}
          <div className="scrollable-box2 p-2 col-sm-4">
            <div className="multi-carousel vertical">
              <div className="multi-carousel-inner">
                {articles.map((data,index)=>{
                  return <div key={index}> <TopNewsScrollCard isLoading={isLoading} data={data}  /></div>
                })}
                
              </div>
            </div>
          </div>

        </div>
      </div>

{/* Top stroies Components */}
      <TopStoriesComponent isLoading={isLoading} />
    </>
  );
}
