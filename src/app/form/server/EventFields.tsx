import { NumberInputField, TextareaField, TextField } from "@/ui/form/primitive";
import { fromObject } from "@/utils/fromObject";
import { getFieldsetProps, useForm } from "@conform-to/react";
import { Fieldset, Legend } from "@yamada-ui/react";
import { FC } from "react";
import { EventRegisterInput } from "../_common/schema";

export const EventFields: FC<{ id: "eventRegister" | "eventEdit" }> = ({ id }) => {
  const [, field] = useForm<EventRegisterInput>({ id });
  return (
    <>
      <Fieldset {...getFieldsetProps(field.basicInfo)}>
        <Legend>基本情報</Legend>
        {fromObject(field.basicInfo.getFieldset())((field) => (
          <>
            <TextField name={field.eventName} label="イベント名" />
            <NumberInputField name={field.numberOfParticipants} label="参加人数" />
          </>
        ))}
      </Fieldset>
      {/* <SelectField name={field.entryOption} label="参加方法" options={entryOptions} /> */}
      <TextareaField name={field.enquete} label="アンケート" />
    </>
  );
};
