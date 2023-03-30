import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	forwardRef,
} from "react";
import Styles from "./Button.module.scss";

type BtnProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export const Button = forwardRef<HTMLButtonElement, BtnProps>((props, ref) => {
	return <button className={Styles.Input} ref={ref} {...props} />;
});
