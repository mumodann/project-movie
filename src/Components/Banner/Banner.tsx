import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IoVolumeMediumOutline, IoVolumeOffOutline } from "react-icons/io5";
import "/src/style/Banner.css";
import ReactPlayer from "react-player";
import { BiInfoCircle } from "react-icons/bi";

export function Banner(): JSX.Element {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  return (
    <div className="banner">
      <ReactPlayer
        playing={true}
        loop={true}
        volume={1}
        muted={isMuted}
        className="trailer__video"
        width="100%"
        height="100%"
        url="https://vimeo.com/329866666"
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
      <article className="trailer__info">
        <h1 className="trailer__title">The Lion King </h1>
        <p className="trailer__overview">
          Simba idolizes his father, King Mufasa, and takes to heart his own
          royal destiny. But not everyone in the kingdom celebrates the new
          cub's arrival. Scar, Mufasa's brother and former heir to the throne
          has plans of his own. The battle for Pride Rock is ravaged with
          betrayal, tragedy and drama, ultimately resulting in Simba's exile.
        </p>
        <p className="trailer__overview mobile__view--1">
          Simba idolizes his father, King Mufasa, and takes to heart his own
          royal destiny. But not everyone in the kingdom celebrates the new
          cub's arrival...
        </p>
        <p className="trailer__overview mobile__view--2">
          Simba idolizes his father, King Mufasa, and takes to heart his own
          royal destiny...
        </p>
        <div className="trailer__container">
          <button aria-label="Play" className="container__button">
            <FontAwesomeIcon icon={faPlay} className="icon" />
            &nbsp; Play
          </button>
          <button aria-label="My List" className="container__button">
            <BiInfoCircle className="icon" />
            &nbsp; More Info
          </button>
        </div>
      </article>
    </div>
  );
}
