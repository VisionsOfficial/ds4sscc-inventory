import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Nav.module.scss";

export const Nav = () => {
	return (
		<nav className={Styles.Nav}>
			<ul>
				<li>
					<Link to="/">Home</Link>
					<a href="https://www.skillsdataspace.eu/library/methodology-for-categorisation-and-assessment-of-existing-initiatives-in-skills-and-educational-data/">
						about
					</a>
					<a href="https://www.skillsdataspace.eu/contact-us/">Contact</a>
				</li>
			</ul>
		</nav>
	);
};
