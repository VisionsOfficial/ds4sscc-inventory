import { PropsWithChildren } from "react";
import Styles from "./Title.module.scss";

type Props = {
  className?: string;
};

export const Title = ({
  className = "",
  children,
}: PropsWithChildren<Props>) => {
  return <h1 className={`${Styles.title} ${className}`}>{children}</h1>;
};
