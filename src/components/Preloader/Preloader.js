import React from "react";
import style from "./preloader.module.scss";

function Preloader({ width, height }) {
  return (
    <svg
      style={(width, height)}
      className={style["circular-loader"]}
      width="100%"
      height="100%"
      viewBox="0 0 42 42"
    >
      <circle
        className={style["loader-path"]}
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="4.5"
      ></circle>
    </svg>
  );
}

export default Preloader;
