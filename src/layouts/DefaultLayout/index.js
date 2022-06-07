import style from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

import { useEffect } from "react";

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  useEffect(() => {
    const rec = document.querySelector(".wrapper");
    console.log(rec);
  });

  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      {/* body */}

      <div className={cx("container")}>
        <Header />
        {/* content */}
        <div className={cx("content")}>{children}</div>
      </div>
      {/* end body */}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
