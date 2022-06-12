import style from "./Player.module.scss";
import classNames from "classnames/bind";
//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShuffle,
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";

//component
import Controler from "./Controler";

const cx = classNames.bind(style);

const LIST_CONTROL = [
  {
    controlType: "RAMDOM",
    icon: <FontAwesomeIcon icon={faShuffle} />,
  },
  {
    controlType: "PREV",
    icon: <FontAwesomeIcon icon={faBackwardStep} />,
    active: true,
  },
  {
    controlType: "PLAY-STOP",
    icon: <FontAwesomeIcon icon={faCirclePlay} />,
    className: "play-btn",
    active: true,
  },
  {
    controlType: "NEXT",
    icon: <FontAwesomeIcon icon={faForwardStep} />,
    active: true,
  },
  {
    controlType: "REPEAT",
    icon: <FontAwesomeIcon icon={faRepeat} />,
  },
];

function Player() {
  return (
    <div className={cx("wrapper")}>
      {/* button */}
      <div className={cx("controler")}>{<Controler data={LIST_CONTROL} />}</div>
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
