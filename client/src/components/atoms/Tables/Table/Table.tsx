import { PropsWithChildren } from "react";
import Styles from "./Table.module.scss";

type TableProps = {
  className?: string;
};

export const Table = ({
  className,
  children,
}: PropsWithChildren<TableProps>) => {
  return (
    <table className={`${Styles.Table} ${className ? className : ""}`}>
      {children}
    </table>
  );
};
