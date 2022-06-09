import style from "./Footer.module.scss";
import classNames from "classnames/bind";
import Media from "~/components/Media";

const cx = classNames.bind(style);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <Media />
    </div>
  );
}

export default Footer;
