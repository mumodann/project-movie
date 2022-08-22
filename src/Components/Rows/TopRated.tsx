import { BsFillPlayFill } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import {
  FiPlus,
  FiThumbsUp,
  FiThumbsDown,
  FiChevronDown,
} from "react-icons/fi";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import "/src/style/Rows.css";

type TopRatedProps = {
  title: string;
  fetchURL: string;
};

export function TopRated({ title, fetchURL }: TopRatedProps) {
  const sliderRef = useRef<any>(null);
  const [movies, setMovies] = useState<
    {
      title: string;
      id: number;
      backdrop_path: string;
      vote_average: number;
    }[]
  >([]);

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
        console.log(movies);
      });
  }, []);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <button onClick={slideLeft} className="scroll__button scroll__left">
        <VscChevronLeft />
      </button>
      <div className="slider" ref={sliderRef}>
        {movies.map((movie) => (
          <div className="card " key={movie?.id}>
            <img
              className="card__poster "
              src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
              alt={movie?.title}
            />
            <div className="card__info">
              <div className="card__controls ">
                <div className="card__info--wrapper">
                  <button className="card__info--button">
                    <BsFillPlayFill />
                  </button>
                  <button className="card__info--button">
                    <FiPlus />
                  </button>
                  <button className="card__info--button">
                    <FiThumbsUp />
                  </button>
                  <button className="card__info--button">
                    <FiThumbsDown />
                  </button>
                </div>
                <div>
                  <button className="card__info--button">
                    <FiChevronDown className="arrow-down" />
                  </button>
                </div>
              </div>

              <h2 className="card__title">{movie?.title}</h2>
              <p className="card__rate">
                {Math.floor(movie?.vote_average * 10)}% Match
              </p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={slideRight} className="scroll__button  scroll__right">
        <VscChevronRight />
      </button>
    </div>
  );
}
