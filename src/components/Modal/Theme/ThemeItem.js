//css
import style from "./Theme.module.scss";
import classNames from "classnames/bind";
//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function ThemeItem({ data, onActive, active }) {
  const themeName = data.name;

  const handleTheme = () => {
    document.body.dataset.theme = themeName;
    localStorage.setItem("theme", themeName);
    onActive();
  };

  return (
    <div className={cx("theme-item")}>
      <div className={cx("theme-img", { active })} onClick={handleTheme}>
        <img src={data.path} alt="theme" />

        {active && (
          <div className={cx("check")}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </div>
        )}
      </div>
      <h4>{themeName}</h4>
    </div>
  );
}

export default ThemeItem;
