"use client";

import theme from "@/theme";
import { UIProvider } from "@yamada-ui/react";
import { FC, ReactNode } from "react";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <UIProvider theme={theme}>{children}</UIProvider>;
};
