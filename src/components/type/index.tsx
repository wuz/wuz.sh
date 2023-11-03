import { ReactNode } from "react";
import { lead } from "./type.css";

type LeadProps = {
  children: ReactNode;
};

export const Lead = ({ children }: LeadProps) => {
  return <p className={lead}>{children}</p>;
};
