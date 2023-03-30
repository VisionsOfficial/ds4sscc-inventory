import { PropsWithChildren } from "react";
import Styles from "./Label.module.scss";

type LabelProps = {};

export const Label = ({ children }: PropsWithChildren<LabelProps>) => {
	return <label className={Styles.Label}>{children}</label>;
};
