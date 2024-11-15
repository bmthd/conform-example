import { getInputProps, useField } from "@conform-to/react";
import { DatePicker } from "@yamada-ui/calendar";
import { FormControl } from "@yamada-ui/react";
import { ComponentProps, FC, useId } from "react";
import { FieldProps } from "./types";

export const DatePickerField: FC<FieldProps<Date> & ComponentProps<typeof DatePicker>> = ({
  name,
  helperMessage,
  label,
  ...inputProps
}) => {
  const id = useId();
  const [fieldMeta] = useField(name);
  const {
    required: isRequired,
    "aria-invalid": ariaInvalid,
    ...formProps
  } = getInputProps(fieldMeta, { type: "date" });
  const errorMessage = fieldMeta.errors ? [0] : undefined;
  return (
    <FormControl
      labelProps={{ id, htmlFor: inputProps.id }}
      {...{ helperMessage, errorMessage, label, isRequired, "aria-invalid": ariaInvalid }}
    >
      <DatePicker {...formProps} {...inputProps} aria-labelledby={id} />
    </FormControl>
  );
};

import { ReactNode, useCallback, useState } from "react";

const Checkbox: FC<{ children: FC<{ isChecked: boolean }> | ReactNode }> = ({ children }) => {
  const id = useId();
  const [isChecked, setChecked] = useState(false);
  const handleChange = useCallback(() => setChecked((prev) => !prev), [isChecked]);
  return (
    <label htmlFor={id}>
      <input id={id} type="checkbox" checked={isChecked} onChange={handleChange} />
      {typeof children === "function" ? children({ isChecked }) : children}
    </label>
  );
};
