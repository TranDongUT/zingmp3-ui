//css
import style from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Button({ large, circle, iconOnly, children, className, ...props }) {
  let Comp = "button";

  const classes = cx("wrapper", {
    [className]: className,
    circle,
    iconOnly,
    ...props,
  });

  return (
    <Comp className={classes}>
      {<span className={cx("icon")}>{iconOnly}</span> || children}
    </Comp>
  );
}

export default Button;
