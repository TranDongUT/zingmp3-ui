import style from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Footer() {
  return <div className={cx("wrapper")}>Footer</div>;
}

export default Footer;
