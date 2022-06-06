import style from "./Theme.module.scss";
import classNames from "classnames/bind";
//component
import ThemeItem from "./ThemeItem";

const cx = classNames.bind(style);

function Themes({ items, title }) {
  const renderItem = () => {
    return items.map((item, index) => {
      return <ThemeItem key={index} data={item} />;
    });
  };

  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>{title}</h3>
      <div className={cx("item-list")}>{renderItem()}</div>
    </div>
  );
}

export default Themes;
