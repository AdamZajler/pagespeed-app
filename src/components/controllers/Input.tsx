import type { Control, ControllerProps, FieldError, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";

import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import type { ReactNode } from "react";

export type InputProps<T extends FieldValues> = Omit<TextFieldProps, "name"> & {
  rules?: ControllerProps["rules"];
  name: Path<T>;
  parseError?: (error: FieldError) => string;
  control?: Control<T>;
};

export function Input<TFieldValues extends FieldValues>({
  rules = {},
  parseError,
  type,
  required,
  name,
  control,
  disabled,
  label,
  InputProps,
  ...rest
}: InputProps<TFieldValues>): ReactNode {
  if (required && !rules.required) {
    rules.required = "To pole jest wymagane";
  }

  return (
    <Controller
      name={name}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      control={control}
      rules={rules}
      // defaultValue={defaultValue}
      render={({
        field: { value, onChange, onBlur, disabled: formDisabled },
        fieldState: { error },
      }) => (
        <TextField
          {...rest}
          name={name}
          value={value ?? ""}
          onChange={(ev) => {
            if (typeof rest.onChange === "function") {
              rest.onChange(ev);
            }

            onChange(ev);
          }}
          onBlur={onBlur}
          fullWidth
          variant={rest.variant ? rest.variant : "outlined"}
          disabled={disabled || formDisabled}
          label={`${label}${required ? "*" : ""}`}
          type={type}
          error={!!error}
          helperText={
            error
              ? typeof parseError === "function"
                ? parseError(error)
                : error.message
              : rest.helperText
          }
          slotProps={{ input: InputProps }}
        />
      )}
    />
  );
}
