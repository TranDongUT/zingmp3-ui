import style from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      {/* body */}

      {/* content -- include Header */}
      <Header />
      <div className={cx("content")}>{children}</div>

      {/* end body */}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
