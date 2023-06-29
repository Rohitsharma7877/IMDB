import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = ({ banners }) => {
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 4000); // Change the slide interval time as desired (in milliseconds)

    return () => {
      clearInterval(slideInterval);
    };
  }, []);


  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const currentBanner = banners[activeIndex];

  return (
    <div className="banner-carousel">
      {/* <div
        className="slider"
        style={{
          width: `${banners.length * 100}%`,
          transform: `translateX(-${activeIndex * (100 / banners.length)}%)`
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? "active" : ""}`}
            style={{ width: `${100 / banners.length}%` }}
          >
            <img src={banner.image} alt={banner.caption} />
            <div className="caption">{banner.caption}</div>
          </div>
        ))}
      </div> */}
      <div className="controls">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={currentBanner.image}
          alt={currentBanner.caption}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={currentBanner.image}
              alt={currentBanner.caption}
            />
            <div className="caption">{currentBanner.caption}</div>
          </div>
        </div>
        {/* <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie__tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i class="fas fa-star" />
              <span className="movie__voteCount">
                {currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}
            </div>
            <div className="movie__genres">
              {currentMovieDetail && currentMovieDetail.genres ? (
                currentMovieDetail.genres.map((genre) => (
                  <span className="movie__genre" key={genre.id}>{genre.name}</span>
                ))
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
