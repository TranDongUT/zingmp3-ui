//css
import style from "./Menu.module.scss";
import classNames from "classnames/bind";

//package
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

//components
import MenuItems from "./MenuItem";
import { WrapperPopper } from "~/components/Popper";

const cx = classNames.bind(style);

function Menu({ items = [], children }) {
  const renderItems = () => {
    return items.map((item, index) => {
      return <MenuItems key={index} data={item} />;
    });
  };

  return (
    <Tippy
      // visible
      trigger="click"
      animation={false} ///hide tippy
      placement="bottom-end"
      interactive
      delay={[0, 700]}
      content="Cài đặt"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <WrapperPopper className={cx("menu-popper")}>
            {/* render Item */}
            <div className={cx("menu-body")}>{renderItems()}</div>
            {/* render Item */}
          </WrapperPopper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
