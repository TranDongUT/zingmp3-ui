import style from "./Player.module.scss";
import classNames from "classnames/bind";
//package
import { useSelector, useDispatch } from "react-redux/es/exports";
import * as action from "~/redux/actions";

import Button from "../Button";

const cx = classNames.bind(style);

function Controler({ data }) {
  const musicState = useSelector((state) => state.musicReducer);
  console.log(musicState);
  const dispatch = useDispatch();

  const handleClickFunc = (controlType) => {
    switch (controlType) {
      case "RAMDOM":
        console.log("RAMDOM");
        dispatch(action.randomSong());
        break;
      case "PREV":
        console.log("PREV");
        dispatch(action.prevSong());
        break;
      case "PLAY-STOP":
        console.log("PLAY-STOP");
        dispatch(action.playSong());
        break;
      case "NEXT":
        console.log("NEXT");
        dispatch(action.stopSong());
        break;
      case "REPEAT":
        console.log("REPEAT");
        dispatch(action.repeatSong());
        break;
      default:
        throw new Error("invalid action Controler");
    }
  };

  const renderControlBtn = () => {
    return data.map((item, index) => {
      return (
        <Button
          handleClickFunc={handleClickFunc}
          key={index}
          className={cx(`${item.className}`)}
          iconOnly={item.icon}
          controlType={item.controlType}
          active={item.active}
        ></Button>
      );
    });
  };
  return renderControlBtn();
}

export default Controler;
