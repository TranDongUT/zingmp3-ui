//css
import style from "./Search.module.scss";
import classNames from "classnames/bind";
//package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

//component
import SuggestItem from "~/components/SuggestItem";
import { useRef, useState } from "react";

const cx = classNames.bind(style);

function Search() {
  const inputRef = useRef();
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleInput = (e) => {
    const value = e.target.value;

    if (!value.startsWith(" ")) {
      setSearchValue(value);
      setShowResult(true);
    }
    if (value === "") {
      setSearchValue("");
      setShowResult(false);
    }
  };

  const handleClear = () => {
    setShowResult(false);
    setSearchValue("");
  };

  return (
    <div className={cx("wrapper")}>
      <HeadlessTippy
        visible={showResult}
        // trigger={searchValue || "click"}
        onClickOutside={() => setShowResult(false)}
        interactive
        placement="bottom-start"
        offset={[0, 0]}
        maxWidth={1}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            {/* suggesItem*/}
            <div className={cx("title")}> Đề xuất cho bạn </div>
            <SuggestItem />
            <SuggestItem />
            <SuggestItem />
            <SuggestItem />
          </div>
        )}
      >
        <div className={cx("search", { showResult })}>
          <button
            className={cx("search-btn")}
            onClick={() => inputRef.current.focus()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            ref={inputRef}
            value={searchValue}
            onChange={(e) => handleInput(e)}
            onFocus={() => {
              if (searchValue) {
                setShowResult(true);
              }
            }}
            placeholder="Nhập tên bài hát, nghệ sĩ hoăc MV..."
          />
          {(showResult || searchValue) && (
            <button className={cx("close-btn")} onClick={handleClear}>
              <FontAwesomeIcon icon={faX} />
            </button>
          )}
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
