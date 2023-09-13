import { PropsWithChildren } from "react";
import Styles from "./MaturityCategory.module.scss";

type MaturityCategoryProps = {
  maturity: "quiteMature" | "evolving" | "fewMature";
  colorDot?: boolean;
  className?: string;
};

export const MaturityCategory = ({
  maturity,
  className,
  colorDot,
}: PropsWithChildren<MaturityCategoryProps>) => {
  const contentMaturity = () => {
    switch (maturity) {
      case "quiteMature":
        return "Quite mature";
      case "evolving":
        return "Evolving";
      case "fewMature":
        return "Few mature";
      default:
        return null;
    }
  };

  const setColorDot = () => {
    let color = "";
    switch (maturity) {
      case "quiteMature":
        color = Styles.quiteMature;
        break;
      case "evolving":
        color = Styles.evolving;
        break;
      case "fewMature":
        color = Styles.fewMature;
        break;

      default:
        break;
    }

    return [Styles.dot, color].join(" ");
  };

  const setProps = () => {
    let classProps = className ? className : "";

    return [Styles.MaturityCategory, classProps].join(" ");
  };

  return (
    <div className={setProps()}>
      {colorDot && <div className={setColorDot()}></div>}
      <span>{contentMaturity()}</span>
    </div>
  );
};
