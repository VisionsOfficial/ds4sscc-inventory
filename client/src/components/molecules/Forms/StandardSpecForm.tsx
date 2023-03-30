import { useRef } from "react";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";

import Styles from "./Forms.module.scss";

type FormProps = {
	onSubmit: (payload: any) => any;
	data?: any;
	label?: string;
};

export const StandardSpecForm = ({
	onSubmit,
	data,
	label = "Submit",
}: FormProps) => {
	const nameRef = useRef<HTMLInputElement>(null);
	const relevanceRef = useRef<HTMLInputElement>(null);
	const publisherRef = useRef<HTMLInputElement>(null);
	const linkRef = useRef<HTMLInputElement>(null);

	const handleSubmit = () => {
		const payload = {
			name: nameRef.current?.value,
			relevance: relevanceRef.current?.value,
			publisher: publisherRef.current?.value
				?.split(",")
				?.map((el) => el.trim()),
			link: linkRef.current?.value,
		};

		onSubmit(payload);

		if (nameRef.current) nameRef.current.value = "";
		if (relevanceRef.current) relevanceRef.current.value = "";
		if (publisherRef.current) publisherRef.current.value = "";
		if (linkRef.current) linkRef.current.value = "";
	};

	return (
		<div className={Styles.Form}>
			<Label>Name</Label>
			<Input type="text" ref={nameRef} defaultValue={data?.name || ""} />
			<Label>Relevance</Label>
			<Input
				type="text"
				ref={relevanceRef}
				defaultValue={data?.relevance || ""}
			/>
			<Label>Publisher (comma seperated for multiple)</Label>
			<Input
				type="text"
				ref={publisherRef}
				defaultValue={data?.publisher?.join(", ") || ""}
			/>
			<Label>Link</Label>
			<Input type="text" ref={linkRef} defaultValue={data?.link || ""} />
			<Button
				onClick={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				{label}
			</Button>
		</div>
	);
};
