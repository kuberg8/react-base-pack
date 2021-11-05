import { Field } from "react-final-form";
import React from "react";

export default function FieldComponent({
  name,
  label,
  type,
  placeholder,
  disabled,
  autoFocus,
}) {
  return (
    <Field name={name || ""}>
      {({ input, meta }) => (
        <div>
          <label>{label}</label>
          <div>
            <input
              {...input}
              type={type || "text"}
              disabled={disabled}
              placeholder={placeholder || ""}
              autoFocus={autoFocus}
              className={
                "input__field" +
                ((meta.error || meta.submitError) && meta.touched
                  ? " error"
                  : "")
              }
            />
          </div>

          {(meta.error || meta.submitError) && meta.touched && (
            <span className="error-message">
              {meta.error || meta.submitError}
            </span>
          )}
        </div>
      )}
    </Field>
  );
}
