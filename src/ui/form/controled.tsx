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
      {/* @ts-expect-error */}
      <DatePicker {...formProps} {...inputProps} />
    </FormControl>
  );
};
