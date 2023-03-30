import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./ClickableItem.module.scss";

type ClickableItemProps = {
	link: string;
};

export const ClickableItem = ({
	children,
	link,
}: PropsWithChildren<ClickableItemProps>) => {
	const navigate = useNavigate();
	return (
		<span
			className={Styles.ClickableItem}
			onClick={() => {
				navigate(link);
			}}
		>
			{children}
		</span>
	);
};
