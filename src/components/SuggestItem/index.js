//css
import style from "./SuggestItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
function SuggestItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("thumbnail")}
        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/9/0/2/2/90223f08b220e52a78ac5c0dd739256f.jpg"
        alt="single-avata"
      />
      <div className={cx("infor")}>
        <h5>Cho Mình Em</h5>
        <p>Đen</p>
      </div>
    </div>
  );
}

export default SuggestItem;
