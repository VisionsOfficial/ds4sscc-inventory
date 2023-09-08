import { PropsWithChildren } from "react";
import Styles from "./TableHead.module.scss";

type TableHeadProps = {
  className?: string;
};

export const TableHead = ({
  className,
  children,
}: PropsWithChildren<TableHeadProps>) => {
  return (
    <thead className={`${Styles.TableHead} ${className ? className : ""}`}>
      {children}
    </thead>
  );
};
