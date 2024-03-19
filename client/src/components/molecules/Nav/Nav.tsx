import { Link } from "react-router-dom";
import Styles from "./Nav.module.scss";
import { BurgerMenu } from "../../atoms/Menus/BurgerMenu/BurgerMenu";

export const Nav = () => {
  return (
    <nav className={Styles.Nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="https://www.ds4sscc.eu/about/the-project" target="_blank">
            About
          </Link>
          <Link to="https://www.ds4sscc.eu/contact" target="_blank">
            Contact
          </Link>
        </li>
      </ul>
      <BurgerMenu />
    </nav>
  );
};
