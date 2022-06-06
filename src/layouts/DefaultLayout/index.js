import style from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Sidebar />
      {/* body */}
      <div className={cx("container")}>
        {/* content */}
        <div className={cx("content")}>{children}</div>
      </div>
      {/* end body */}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
