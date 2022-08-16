import Action from "../Action";
import Comedy from "../Comedy";
import Horror from "../Horror";
import NetflixOriginals from "../NetflixOriginals";
import Romance from "../Romance";
import TopRated from "../TopRated";

export function RowContainer() {
  return (
    <div className="RowContainer">
      <NetflixOriginals />
      <TopRated />
      <Action />
      <Comedy />
      <Romance />
      <Horror />
    </div>
  );
}
