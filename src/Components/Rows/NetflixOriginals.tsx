import { BsFillPlayFill } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import { FiPlus, FiChevronDown } from "react-icons/fi";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import "/src/style/Rows.css";

type NetflixOriginalProps = {
  title: string;
  fetchURL: string;
};

export function NetflixOriginals({ title, fetchURL }: NetflixOriginalProps) {
  const sliderRef = useRef<any>(null);
  const [movies, setMovies] = useState<
    {
      original_name: string;
      id: number;
      poster_path: string;
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
      <h2 className="row__title netflix">{title}</h2>
      <button
        onClick={slideLeft}
        className="scroll__button netflix scroll__left"
      >
        <VscChevronLeft />
      </button>
      <div className="slider" ref={sliderRef}>
        {movies.map((movie) => (
          <div className="longCard " key={movie?.id}>
            <img
              className="longCard__poster "
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt={movie?.original_name}
            />
            <div className="longCard__info">
              <div className="longCard__controls ">
                <div className="longCard__info--wrapper">
                  <button className="longCard__info--button">
                    <BsFillPlayFill />
                  </button>
                  <button className="longCard__info--button">
                    <FiPlus />
                  </button>
                </div>
                <div>
                  <button className="longCard__info--button">
                    <FiChevronDown className="arrow-down" />
                  </button>
                </div>
              </div>

              <h2 className="longCard__title">{movie?.original_name}</h2>
              <p className="longCard__rate">
                {Math.floor(movie?.vote_average * 10)}% Match
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={slideRight}
        className="scroll__button netflix  scroll__right"
      >
        <VscChevronRight />
      </button>
    </div>
  );
}
