import { PropsWithChildren } from "react";
import Styles from "./Title.module.scss";

type Props = {};

export const Title = ({ children }: PropsWithChildren<Props>) => {
	return <h1 className={Styles.title}>{children}</h1>;
};
