//css
import style from "./Button.module.scss";
import classNames from "classnames/bind";
import { forwardRef } from "react";

const cx = classNames.bind(style);

const Button = forwardRef(
  (
    {
      large,
      circle,
      iconOnly,
      leftIcon,
      rightIcon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    let Comp = "button";

    const classes = cx("wrapper", {
      [className]: className,
      circle,
      iconOnly,
      leftIcon,
      rightIcon,
      ...props,
    });

    return (
      <Comp className={classes} ref={ref}>
        {iconOnly ? (
          <span className={cx("icon")}>{iconOnly}</span>
        ) : (
          <>
            <span className={cx("icon")}>{leftIcon}</span>
            <span className={cx("title")}>{children}</span>
            <span
              className={cx("icon", { leftRightIcon: leftIcon && rightIcon })}
            >
              {rightIcon}
            </span>
          </>
        )}
      </Comp>
    );
  }
);

export default Button;
