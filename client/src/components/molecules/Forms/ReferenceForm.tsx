import { useRef } from "react";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";

import Styles from "./Forms.module.scss";

type FormProps = {
	onSubmit: (payload: any) => any;
	data?: any;
};

export const ReferenceForm = ({ onSubmit, data }: FormProps) => {
	const nameRef = useRef<HTMLInputElement>(null);
	const providerRef = useRef<HTMLInputElement>(null);
	const link_reference_pageRef = useRef<HTMLInputElement>(null);
	const linkRef = useRef<HTMLInputElement>(null);

	const handleSubmit = () => {
		const payload = {
			brand_name: nameRef.current?.value,
			provider: providerRef.current?.value,
			link_reference_page: link_reference_pageRef.current?.value,
			link_repository: linkRef.current?.value,
		};

		onSubmit(payload);

		if (nameRef.current) nameRef.current.value = "";
		if (providerRef.current) providerRef.current.value = "";
		if (link_reference_pageRef.current)
			link_reference_pageRef.current.value = "";
		if (linkRef.current) linkRef.current.value = "";
	};

	return (
		<div className={Styles.Form}>
			<Label>Brand Name</Label>
			<Input type="text" ref={nameRef} defaultValue={data?.brand_name || ""} />
			<Label>Provider</Label>
			<Input
				type="text"
				ref={providerRef}
				defaultValue={data?.provider || ""}
			/>
			<Label>Link to reference page</Label>
			<Input
				type="text"
				ref={link_reference_pageRef}
				defaultValue={data?.link_reference_page || ""}
			/>
			<Label>Link to repository (if OS)</Label>
			<Input
				type="text"
				ref={linkRef}
				defaultValue={data?.link_repository || ""}
			/>
			<Button
				onClick={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				Submit
			</Button>
		</div>
	);
};
