"use client";
import { FormProvider, FormStateInput, getFormProps } from "@conform-to/react";
import { Button, Card, Container, HStack } from "@yamada-ui/react";
import Form from "next/form";
import { EventFields } from "./EventFields";
import { useEventForm } from "./hooks";

export default function Page() {
  const { form, field, action } = useEventForm();

  return (
    <Card as={Container}>
      <FormProvider context={form.context}>
        <Form action={action} {...getFormProps(form)}>
          <EventFields form={form} field={field} />
          <HStack>
            <Button type="reset" {...form.reset.getButtonProps()}>
              リセット
            </Button>
            <Button type="submit">送信</Button>
          </HStack>
          <FormStateInput />
        </Form>
      </FormProvider>
    </Card>
  );
}
