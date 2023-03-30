import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import Styles from "./Footer.module.scss";

import logoDS4S from "../../../assets/imgs/logo_white.png";
import logoEU from "../../../assets/imgs/eu_funded.png";
import { Copyright } from "../Copyright/Copyright";

type FooterProps = {};

export const Footer = ({}: PropsWithChildren<FooterProps>) => {
	return (
		<footer>
			<div className={Styles.Footer}>
				<div className={Styles.left}>
					<div className={Styles.leftHeader}>
						<div>
							<img style={{maxWidth: "150px"}} src={logoDS4S} alt={"DS4SSCC Logo"} /></div>
						<div>
							<img src={logoEU} alt={"EU Funded"} />
						</div>
					</div>
					<div>
						<p>
							Funded by the European Union. View and opinions expressed are
							however those of the author(s) only and do not necessarily reflect
							those of the European Union or the European Commission. Neither
							the European Union nor the grating authority can be held
							responsible for them.
						</p>
					</div>
				</div>
				<div className={Styles.mid}></div>
				<div className={Styles.right}>
					<ul>
						<li>
							<a href="https://www.ds4sscc.eu/">ABOUT</a>
						</li>
						<li>
							<a href="https://www.ds4sscc.eu/partners">PARTNERS</a>
						</li>
						<li>
							<a href="https://www.ds4sscc.eu/news">NEWS</a>
						</li>
						<li>
							<a href="https://www.ds4sscc.eu/contact">CONTACT US</a>
						</li>
					</ul>
				</div>
			</div>
			<Copyright />
		</footer>
	);
};
