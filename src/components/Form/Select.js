import { Field } from "react-final-form";
import Select from "react-select";
import React from "react";

export default function FieldComponent({
  name,
  label,
  items,
  multiple,
  loading,
  placeholder,
  disabled,
  search,
  maxMenuHeight,
  onBlur,
  onFocus,
  onKeyDown,
  autoFocus
}) {
  return (
    <Field name={name || ""}>
      {({ input, meta }) => (
        <div>
          <label>{label}</label>
          <div>
            <Select
              options={items}
              {...input}
              placeholder={placeholder}
              isMulti={multiple}
              isLoading={loading}
              isDisabled={disabled}
              isSearchable={search}
              maxMenuHeight={maxMenuHeight}
              onBlur={onBlur}
              onFocus={onFocus}
              onKeyDown={onKeyDown}
              autoFocus={autoFocus}
              className={
                (meta.error || meta.submitError) && meta.touched ? "error" : ""
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
