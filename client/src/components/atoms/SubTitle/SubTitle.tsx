import { PropsWithChildren } from "react";
import Styles from "./SubTitle.module.scss";

type Props = {
	className?: string;
};

export const SubTitle = ({ className, children }: PropsWithChildren<Props>) => {
	return <h2 className={`${className} ${Styles.SubTitle}`}>{children}</h2>;
};
