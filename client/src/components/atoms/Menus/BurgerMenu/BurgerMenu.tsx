import { PropsWithChildren, useState } from "react";
import Styles from "./BurgerMenu.module.scss";
import { ScrollingMenu } from "../../../molecules/Menus/ScrollingMenu/ScrollingMenu";
import { Burger } from "../Burger/Burger";

type BurgerMenuProps = {};

export const BurgerMenu = ({}: PropsWithChildren<BurgerMenuProps>) => {
  const [isOpen, setIsOpen] = useState(false);

  const updateOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${Styles.BurgerMenu} ${isOpen ? Styles.open : ""}`}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <Burger isOpen={isOpen} />
      {isOpen && <ScrollingMenu closing={() => updateOpenMenu()} />}
    </div>
  );
};
