"use server";

import { parseWithValibot } from "conform-to-valibot";
import { schema } from "../_common/schema";
import { FormState } from "./types";

export const registerAction = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const submission = parseWithValibot(formData, { schema });
  if (submission.status !== "success") {
    return { status: "error", submission: submission.reply() };
  }

  console.log("registerAction", submission.value);

  return { status: "success", message: "登録しました", submission: submission.reply() };
};

export const editAction = async (
  id: string,
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const submission = parseWithValibot(formData, { schema });
  if (submission.status !== "success") {
    return { status: "error", submission: submission.reply() };
  }

  console.log("editAction", submission.value);

  return { status: "success", message: "更新しました", submission: submission.reply() };
};
