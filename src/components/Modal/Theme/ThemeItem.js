import style from "./Theme.module.scss";
import classNames from "classnames/bind";

import { useEffect, useState } from "react";

const cx = classNames.bind(style);

function ThemeItem({ data }) {
  const [theme, setTheme] = useState(() => {
    const initTheme = localStorage.getItem("theme");
    return initTheme;
  });

  const handleTheme = () => {
    setTheme(data.name);
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", data.name);
  };

  return (
    <div className={cx("theme-item")}>
      <div className={cx("theme-img")} onClick={handleTheme}>
        <img src={data.path} alt="theme" />
      </div>
      <h4>{data.name}</h4>
    </div>
  );
}

export default ThemeItem;
