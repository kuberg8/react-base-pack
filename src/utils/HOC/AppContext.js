import React, { useState } from "react";
import Modal from "src/components/Modal/Modal";
import Button from "src/components/Button";

import { connect } from "react-redux";
import { compose } from "redux";
import { setWindowWidth } from "src/redux/reducers/app";

class ModalState {
  constructor(show = false, text = "", buttonText = "", callback = null) {
    this.show = show;
    this.text = text;
    this.buttonText = buttonText;
    this.callback = callback;
  }
}

export const AppContext = React.createContext();

const AppProvider = ({ children, setWindowWidth }) => {
  const [alert, setAlert] = useState(new ModalState());
  const [confrim, setConfrim] = useState(new ModalState());
  const [error, setError] = useState(new ModalState());
  const [callbackLoading, setCallbackLoading] = useState(false);

  window.addEventListener("unhandledrejection", (evt) => {
    const err = evt.reason;
    setError(new ModalState(true, err?.response?.data?.message));
  });

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <AppContext.Provider value={{ setAlert, setConfrim, setCallbackLoading }}>
      {alert.show && (
        <Modal
          close={() => setAlert(new ModalState())}
          width="544px"
          height="174px"
        >
          <h2 className="center">{alert.text}</h2>
        </Modal>
      )}

      {error.show && (
        <Modal
          close={() => setError(new ModalState())}
          width="444px"
          height="174px"
        >
          <div style={{ padding: "20px" }}>
            <h2>К сожалению, произошла ошибка.</h2>
            <div>{error.text || "Повторите попытку позже"}</div>
          </div>
        </Modal>
      )}

      {confrim.show && (
        <Modal
          close={() => setConfrim(new ModalState())}
          width="544px"
          height="174px"
        >
          <div style={{ padding: "40px" }}>
            <h2 style={{ height: "100%" }}>{confrim.text}</h2>
            <div className="button__wraper">
              <Button
                onClick={confrim.callback}
                loading={callbackLoading}
                className="btn-primary"
                width="121px"
                height="40px"
                text={confrim.buttonText}
                style={{ marginRight: "8px" }}
              />
              <Button
                className="btn-secondary"
                width="96px"
                height="40px"
                text="Отмена"
                onClick={() => setConfrim(new ModalState())}
              />
            </div>
          </div>
        </Modal>
      )}

      {children}
    </AppContext.Provider>
  );
};

export default compose(connect(null, { setWindowWidth }))(AppProvider);
