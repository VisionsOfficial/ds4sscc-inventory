import { Link } from "react-router-dom";
import Styles from "./Nav.module.scss";

export const Nav = () => {
	return (
		<nav className={Styles.Nav}>
			<ul>
				<li>
					<Link to="/">Home</Link>
					<a href="https://www.ds4sscc.eu/">about</a>
					<a href="https://www.ds4sscc.eu/contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
};
