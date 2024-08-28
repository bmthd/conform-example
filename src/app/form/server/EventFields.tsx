import { NumberInputField, TextareaField, TextField } from "@/ui/form/primitive";
import { fromObject } from "@/utils/fromObject";
import { getFieldsetProps } from "@conform-to/react";
import { Button, Fieldset, Legend, VStack } from "@yamada-ui/react";
import { FC } from "react";
import { useEventForm } from "./hooks";

export const EventFields: FC<{
  form: ReturnType<typeof useEventForm>["form"];
  field: ReturnType<typeof useEventForm>["field"];
}> = ({ form, field }) => {
  return (
    <>
      <Fieldset {...getFieldsetProps(field.basicInfo)}>
        <Legend>基本情報</Legend>
        {fromObject(field.basicInfo.getFieldset())((field) => (
          <>
            <TextField name={field.eventName.name} label="イベント名" />
            <VStack as={Fieldset} {...getFieldsetProps(field.schedule)}>
              {field.schedule.getFieldList().map((meta, index) => {
                const field = meta.getFieldset();
                return (
                  <>
                    <Legend>スケジュール</Legend>
                    <TextField name={field.date.name} label="日付" />
                    <TextField name={field.startTime.name} label="開始時間" />
                    <TextField name={field.endTime.name} label="終了時間" />
                    <NumberInputField name={field.numberOfParticipants.name} label="参加人数" />
                    <Button
                      type="submit"
                      {...form.remove.getButtonProps({ name: meta.name, index })}
                    >
                      削除
                    </Button>
                  </>
                );
              })}
            </VStack>
          </>
        ))}
      </Fieldset>
      {/* <SelectField name={field.entryOption} label="参加方法" options={entryOptions} /> */}
      <TextareaField name={field.enquete} label="アンケート" />
    </>
  );
};
