import React from "react";
import Preloader from "src/components/Preloader/Preloader";

function Button({
  text,
  className,
  disabled,
  type,
  height,
  width,
  onClick,
  loading,
  icon,
  textPosition,
}) {

  return (
    <button
      className={className + `${loading ? " loading" : ""}`}
      disabled={disabled || loading}
      type={type || "button"}
      style={{ height, width }}
      onClick={onClick}
    >
      {loading ? <Preloader /> : text}
    </button>
  );
}

export default Button;
