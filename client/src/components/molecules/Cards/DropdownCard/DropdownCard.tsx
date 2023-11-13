import { PropsWithChildren, useState } from "react";
import Styles from "./DropdownCard.module.scss";
import { Card } from "../../../atoms/Card/Card";

type DropdownCardProps = {
  title?: string;
  variantColor?: "secondary";
  iconInfo?: boolean;
  content?: "catalogue";
  className?: string;
  guideStep?: string | number;
  classNameActive?: string;
};

export const DropdownCard = ({
  title,
  variantColor,
  iconInfo,
  className = "",
  classNameActive = "",
  guideStep,
  children,
}: PropsWithChildren<DropdownCardProps>) => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive((prev) => !prev);
  };

  const setProps = () => {
    let color;
    let info = iconInfo ? Styles.info : "";
    let activeCard = active ? Styles.DropdownCardActive : "";
    let guide = guideStep ? Styles.guideStep : "";
    let classActive = classNameActive && active ? classNameActive : "";

    switch (variantColor) {
      case "secondary":
        color = Styles.secondary;
        break;

      default:
        break;
    }

    return [
      Styles.DropdownCard,
      color,
      info,
      activeCard,
      className,
      guide,
      classActive,
    ].join(" ");
  };

  return (
    <Card className={setProps()}>
      <header
        onClick={() => {
          handleActive();
        }}
      >
        {guideStep && <span className={Styles.guide}>{guideStep}</span>}
        {iconInfo && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            className={Styles.iconInfo}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        )}

        <h4>{title}</h4>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={Styles.iconPlus}
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </header>

      <div className={`${Styles.wrapper} ${active ? Styles.isOpen : ""}`}>
        {guideStep && <div></div>}
        <div className={Styles.inner}>{children}</div>
      </div>
    </Card>
  );
};
