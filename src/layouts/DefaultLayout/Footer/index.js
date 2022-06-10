import style from "./Footer.module.scss";
import classNames from "classnames/bind";
//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShuffle,
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
  faRepeat,
  faVideo,
  faWindowRestore,
  faMicrophone,
  faVolumeHigh,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";

//component
import Media from "~/components/Media";
import { useState } from "react";

const cx = classNames.bind(style);

function Footer() {
  const [volume, setVolume] = useState("50");

  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <Media />
      </div>
      <div className={cx("center")}>
        <div className={cx("player-control")}>
          <button>
            <FontAwesomeIcon icon={faShuffle} />
          </button>
          <button>
            <FontAwesomeIcon icon={faBackwardStep} />
          </button>
          <button className={cx("play-btn")}>
            <FontAwesomeIcon icon={faCirclePlay} />
          </button>
          <button>
            <FontAwesomeIcon icon={faForwardStep} />
          </button>
          <button>
            <FontAwesomeIcon icon={faRepeat} />
          </button>
        </div>
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
        <audio src=""></audio>
      </div>
      <div className={cx("right")}>
        <button>
          <FontAwesomeIcon icon={faVideo} />
        </button>
        <button>
          <FontAwesomeIcon icon={faMicrophone} />
        </button>
        <button>
          <FontAwesomeIcon icon={faWindowRestore} />
        </button>
        <button>
          {volume === "0" ? (
            <FontAwesomeIcon icon={faVolumeXmark} />
          ) : (
            <FontAwesomeIcon icon={faVolumeHigh} />
          )}
        </button>
        <div className={cx("volume")}>
          <input
            className={cx("range")}
            type="range"
            min="0"
            max="100"
            step="1"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
