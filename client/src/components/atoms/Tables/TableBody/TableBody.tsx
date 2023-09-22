import { PropsWithChildren } from "react";
import Styles from "./TableBody.module.scss";

type TableBodyProps = {
  className?: string;
  variantColor?: "white" | "primary";
  variantColorMobile?: "secondary";
};

export const TableBody = ({
  className,
  variantColor,
  variantColorMobile,
  children,
}: PropsWithChildren<TableBodyProps>) => {
  const setProps = () => {
    let color = "";
    let colorMobile = "";
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

    switch (variantColorMobile) {
      case "secondary":
        colorMobile = Styles.secondaryMobile;

      default:
        break;
    }

    return [Styles.TableBody, classProps, color, colorMobile].join(" ");
  };

  return <tbody className={setProps()}>{children}</tbody>;
};
