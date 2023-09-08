import { PropsWithChildren } from "react";
import Styles from "./TableBody.module.scss";

type TableBodyProps = {};

export const TableBody = ({ children }: PropsWithChildren<TableBodyProps>) => {
  return <tbody className={Styles.TableBody}>{children}</tbody>;
};
