import { FormStateInput } from "@conform-to/react";
import Form from "next/form";
import { EventFields } from "./EventFields";
import { Provider } from "./provider";

const action = () => {};

export default function Page() {
  return (
    <Provider>
      <Form action={action}>
        <EventFields id="eventRegister" />
        <FormStateInput />
      </Form>
    </Provider>
  );
}
