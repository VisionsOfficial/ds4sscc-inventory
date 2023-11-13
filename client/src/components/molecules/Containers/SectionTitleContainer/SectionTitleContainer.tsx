import { PropsWithChildren } from "react";
import Styles from "./SectionTitleContainer.module.scss";
import { SectionTitle } from "../../../atoms/Titles/SectionTitle/SectionTitle";

type SectionTitleContainerProps = {
  title?: string;
  className?: string;
};

export const SectionTitleContainer = ({
  title,
  className,
  children,
}: PropsWithChildren<SectionTitleContainerProps>) => {
  return (
    <section
      className={`${Styles.SectionTitleContainer} ${
        className ? className : ""
      }`}
    >
      {title && <SectionTitle>{title}</SectionTitle>}
      <div>{children}</div>
    </section>
  );
};
