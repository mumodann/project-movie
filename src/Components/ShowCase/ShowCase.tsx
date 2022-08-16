import "/src/style/ShowCase.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import "/src/style/ShowCase.css";

export function ShowCase() {
  return (
    <div className="showcase">
      <div className="wrapper">
        <video controls autoPlay loop id="myVideo">
          <source src="/src/Components/Assets/video/trailer.mp4" />
        </video>
      </div>
      <article className="movie">
        <h1 className="movie__title">The Lion King </h1>
        <p className="movie__summary">
          Simba idolizes his father, King Mufasa, and takes to heart his own
          royal destiny. But not everyone in the kingdom celebrates the new
          cub's arrival. Scar, Mufasa's brother and former heir to the throne
          has plans of his own. The battle for Pride Rock is ravaged with
          betrayal, tragedy and drama, ultimately resulting in Simba's exile.
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
