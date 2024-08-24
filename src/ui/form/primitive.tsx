import { getInputProps, useField } from "@conform-to/react";
import { Checkbox, FormControl, Input, NumberInput, Textarea, VStack } from "@yamada-ui/react";
import { type ComponentProps, type FC, useId } from "react";

/**
 * ラベルとエラーメッセージを紐付けたInput
 */
export const TextField: FC<FieldProps<string> & ComponentProps<typeof Input>> = ({
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
  } = getInputProps(fieldMeta, { type: "text" });
  const errorMessage = fieldMeta.errors ? [0] : undefined;
  return (
    <FormControl
      labelProps={{ id }}
      htmlFor={inputProps.id}
      {...{ helperMessage, errorMessage, label, isRequired, "aria-invalid": ariaInvalid }}
    >
      <Input {...formProps} {...inputProps} aria-labelledby={id} />
    </FormControl>
  );
};

/**
 * ラベルとエラーメッセージを紐付けたTextarea
 */
export const TextareaField: FC<FieldProps<string> & ComponentProps<typeof Textarea>> = ({
  name,
  helperMessage,
  label,
  ...textareaProps
}) => {
  const id = useId();
  const [fieldMeta] = useField(name);
  const {
    required: isRequired,
    "aria-invalid": ariaInvalid,
    ...formProps
  } = getInputProps(fieldMeta, { type: "text" });
  const errorMessage = fieldMeta.errors ? [0] : undefined;
  return (
    <FormControl
      labelProps={{ id }}
      htmlFor={textareaProps.id}
      {...{ helperMessage, errorMessage, label, isRequired, "aria-invalid": ariaInvalid }}
    >
      <Textarea {...formProps} {...textareaProps} aria-labelledby={id} />
    </FormControl>
  );
};

/**
 * ラベルとエラーメッセージを紐付けたNumberInput
 */
export const NumberInputField: FC<FieldProps<number> & ComponentProps<typeof NumberInput>> = ({
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
  } = getInputProps(fieldMeta, { type: "number" });
  return (
    <FormControl
      labelProps={{ id }}
      htmlFor={inputProps.id}
      {...{ helperMessage, label, isRequired, "aria-invalid": ariaInvalid }}
    >
      {/* @ts-expect-error minの型が合わないが、コンポーネントライブラリの問題なため許容 */}
      <NumberInput {...formProps} {...inputProps} aria-labelledby={id} />
    </FormControl>
  );
};

/**
 * ラベルとエラーメッセージを紐付けたCheckbox
 */
export const CheckboxField: FC<FieldProps<boolean> & ComponentProps<typeof Checkbox>> = ({
  name,
  helperMessage,
  label,
  ...checkboxProps
}) => {
  const id = useId();
  const [fieldMeta] = useField(name);
  const { defaultChecked: defaultIsChecked, ...inputProps } = getInputProps(fieldMeta, {
    type: "checkbox",
  });
  return (
    <FormControl
      labelProps={{ id }}
      htmlFor={checkboxProps.id}
      {...{ helperMessage, label, ...getFieldErrorProps(fieldMeta) }}
    >
      <VStack alignItems="start" p="4">
        <Checkbox
          {...inputProps}
          {...{ defaultIsChecked }}
          {...checkboxProps}
          aria-labelledby={id}
        />
      </VStack>
    </FormControl>
  );
};
