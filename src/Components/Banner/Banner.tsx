import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BsVolumeUp, BsVolumeMute } from "react-icons/bs";
import "/src/style/Banner.css";
import ReactPlayer from "react-player";
import { BiInfoCircle } from "react-icons/bi";

export function Banner() {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  return (
    <div className="banner">
      <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        className="trailer"
        url="https://vimeo.com/329866666"
      />
      <article className="trailer__info">
        <h1 className="trailer__title">The Lion King</h1>
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
        <div className="trailer__wrapper">
          <button
            onClick={() => alert("not a movie!")}
            className="trailer__button primary"
          >
            <BsFillPlayFill className="trailer__button--icon" />
            Play
          </button>
          <button className="trailer__button secondary">
            <BiInfoCircle className="trailer__button--icon" />
            More Info
          </button>
        </div>
      </article>{" "}
      {isMuted ? (
        <button className="trailer__mute">
          {" "}
          <BsVolumeMute onClick={() => setIsMuted(false)} />
        </button>
      ) : (
        <button className="trailer__mute">
          <BsVolumeUp onClick={() => setIsMuted(true)} />
        </button>
      )}
      <div className="banner__fade"></div>
    </div>
  );
}
