import { useForm } from "@conform-to/react";
import { getValibotConstraint, parseWithValibot } from "conform-to-valibot";
import { EventRegisterInput, schema } from "../_common/schema";

const initialValue: EventRegisterInput = {
  basicInfo: {
    eventName: "",
    numberOfParticipants: 0,
    eventDate: [],
    tag: [],
  },
  entryOption: "online",
  enquete: "",
};

export const useEventRegisterForm = (defaultValue: EventRegisterInput = initialValue) => {
  return useForm({
    id: defaultValue === initialValue ? "eventRegister" : "eventEdit",
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    constraint: getValibotConstraint(schema),
    defaultValue,
    onValidate: ({ formData }) => {
      return parseWithValibot(formData, { schema });
    },
  });
};
