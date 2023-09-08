import { PropsWithChildren } from "react";
import Styles from "./TextWithIcon.module.scss";

type TextWithIconProps = {
  variantIcon?: "check";
};

export const TextWithIcon = ({
  variantIcon = "check",
  children,
}: PropsWithChildren<TextWithIconProps>) => {
  const setIcon = () => {
    switch (variantIcon) {
      case "check":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#17214e"
            viewBox="0 0 256 256"
          >
            <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
          </svg>
        );
        break;

      default:
        break;
    }
  };

  return (
    <div className={Styles.TextWithIcon}>
      {setIcon()}
      <p>{children}</p>
    </div>
  );
};