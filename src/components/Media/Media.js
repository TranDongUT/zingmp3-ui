import style from "./Media.module.scss";
import classNames from "classnames/bind";
//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faHeart } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import { useState } from "react";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";

const cx = classNames.bind(style);

function Media({ data }) {
  const [love, setLove] = useState(false);

  const musicState = useSelector((state) => state.musicReducer);
  const { playlist, currentSong } = musicState;

  console.log();

  return (
    <div className={cx("wrapper")}>
      <img className={cx("thumbnail")} src="" alt="" />
      <div className={cx("infor")}>
        <p>Mộng Tàn Hoa (New Version)</p>
        <p className={cx("singer-name")}>Thien Tu</p>
      </div>

      <Tippy content="Yêu thích">
        <button className={cx("heart")} onClick={() => setLove(!love)}>
          {love ? (
            <FontAwesomeIcon icon={faHeart} />
          ) : (
            <FontAwesomeIcon icon={faGratipay} />
          )}
        </button>
      </Tippy>
      <Tippy content="Xem thêm">
        <button className={cx("more")}>
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </Tippy>
    </div>
  );
}

export default Media;
