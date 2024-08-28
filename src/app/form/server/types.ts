import { type SubmissionResult } from "@conform-to/react";

export type FormState =
  | {
      status: "success";
      message: string;
      submission?: SubmissionResult;
    }
  | {
      status: "error";
      submission?: SubmissionResult;
    }
  | {
      status: "idle";
      submission?: SubmissionResult;
    };
