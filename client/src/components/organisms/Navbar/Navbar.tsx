import { PropsWithChildren } from "react";
import Styles from "./Navbar.module.scss";

import logo from "../../../assets/imgs/Logo_Color.png";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../molecules/Nav/Nav";

type Props = {};

export const Navbar = ({}: PropsWithChildren<Props>) => {
  const navigate = useNavigate();

  return (
    <div className={Styles.Navbar}>
      <div>
        <img
          src={logo}
          alt="Data space for smart cities logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <Nav />
      {/* <div>
				<button onClick={() => navigate("/newproject")}>
					Add your project
				</button>
			</div> */}
    </div>
  );
};
