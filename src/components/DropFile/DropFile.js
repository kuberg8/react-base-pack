import React, { useState, useRef } from "react";
import style from "./dropFile.module.scss";

function DropFile({ width, height }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [files, setFiles] = useState([]);
  const inputRef = useRef();

  const fileDrop = (e) => {
    e.preventDefault();
    const dropFiles = e.dataTransfer.files;
    if (dropFiles?.length) {
      setFiles([...dropFiles]);
      inputRef.current.files = dropFiles;
    }
    setIsDragOver(false);
  };

  const hanfleUpload = ({ target }) => {
    setFiles([...target.files]);
    console.dir(inputRef.current)
  };

  const dragOver = (e) => {
    e.preventDefault();
    if (!isDragOver) setIsDragOver(true);
  };

  const dragLeave = (e) => {
    e.preventDefault();
    if (isDragOver) setIsDragOver(false);
  };

  return (
    <div style={{ width }}>
      <div
        className={style.drop__aria}
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        style={{
          height,
          background: isDragOver ? "rgba(0, 66, 105, 0.05)" : "",
        }}
      >
        <svg
          width="64"
          height="65"
          viewBox="0 0 64 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64 57.3889V7.61111C64 3.7 60.8 0.5 56.8889 0.5H7.11111C3.2 0.5 0 3.7 0 7.61111V57.3889C0 61.3 3.2 64.5 7.11111 64.5H56.8889C60.8 64.5 64 61.3 64 57.3889ZM19.5556 37.8333L28.4444 48.5356L40.8889 32.5L56.8889 53.8333H7.11111L19.5556 37.8333Z"
            fill="#002033"
            fillOpacity="0.3"
          />
        </svg>

        <div className={style.text}>Перетащите сюда документы</div>
        <div className={style.allowed__files}>
          Поддерживаемые форматы: PNG, TIFF, JPG
        </div>

        <input type="file" ref={inputRef} onChange={hanfleUpload} multiple />
      </div>

      {files.length > 1 &&
        files.map((file, i) => (
          <p key={i + "file"}>
            <small
              style={{
                display: "inline",
                width: width || "193px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {" "}
              - {file.name}
            </small>
          </p>
        ))}
    </div>
  );
}

export default DropFile;
