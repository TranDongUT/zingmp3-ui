//css
import style from "./Menu.module.scss";
import classNames from "classnames/bind";

//component
import Button from "~/components/Button";

const cx = classNames.bind(style);
function MenuItem({ data }) {
  //   console.log(data);
  return (
    <Button
      className={cx("menu-item", { separate: data.separate })}
      leftIcon={data.leftIcon}
      rightIcon={data.rightIcon}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
