import * as v from "valibot";

export const schema = v.required(
  v.object({
    basicInfo: v.object({
      eventName: v.string(),
      numberOfParticipants: v.number(),
      eventDate: v.array(v.date()),
      tag: v.array(v.string()),
    }),
    entryOption: v.picklist(["online", "offline"]),
    enquete: v.optional(v.pipe(v.string(), v.maxLength(4000, "4000文字以内で入力してください"))),
  }),
  "必須項目です。",
);

export type EventRegisterInput = v.InferInput<typeof schema>;
