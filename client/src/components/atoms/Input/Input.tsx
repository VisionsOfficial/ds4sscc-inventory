import React, { forwardRef } from "react";
import Styles from "./Input.module.scss";

type Props = React.HTMLProps<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
	return <input className={Styles.Input} ref={ref} {...props} />;
});
