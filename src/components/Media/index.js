import style from "./Media.module.scss";
import classNames from "classnames/bind";
//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faHeart } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import { useState } from "react";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(style);

function Media({ data }) {
  const [love, setLove] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("thumbnail")}
        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/a/c/2/1/ac2198e6f0ed52fae358b62bb84348d2.jpg"
        alt=""
      />
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
