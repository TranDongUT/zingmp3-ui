//css
import style from "./Header.module.scss";
import classNames from "classnames/bind";

//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faArrowUpFromBracket,
  faBan,
  faChevronRight,
  faCircleExclamation,
  faCirclePlay,
  faFileContract,
  faFontAwesome,
  faGear,
  faMusic,
  faPhone,
  faRectangleAd,
  faShieldHeart,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

//components
import Button from "~/components/Button";
import Search from "../Search";
import Menu from "~/components/Popper/Menu";
import { useEffect, useRef, useState } from "react";
import Modal from "~/components/Modal";

const cx = classNames.bind(style);

// setTimeout(()=>{
//   debugger
// },2000)

const MENU_ITEMS = [
  {
    leftIcon: <FontAwesomeIcon icon={faBan} />,
    title: "Danh sách chặn",
  },
  {
    leftIcon: <FontAwesomeIcon icon={faMusic} />,
    title: "Chất lượng nhạc",
    rightIcon: <FontAwesomeIcon icon={faChevronRight} />,
    data: [
      {
        leftIcon: <FontAwesomeIcon icon={faMusic} />,
        title: "SQ . 128",
      },
      {
        leftIcon: <FontAwesomeIcon icon={faMusic} />,
        title: "HQ . 320",
      },
    ],
  },
  {
    leftIcon: <FontAwesomeIcon icon={faCirclePlay} />,
    title: "Giao diện",
    rightIcon: <FontAwesomeIcon icon={faChevronRight} />,
    separate: true,
    data: [
      {
        leftIcon: <FontAwesomeIcon icon={faCirclePlay} />,
        title: "Luôn phát nhạc toàn màn hình",
      },
      {
        leftIcon: <FontAwesomeIcon icon={faCirclePlay} />,
        title: "Hiệu ứng",
      },
    ],
  },
  {
    leftIcon: <FontAwesomeIcon icon={faCircleExclamation} />,
    title: "Giới thiệu",
  },
  {
    leftIcon: <FontAwesomeIcon icon={faFontAwesome} />,
    title: "Góp ý",
  },
  {
    leftIcon: <FontAwesomeIcon icon={faPhone} />,
    title: "Liên hệ",
  },
  {
    leftIcon: <FontAwesomeIcon icon={faRectangleAd} />,
    title: "Quảng cáo",
  },
  {
    leftIcon: <FontAwesomeIcon icon={faFileContract} />,
    title: "Thỏa thuận sử dụng",
  },
  {
    leftIcon: <FontAwesomeIcon icon={faShieldHeart} />,
    title: "Chính sách bảo mật",
  },
];

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  //handle show header
  useEffect(() => {
    const fixedHeader = () => {
      setScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", fixedHeader);
    return () => {
      window.removeEventListener("scroll", fixedHeader);
    };
  }, []);

  return (
    <div className={cx("wrapper", { fixedHeader: scroll })}>
      <div className={cx("left")}>
        <Button iconOnly={<FontAwesomeIcon icon={faArrowLeftLong} />}></Button>
        <Button iconOnly={<FontAwesomeIcon icon={faArrowRightLong} />}></Button>

        {/* search */}
        <Search />
        {/* END - search */}
      </div>
      <div className={cx("right")}>
        <Tippy content="Chủ đề">
          <button
            className={cx("action-btn")}
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
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

        {/* setting icon */}

        <Menu items={MENU_ITEMS}>
          <button className={cx("action-btn")}>
            <FontAwesomeIcon icon={faGear} />
          </button>
        </Menu>

        {/* END setting icon */}

        <img
          className={cx("avata")}
          src="https://s120-ava-talk-zmp3.zmdcdn.me/0/c/c/3/13/120/57c73e1f378908a3adfa9a2d6d73a114.jpg"
          alt="avata"
        />
      </div>

      {/* Modal */}
      {showModal && <Modal title={"Giao diện"} onShow={handleShowModal} />}
      {/* END Modal */}
    </div>
  );
}

export default Header;
