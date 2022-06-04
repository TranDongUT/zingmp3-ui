//css
import style from "./Header.module.scss";
import classNames from "classnames/bind";

//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faArrowUpFromBracket,
  faGear,
  faMagnifyingGlass,
  faShirt,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

//components
import Button from "~/components/Button";

const cx = classNames.bind(style);

// setTimeout(()=>{
//   debugger
// },2000)

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <Button iconOnly={<FontAwesomeIcon icon={faArrowLeftLong} />}></Button>
        <Button iconOnly={<FontAwesomeIcon icon={faArrowRightLong} />}></Button>
        <div className={cx("search")}>
          <div className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>

          <input
            type="text"
            placeholder="Nhập tên bài hát, nghệ sĩ hoăc MV..."
          />
          <div className={cx("close-btn")}>
            <FontAwesomeIcon icon={faX} />
          </div>
        </div>
      </div>
      <div className={cx("right")}>
        <Tippy content="Chủ đề">
          <button className={cx("action-btn")}>
            <FontAwesomeIcon icon={faShirt} />
          </button>
        </Tippy>
        <Tippy content="Nâng cấp VIP">
          <button className={cx("action-btn")}>
            <FontAwesomeIcon icon={faGem} />
          </button>
        </Tippy>

        <Tippy content="Tải lên">
          <button className={cx("action-btn")}>
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </button>
        </Tippy>
        <Tippy content="Cài đặt">
          <button className={cx("action-btn")}>
            <FontAwesomeIcon icon={faGear} />
          </button>
        </Tippy>

        <img
          className={cx("avata")}
          src="https://s120-ava-talk-zmp3.zmdcdn.me/0/c/c/3/13/120/57c73e1f378908a3adfa9a2d6d73a114.jpg"
          alt="avata"
        />
      </div>
    </div>
  );
}

export default Header;
