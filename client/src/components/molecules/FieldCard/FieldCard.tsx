import { PropsWithChildren } from "react";
import Styles from "./FieldCard.module.scss";

type FieldCardProps = {
	title: string;
};

export const FieldCard = ({
	title,
	children,
}: PropsWithChildren<FieldCardProps>) => {
	return (
		<div className={Styles.FieldCard}>
			<div className={Styles.Header}>{title}</div>
			<div className={Styles.Body}>{children}</div>
		</div>
	);
};
