import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IoVolumeMediumOutline, IoVolumeOffOutline } from "react-icons/io5";
import "/src/style/ShowCase.css";
import ReactPlayer from "react-player";

export function ShowCase() {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className="showcase">
      <div className="wrapper">
        <ReactPlayer
          playing={true}
          loop={true}
          volume={1}
          muted={isMuted}
          className="video"
          width="100%"
          height="100%"
          url="/src/Components/Assets/video/trailer.mp4"
        />
        {isMuted ? (
          <button onClick={() => setIsMuted(false)} className="mute__button">
            <IoVolumeOffOutline />
          </button>
        ) : (
          <button onClick={() => setIsMuted(true)} className="mute__button">
            <IoVolumeMediumOutline />
          </button>
        )}
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
