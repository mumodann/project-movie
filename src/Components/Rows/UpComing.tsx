import { useEffect, useState, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

type UpComingProps = {
  title: string;
  fetchURL: string;
};

export function UpComing({ title, fetchURL }: UpComingProps) {
  const sliderRef = useRef(null);
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

  const slideLeft = () => {
    let slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="row__title">{title}</h2>
      <div className="movies__wrapper">
        <button onClick={slideLeft} className="scroll__btn--left">
          <HiChevronLeft />{" "}
        </button>
        <div className="slider" ref={sliderRef}>
          {movies.map((item, id) => (
            <img
              src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
              alt=""
              key={id}
            />
          ))}
        </div>

        <button onClick={slideRight} className="scroll__btn--right">
          <HiChevronRight />
        </button>
      </div>
    </>
  );
}
