import React, { useEffect } from "react";
import style from "./modal.module.scss";

function Modal({ children, height, width, close }) {
  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";

    return () => (document.querySelector("body").style.overflow = "auto");
  }, []);

  return (
    <div className={style.modal}>
      <div className={style.field} onClick={close}></div>
      <div className={style.window} style={{ height, width }}>
        <button className={style["close-modal"]} onClick={close}></button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
