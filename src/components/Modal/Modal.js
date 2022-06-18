//css
import style from "./Modal.module.scss";
import classNames from "classnames/bind";

//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

//component
import Themes from "./Theme/Themes";

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
          {/* Themes */}
          <Themes />
          {/* END Themes */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
