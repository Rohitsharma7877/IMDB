import React, { useEffect, useState } from "react";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/a41f3039-4c21-42bb-a886-d9a342a02ae9")
      .then((res) => res.json())
      .then((data) => setPopularMovies(data));
  }, []);

  return (
    <div className="poster">
    <div className="posterr">Popular Movies </div>
    
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {popularMovies.map((data) => (
          <Link
            key={data.id}
            style={{ textDecoration: "none", color: "white" }}
            to={`/data/${data.id}`}
          >
            <div className="posterImage">
              <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180' alt='image'/>
                
              
              <div className="posterImage__overlay">
                <div className="posterImage__title"> <FontAwesomeIcon icon={faStar} style={{ color: "#eacb06" }} />
                  <span> <span>{data ? data.avg_vote:""}</span></span>{" "}
                  
                 
                </div><br/>
                <div className="posterImage__runtime">
                  {/* {data ? data.genre:""}{" "} */}
                   {/* className="posterImage__rating"> */}
                    {data ? data.original_title:""}
                  <div/>
                </div>
                
                <div className="posterImage__description">
                  {data ? data.date_published :""}
                  
                </div>
                
                
              </div>
              <button  className="posterImage__button" onClick>+Watchlist</button>
              
            </div>
           
          </Link>
        ))}
      </Carousel>
      
    </div>
  );
};

export default Home;
