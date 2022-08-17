import Action from "../Action";
import Comedy from "../Comedy";
import Horror from "../Horror";
import NetflixOriginals from "../NetflixOriginals";
import Romance from "../Romance";
import TopRated from "../TopRated";
import requests from "../../requests";
import UpComing from "../UpComing";

export function RowContainer() {
  return (
    <div className="RowContainer">
      <NetflixOriginals
        title="Netflix Original"
        fetchURL={requests.requestPopular}
      />
      <TopRated title="Top Rated" fetchURL={requests.requestTopRated} />
      <UpComing title="Up Coming" fetchURL={requests.requestUpComing} />
      <Action title="Action" fetchURL={requests.requestAction} />
      <Comedy title="Comedy" fetchURL={requests.requestComedy} />
      <Romance title="Romance" fetchURL={requests.requestRomance} />
      <Horror title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
}
