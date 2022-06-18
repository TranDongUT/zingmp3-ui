import style from "./Player.module.scss";
import classNames from "classnames/bind";

//component
import Controler from "./Controler";

const cx = classNames.bind(style);

const LIST_SONG = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Player() {
  return (
    <div className={cx("wrapper")}>
      {/* button */}
      <div className={cx("controler")}>{<Controler data={LIST_SONG} />}</div>
      {/* process */}
      <div className={cx("process")}>
        <span>00:09</span>
        <input
          className={cx("range")}
          type="range"
          min="0"
          max="100"
          step="1"
        />
        <span>05:00</span>
      </div>
    </div>
  );
}

export default Player;
