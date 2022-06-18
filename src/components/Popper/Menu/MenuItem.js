//css
import style from "./Menu.module.scss";
import classNames from "classnames/bind";

//package
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

//component
import Button from "~/components/Button/Button";
import { WrapperPopper } from "~/components/Popper";

const cx = classNames.bind(style);
function MenuItem({ data }) {
  //   console.log(data);

  let isParent = !!data.data;

  const renderItems = () => {
    return data.data.map((item, index) => {
      return <MenuItem key={index} data={item} />;
    });
  };

  return (
    <>
      {isParent ? (
        <Tippy
          animation={false}
          placement="left"
          offset={[-10, 0]}
          interactive
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
          <Button
            className={cx("menu-item", { separate: data.separate })}
            leftIcon={data.leftIcon}
            rightIcon={data.rightIcon}
          >
            {data.title}
          </Button>
        </Tippy>
      ) : (
        <Button
          className={cx("menu-item", { separate: data.separate })}
          leftIcon={data.leftIcon}
          rightIcon={data.rightIcon}
        >
          {data.title}
        </Button>
      )}
    </>
  );
}

export default MenuItem;
