import style from "./Theme.module.scss";
import classNames from "classnames/bind";
//component
import ThemeItem from "./ThemeItem";
import { useEffect, useState } from "react";

import images from "~/assets/images";

const COLOR_THEMES = [
  {
    type: "color",
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

const SINGER_THEMES = [
  {
    type: "singer",
    name: "Lisa",
    path: images.themeItem.lisa,
    bgPath: images.backGround.lisa,
  },
  {
    name: "Jennie",
    path: images.themeItem.jennie,
    bgPath: images.backGround.jennie,
  },
  {
    name: "Jisoo",
    path: images.themeItem.jisoo,
    bgPath: images.backGround.jisoo,
  },
  {
    name: "Rose",
    path: images.themeItem.rose,
    bgPath: images.backGround.rose,
  },
];

const TOPIC_THEMES = [
  {
    type: "topic",
    name: "XoneFM",
    path: images.themeItem.xoneThumbn,
    bgPath: images.backGround.xoneBg,
  },
  {
    name: "Zing",
    path: images.themeItem.zma,
    bgPath: images.backGround.zma,
  },
  {
    name: "Eiffel",
    path: images.themeItem.eiffel,
    bgPath: images.backGround.eiffel,
  },
];

const cx = classNames.bind(style);

function Themes() {
  const [active, setActive] = useState("");

  const renderItem = (items) => {
    return items.map((item, index) => {
      return (
        <ThemeItem
          key={index}
          data={item}
          //two way binding
          onActive={() => {
            setActive(item.name);
          }}
          active={active === item.name ? true : false}
        />
      );
    });
  };

  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>Chủ đề</h3>
      <div className={cx("theme-list")}>{renderItem(TOPIC_THEMES)}</div>

      <h3 className={cx("title")}>Nghệ sĩ</h3>
      <div className={cx("theme-list")}>{renderItem(SINGER_THEMES)}</div>

      <h3 className={cx("title")}>Màu </h3>
      <div className={cx("theme-list")}>{renderItem(COLOR_THEMES)}</div>
    </div>
  );
}

export default Themes;
