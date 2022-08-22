import { NetflixOriginals } from "../NetflixOriginals";
import { Requests } from "../../Requests/Requests";
import { Action } from "../Action";
import { Comedy } from "../Comedy";
import { Horror } from "../Horror";
import { Romance } from "../Romance";
import { TopRated } from "../TopRated";
import { UpComing } from "../UpComing";

export function RowContainer() {
  return (
    <div className="RowContainer">
      <NetflixOriginals
        title="Netflix Original"
        fetchURL={Requests.requestNetflixOriginal}
      />{" "}
      <UpComing title="Up Coming" fetchURL={Requests.requestUpComing} />
      <TopRated title="Top Rated" fetchURL={Requests.requestTopRated} />{" "}
      <Romance title="Romance" fetchURL={Requests.requestRomance} />
      <Comedy title="Comedies" fetchURL={Requests.requestComedy} />
      <Action title="Action" fetchURL={Requests.requestAction} />{" "}
      <Horror title="Horror" fetchURL={Requests.requestHorror} />
    </div>
  );
}
