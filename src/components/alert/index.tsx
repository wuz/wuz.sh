import { ReactNode } from "react";
import { alert } from "./alert.css";

type AlertProps = {
  children: ReactNode;
};

const Alert = ({ children }: AlertProps) => {
  return <div className={alert}>{children}</div>;
};

export default Alert;
