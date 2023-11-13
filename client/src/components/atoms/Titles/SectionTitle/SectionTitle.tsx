import { PropsWithChildren } from "react";
import Styles from "./SectionTitle.module.scss";

type SectionTitleProps = {
  className?: string;
};

export const SectionTitle = ({
  className,
  children,
}: PropsWithChildren<SectionTitleProps>) => {
  return (
    <h4 className={`${Styles.SectionTitle} ${className ? className : ""}`}>
      {children}
    </h4>
  );
};
