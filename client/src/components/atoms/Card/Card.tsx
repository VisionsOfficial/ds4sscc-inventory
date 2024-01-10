import { PropsWithChildren } from "react";
import Styles from "./Card.module.scss";

type CardProps = React.HTMLProps<HTMLDivElement> & {
  className?: string;
};

export const Card = (props: PropsWithChildren<CardProps>) => {
  const { className, ...rest } = props;

  const setProps = () => {
    let classProps = className ? className : "";

    return [Styles.Card, classProps].join(" ");
  };

  return <div {...rest} className={setProps()}></div>;
};
