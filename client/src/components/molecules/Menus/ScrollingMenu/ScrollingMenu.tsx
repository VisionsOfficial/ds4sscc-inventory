import React, { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./ScrollingMenu.module.scss";
import { Link } from "react-router-dom";
import { Burger } from "../../../atoms/Menus/Burger/Burger";

type ScrollingMenuProps = {
  closing: () => void;
};

export const ScrollingMenu = ({
  closing,
}: PropsWithChildren<ScrollingMenuProps>) => {
  const [closingAnimation, setClosingAnimation] = useState(false);

  const handleCloseMenu = () => {
    setClosingAnimation(true);
  };

  useEffect(() => {
    if (!closingAnimation) return;
    setTimeout(() => {
      setClosingAnimation(false);
      closing();
    }, 200);
  }, [closingAnimation, closing]);

  return (
    <div
      className={Styles.backdrop}
      onClick={() => {
        handleCloseMenu();
      }}
    >
      <aside
        className={`${Styles.ScrollingMenu} ${
          closingAnimation ? Styles.closeMenu : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Burger
          className={Styles.burger}
          isOpen={closingAnimation ? false : true}
          onClick={() => {
            handleCloseMenu();
          }}
        />
        <ul className={Styles.sideMenu}>
          <li>
            <Link
              to="/"
              onClick={() => {
                handleCloseMenu();
              }}
            >
              Home
            </Link>
            <a
              href="https://www.ds4sscc.eu/"
              onClick={() => {
                handleCloseMenu();
              }}
            >
              about
            </a>
            <a
              href="https://www.ds4sscc.eu/contact"
              onClick={() => {
                handleCloseMenu();
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};
