import React, { useContext, useState } from "react";

import { Form } from "react-final-form";
import { FORM_ERROR } from "final-form";

import Input from "src/components/Form/Input";
import Select from "src/components/Form/Select";
import Button from "src/components/Button";
import Modal from "src/components/Modal/Modal";
import DropFile from "src/components/DropFile/DropFile";

import Transition from "src/utils/HOC/Transition";
import { AppContext } from "src/utils/HOC/AppContext";

import styles from "./dev.module.scss";

import Add from "src/components/svg/add";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const formData = {
  username: "",
  password: "",
  select: "",
  date: "",
};

export default function Dev() {
  const appContext = useContext(AppContext);

  const [successDialog, setSuccessDialog] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [transition, setTransition] = useState(true);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const onSubmit = async (values) => {
    // Провекра после сабмита (серверная например)
    if (values.username !== "erikras") {
      return { username: "Unknown username" };
    }
    if (values.password !== "finalformrocks") {
      return { [FORM_ERROR]: "Login Failed" };
    }

    setSubmitLoading(true);
    await sleep(1000);
    setSuccessDialog(true);
    setSubmitLoading(false);
  };

  return (
    <div style={{ maxWidth: "90%", margin: "20px auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Dev</h1>

      <Form
        onSubmit={onSubmit}
        initialValues={formData}
        validate={(values) => {
          const errors = {};

          Object.keys(formData).forEach((key) => {
            if (!values[key]) errors[key] = "Required";
          });

          return errors;
        }}
        render={({
          submitError,
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input name="username" label="Username" placeholder="Username" />
            <Input name="password" label="Password" placeholder="Password" />
            <Select
              name="select"
              label="Select"
              placeholder="Select"
              items={options}
              search={false}
            />
            <Input name="date" label="Date" placeholder="Date" type={"date"} />

            {submitError && <div className="error-message">{submitError}</div>}

            <div style={{ display: "flex", gap: "16px" }}>
              <Button
                type="submit"
                disabled={submitting}
                loading={submitLoading}
                className="btn-primary"
                text="submit"
                height="38px"
                width="128px"
              />
              <Button
                disabled={submitting || pristine}
                onClick={form.reset}
                className="btn-outline-primary"
                text="reset"
                height="38px"
                width="128px"
              />
            </div>
            <br />
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />

      <div style={{ marginTop: "20px", width: "400px" }}>
        <DropFile />
      </div>

      <Transition in={transition} timeout={300}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "200px",
            height: "50px",
            alignItems: "center",
            background: "orange",
            margin: "20px 0",
            borderRadius: "10px",
          }}
        >
          <Add color="black" size={"30"} />
          <b>Transition</b>
        </div>
      </Transition>

      <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
        <Button
          onClick={() => appContext.setAlert({ show: true, text: "ALERT" })}
          className="btn-primary"
          text="alert modal"
          height="38px"
          width="128px"
        />
        <Button
          onClick={() => Promise.reject()}
          className="btn-primary"
          text="error modal"
          height="38px"
          width="128px"
        />
        <Button
          onClick={() => {
            appContext.setConfrim({
              show: true,
              text: "Согласны?",
              buttonText: "Да",
              callback: () => appContext.setCallbackLoading(true),
            });
          }}
          className="btn-primary"
          text="confrim modal"
          height="38px"
          width="128px"
        />
        <Button
          onClick={() => setTransition(!transition)}
          className="btn-primary"
          text="transition"
          height="38px"
          width="128px"
        />
      </div>

      {successDialog && (
        <Modal
          height="200px"
          width="200px"
          close={() => setSuccessDialog(false)}
        >
          <div style={{ padding: "20px" }}>
            <h1>Modal</h1>
            <div>text</div>
          </div>
        </Modal>
      )}
    </div>
  );
}
