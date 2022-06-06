//css
import style from "./Modal.module.scss";
import classNames from "classnames/bind";

//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

//component
import Themes from "./Theme/Themes";
import images from "~/assets/images";

const COLOR_THEMES = [
  {
    name: "Dark",
    path: images.themeItem.dark,
  },
  {
    name: "Purple",
    path: images.themeItem.purple,
  },
  {
    name: "Blue Light",
    path: images.themeItem.blueLight,
  },
  {
    name: "Green",
    path: images.themeItem.green,
  },
  {
    name: "Pink",
    path: images.themeItem.pink,
  },
];

const cx = classNames.bind(style);

function Modal({ title, onShow }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <h3 className={cx("title")}>{title}</h3>
          <button className={cx("close-btn")}>
            <FontAwesomeIcon icon={faX} onClick={onShow} />
          </button>
        </div>
        <div className={cx("content")}>
          <Themes items={COLOR_THEMES} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
