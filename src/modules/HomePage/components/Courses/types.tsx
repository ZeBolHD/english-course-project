import { ReactNode } from "react";

export interface ListElementProps {
  name: string;
  children?: ReactNode;
  value?: string | number;
}
