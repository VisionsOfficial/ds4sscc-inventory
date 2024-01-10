import { PropsWithChildren } from "react";
import Styles from "./TableRow.module.scss";

type TableRowProps = {};

export const TableRow = ({ children }: PropsWithChildren<TableRowProps>) => {
  return <tr className={Styles.TableRow}>{children}</tr>;
};
