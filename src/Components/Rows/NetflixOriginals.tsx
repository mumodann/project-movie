import { useEffect, useState, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import "/src/style/Rows.css";

type NetflixOriginalsProps = {
  title: string;
  fetchURL: string;
};

export function NetflixOriginals({ title, fetchURL }: NetflixOriginalsProps) {
  const [movies, setMovies] = useState([]);

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
    <>
      <h2 className="row__title netflix">{title}</h2>
      <div className="movies__wrapper">
        <button className="scroll__btn--left">
          <HiChevronLeft />{" "}
        </button>
        <div className="slider">
          {movies.map((item, id) => (
            <img
              src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
              alt=""
              key={id}
            />
          ))}
        </div>

        <button className="scroll__btn--right">
          <HiChevronRight />
        </button>
      </div>
    </>
  );
}
