import React, { PropsWithChildren } from "react";
import Styles from "./Burger.module.scss";

type BurgerProps = React.HTMLProps<HTMLDivElement> & {
  className?: string;
  isOpen?: boolean;
};

export const Burger = (props: PropsWithChildren<BurgerProps>) => {
  const { className, isOpen = false, ...rest } = props;

  const setProps = () => {
    let classProps = className ? className : "";
    let burgerToggle = isOpen ? Styles.BurgerOpen : "";

    return [Styles.Burger, classProps, burgerToggle].join(" ");
  };

  return (
    <div {...rest} className={setProps()}>
      <div className={Styles.bar}></div>
      <div className={Styles.bar}></div>
      <div className={Styles.bar}></div>
    </div>
  );
};
