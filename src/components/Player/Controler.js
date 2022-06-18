import style from "./Player.module.scss";
import classNames from "classnames/bind";
//package
import { useSelector, useDispatch } from "react-redux/es/exports";
import * as action from "~/redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShuffle,
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
  faRepeat,
  faCircleStop,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../Button/Button";
import { useEffect } from "react";

const cx = classNames.bind(style);

function Controler({ data }) {
  const musicState = useSelector((state) => state.musicReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.loadPlaylist(data));
  }, [data, dispatch]);

  const handleClickFunc = (controlType) => {
    switch (controlType) {
      case "RANDOM":
        console.log("RANDOM");
        if (musicState.random) {
          dispatch(action.randomSong(false));
        } else {
          dispatch(action.randomSong(true));
        }
        break;
      case "PREV":
        console.log("PREV");
        dispatch(action.prevSong());
        break;
      case "PLAY-STOP":
        console.log("PLAY-STOP");
        if (musicState.playing) {
          dispatch(action.stopSong());
        } else {
          dispatch(action.playSong());
        }
        break;
      case "NEXT":
        console.log("NEXT");
        dispatch(action.nextSong());
        break;
      case "REPEAT":
        console.log("REPEAT");
        dispatch(action.repeatSong());
        break;
      default:
        throw new Error("invalid action Controler");
    }
  };

  return (
    <>
      {/* <Button
        handleClickFunc={handleClickFunc}
        className={cx(`${item.className}`)}
        iconOnly={item.icon}
        controlType={item.controlType}
        active={item.active}
      ></Button> */}
      {/* random */}
      <Button
        active={!!musicState.random}
        iconOnly={<FontAwesomeIcon icon={faShuffle} />}
        controlType="RANDOM"
        handleClickFunc={handleClickFunc}
      ></Button>
      {/* prev */}
      <Button
        active
        iconOnly={<FontAwesomeIcon icon={faBackwardStep} />}
        controlType="PREV"
        handleClickFunc={handleClickFunc}
      ></Button>
      {/* play */}
      <Button
        className={cx("play-btn")}
        active
        iconOnly={
          musicState.playing ? (
            <FontAwesomeIcon icon={faCircleStop} />
          ) : (
            <FontAwesomeIcon icon={faCirclePlay} />
          )
        }
        controlType="PLAY-STOP"
        handleClickFunc={handleClickFunc}
      ></Button>
      {/* next */}
      <Button
        active
        iconOnly={<FontAwesomeIcon icon={faForwardStep} />}
        controlType="NEXT"
        handleClickFunc={handleClickFunc}
      ></Button>
      {/* repeat */}
      <Button
        active={!!musicState.repeat}
        iconOnly={<FontAwesomeIcon icon={faRepeat} />}
        controlType="REPEAT"
        handleClickFunc={handleClickFunc}
      ></Button>
    </>
  );
}

export default Controler;
