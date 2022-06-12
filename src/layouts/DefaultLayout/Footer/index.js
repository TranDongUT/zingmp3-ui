import style from "./Footer.module.scss";
import classNames from "classnames/bind";
//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faWindowRestore,
  faMicrophone,
  faVolumeHigh,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";

//component
import { useState } from "react";
import Media from "~/components/Media";
import Player from "~/components/Player";

const cx = classNames.bind(style);

function Footer() {
  const [volume, setVolume] = useState("50");

  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <Media />
      </div>
      <div className={cx("center")}>
        {/* player control */}
        <div className={cx("player-control")}>
          <Player />
        </div>

        <audio src=""></audio>
      </div>
      {/* END Player control */}
      {/* more action */}
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
