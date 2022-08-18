import { NetflixOriginals } from "../NetflixOriginal/NetflixOriginals";
import { Requests } from "../../Requests/Requests";
import { Action } from "../Action/Action";
import { Comedy } from "../Comedy/Comedy";
import { Horror } from "../Horror/Horror";
import { Romance } from "../Romance/Romance";
import { TopRated } from "../TopRated/TopRated";
import { UpComing } from "../UpComing/UpComing";

export function RowContainer() {
  return (
    <div className="RowContainer">
      <NetflixOriginals
        title="Netflix Original"
        fetchURL={Requests.requestPopular}
      />{" "}
      <TopRated title="Top Rated" fetchURL={Requests.requestTopRated} />{" "}
      <UpComing title="Up Coming" fetchURL={Requests.requestUpComing} />
      <Romance title="Romance" fetchURL={Requests.requestRomance} />
      <Comedy title="Comedies" fetchURL={Requests.requestComedy} />
      <Action title="Action" fetchURL={Requests.requestAction} />{" "}
      <Horror title="Horror" fetchURL={Requests.requestHorror} />
    </div>
  );
}
