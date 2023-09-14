import { PropsWithChildren } from "react";
import Styles from "./TableHead.module.scss";

type TableHeadProps = {
  className?: string;
  variantColor?: "secondary" | "white";
};

export const TableHead = ({
  className,
  variantColor,
  children,
}: PropsWithChildren<TableHeadProps>) => {
  const setVariant = () => {
    let color = "";
    let classProps = className ? className : "";

    switch (variantColor) {
      case "secondary":
        color = Styles.secondary;
        break;
      case "white":
        color = Styles.white;

      default:
        break;
    }

    return [Styles.TableHead, classProps, color].join(" ");
  };

  return <thead className={setVariant()}>{children}</thead>;
};
