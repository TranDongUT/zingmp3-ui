//css
import style from "./Header.module.scss";
import classNames from "classnames/bind";

//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
//components

const cx = classNames.bind(style);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <button>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <FontAwesomeIcon icon={faArrowRight} />
        <button></button>
        <div className={cx("search")}>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            placeholder="Nhập tên bài hát, nghệ sĩ hoăc MV..."
          />
        </div>
      </div>
      <div className={cx("right")}>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <img
          src="https://s120-ava-talk-zmp3.zmdcdn.me/0/c/c/3/13/120/57c73e1f378908a3adfa9a2d6d73a114.jpg"
          alt="avata"
        />
      </div>
    </div>
  );
}

export default Header;
