import * as v from "valibot";

export const schema = v.required(
  v.object({
    basicInfo: v.object({
      eventName: v.string(),
      tag: v.array(v.string()),
      schedule: v.array(
        v.object({
          date: v.date(),
          startTime: v.date(),
          endTime: v.date(),
          numberOfParticipants: v.number(),
        }),
      ),
    }),
    entryOption: v.picklist(["online", "offline"]),
    enquete: v.optional(v.pipe(v.string(), v.maxLength(4000, "4000文字以内で入力してください"))),
  }),
  "必須項目です。",
);

export type EventRegisterInput = v.InferInput<typeof schema>;
