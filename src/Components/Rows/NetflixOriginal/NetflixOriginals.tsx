import { useEffect, useState, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BsFillPlayFill } from "react-icons/bs";

import {
  FiPlus,
  FiThumbsUp,
  FiThumbsDown,
  FiChevronDown,
} from "react-icons/fi";

import "/src/style/Rows.css";

type NetflixOriginalsProps = {
  title: string;
  fetchURL: string;
};

export function NetflixOriginals({ title, fetchURL }: NetflixOriginalsProps) {
  const sliderRef = useRef();
  const [movies, setMovies] = useState([]);

  const slideLeft = () => {
    let slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    fetch(fetchURL)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <h2 className="row__title Netflix">{title}</h2>
      <div className="movie__container">
        <button onClick={slideLeft} className="scroll__button scroll__left">
          <HiChevronLeft />{" "}
        </button>
        <div className="slider" ref={sliderRef}>
          {movies.map((item, id) => (
            <div className="card">
              <img
                className="card__poster"
                src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                alt=""
                key={id}
              />
              <div className="movie__info">
                <div className="movie__controls">
                  <div className="movie__icons">
                    <BsFillPlayFill /> <FiPlus /> <FiThumbsUp />{" "}
                    <FiThumbsDown />
                  </div>
                  <div>
                    <button className="movie__info--button">
                      {" "}
                      <FiChevronDown className="arrow-down" />{" "}
                    </button>
                  </div>
                </div>

                <h2 className="movie__title">{item?.title}</h2>
                <p className="movie__rate">
                  {Math.floor(item?.vote_average * 10)}% Match
                </p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={slideRight} className="scroll__button  scroll__right">
          <HiChevronRight />
        </button>
      </div>
    </>
  );
}
