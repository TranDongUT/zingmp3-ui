//css
import style from "./Wrapper.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Wrapper({ className, children }) {
  return (
    <div className={cx("wrapper", { [className]: className })}>{children}</div>
  );
}

export default Wrapper;
