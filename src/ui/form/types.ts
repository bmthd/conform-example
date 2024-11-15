import { type FieldName } from "@conform-to/react";
import { type ReactNode } from "react";

/** 2つの入力欄をkey valueペアで持つフィールドを表す型 */
export type DynamicParam<T extends string, U extends string> = {
  [K in T | U]: string | undefined;
};

/**
 * input要素に入力可能な値の型
 */
type Inputtable =
  | string
  | string[]
  | number
  | boolean
  | Date
  | (string | undefined)[]
  | undefined
  | DynamicParam<string, string>[];

/**
 * フィールドのプロパティ
 */
export type FieldProps<T extends Inputtable = Inputtable> = {
  /** フィールド名 Conformの`field.fieldName.name`を使用する */
  name: FieldName<T, Record<string, unknown>, string[]>;
  /** ヘルパーメッセージ */
  helperMessage?: string;
  /** ラベル */
  label?: ReactNode;
};
