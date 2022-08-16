import "/src/style/ShowCase.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import "/src/style/ShowCase.css";

export function ShowCase() {
  return (
    <div className="showcase">
      <video autoPlay muted loop id="myVideo">
        <source src="/src/video/trailer.mov" />
      </video>

      <article className="movie">
        <h1 className="movie__title">Squid Game</h1>
        <p className="movie__summary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          voluptates doloribus, commodi voluptate tempore facere eligendi
          reprehenderit impedit molestiae! Excepturi suscipit voluptatibus esse
          vitae illum, quo eius perferendis soluta,
        </p>
        <div className="movie__wrapper">
          <button aria-label="Play">
            {" "}
            <FontAwesomeIcon icon={faPlay} className="icon" />
            &nbsp; Play
          </button>
          <button aria-label="My List">
            <FontAwesomeIcon icon={faPlus} className="icon" />
            &nbsp; My List
          </button>
        </div>
      </article>
    </div>
  );
}
