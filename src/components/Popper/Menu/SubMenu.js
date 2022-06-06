import style from "./Menu.module.scss";
import classNames from "classnames/bind";

//package
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

//component
import { WrapperPopper } from "~/components/Popper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(style);

function SubMenu({ items }) {
  const renderItems = () => {
    return items.map((item, index) => {
      return <MenuItem key={index} data={item} />;
    });
  };

  return (
    <div>
      <Tippy
        render={(attrs) => (
          <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <WrapperPopper className={cx("menu-popper")}>
              {/* render Item */}
              <div className={cx("menu-body")}>{renderItems()}</div>
              {/* render Item */}
            </WrapperPopper>
          </div>
        )}
      ></Tippy>
    </div>
  );
}

export default SubMenu;
