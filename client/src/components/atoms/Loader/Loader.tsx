import React from "react";
import Styles from "./Loader.module.scss";

type Props = {};

const Loader = (props: Props) => {
	return (
		<div className={Styles.roller}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;
