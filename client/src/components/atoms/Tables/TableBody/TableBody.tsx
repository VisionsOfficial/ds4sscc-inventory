import { PropsWithChildren } from "react";
import Styles from "./TableBody.module.scss";

type TableBodyProps = {
  className?: string;
  variantColor?: "white" | "primary";
};

export const TableBody = ({
  className,
  variantColor,
  children,
}: PropsWithChildren<TableBodyProps>) => {
  const setProps = () => {
    let color = "";
    let classProps = className ? className : "";

    switch (variantColor) {
      case "white":
        color = Styles.white;
        break;
      case "primary":
        color = Styles.primary;

      default:
        break;
    }

    return [Styles.TableBody, classProps, color].join(" ");
  };

  return <tbody className={setProps()}>{children}</tbody>;
};
