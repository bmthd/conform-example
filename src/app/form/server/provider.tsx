import { FormProvider } from "@conform-to/react";
import { FC, ReactNode } from "react";
import { useEventRegisterForm } from "./hooks";

export const Provider: FC<Readonly<{ children: ReactNode }>> = ({ children }) => {
  const [form] = useEventRegisterForm();
  return <FormProvider context={form.context}>{children}</FormProvider>;
};
