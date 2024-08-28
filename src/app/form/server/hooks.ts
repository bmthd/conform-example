import { useForm } from "@conform-to/react";
import { useNotice } from "@yamada-ui/react";
import { getValibotConstraint, parseWithValibot } from "conform-to-valibot";
import { useActionState, useEffect } from "react";
import { EventRegisterInput, schema } from "../_common/schema";
import { editAction, registerAction } from "./actinos";

const initialValue = {
  basicInfo: {
    eventName: "",
    tag: [],
    schedule: [
      { date: new Date(), startTime: new Date(), endTime: new Date(), numberOfParticipants: 0 },
    ],
  },
  entryOption: "online",
  enquete: "",
} as const satisfies EventRegisterInput;

export const useEventForm = (editData?: { id: string; initialValue: EventRegisterInput }) => {
  const defaultValue = editData ? editData.initialValue : initialValue;
  const [state, action, isPending] = useActionState(
    editData ? editAction.bind(null, editData.id) : registerAction,
    { status: "idle", submission: { initialValue: defaultValue } },
  );
  const [form, field] = useForm({
    id: defaultValue ? "eventRegister" : "eventEdit",
    defaultValue,
    lastResult: state.submission,
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    constraint: getValibotConstraint(schema),
    onValidate: ({ formData }) => {
      return parseWithValibot(formData, { schema });
    },
  });
  const notice = useNotice();
  useEffect(() => {
    if (state.status === "success") {
      form.reset();
      notice({ status: "success", title: state.message });
    }
  });
  return { form, field, action, isPending };
};
