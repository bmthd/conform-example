import { DatePickerField } from "@/ui/form/controled";
import { NumberInputField, TextareaField, TextField } from "@/ui/form/primitive";
import { fromObject } from "@/utils/fromObject";
import { getFieldsetProps } from "@conform-to/react";
import { Button, Fieldset, HStack, Legend, VStack } from "@yamada-ui/react";
import { ComponentProps, FC } from "react";
import { useEventForm } from "./hooks";
import { Table } from "@yamada-ui/table";
import { Prettify } from "valibot";

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
              <Legend>スケジュール</Legend>
              {field.schedule.getFieldList().map(({ name, getFieldset }, index) => {
                const field = getFieldset();
                return (
                  <HStack key={JSON.stringify(field)}>
                    <DatePickerField name={field.date.name} label="日付" />
                    <DatePickerField name={field.startTime.name} label="開始時間" />
                    <DatePickerField name={field.endTime.name} label="終了時間" />
                    <NumberInputField name={field.numberOfParticipants.name} label="参加人数" />
                    <Button type="submit" {...form.remove.getButtonProps({ name, index })}>
                      削除
                    </Button>
                  </HStack>
                );
              })}
              <Button type="submit" {...form.insert.getButtonProps({ name: field.schedule.name })}>
                追加
              </Button>
            </VStack>
          </>
        ))}
      </Fieldset>
      {/* <SelectField name={field.entryOption} label="参加方法" options={entryOptions} /> */}
      <TextareaField name={field.enquete.name} label="アンケート" />
      <Table />
    </>
  );
};

type A = Prettify<ComponentProps<typeof Table>>