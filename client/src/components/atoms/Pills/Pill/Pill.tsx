import { PropsWithChildren } from "react";
import Styles from "./Pill.module.scss";
import { useNavigate } from "react-router-dom";

type PillProps = {
  className?: string;
  variantColor?: "secondary";
  link?: string;
  navigate?: string;
};

export const Pill = ({
  className,
  variantColor,
  link,
  navigate,
  children,
}: PropsWithChildren<PillProps>) => {
  const domNavigate = useNavigate();

  const setProps = () => {
    let color = "";
    let classProps = className ? className : "";

    switch (variantColor) {
      case "secondary":
        color = Styles.secondary;
        break;

      default:
        break;
    }

    return [Styles.Pill, classProps, color].join(" ");
  };

  return (
    <div
      className={setProps()}
      style={navigate || link ? { cursor: "pointer" } : {}}
      onClick={() => {
        if (navigate) {
          domNavigate(navigate);
        }
        if (link) {
          window.open(link);
        }
      }}
    >
      {children}
    </div>
  );
};
