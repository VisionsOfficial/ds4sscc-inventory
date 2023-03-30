import { PropsWithChildren, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "../../components/atoms/Input/Input";
import { Label } from "../../components/atoms/Label/Label";
import Loader from "../../components/atoms/Loader/Loader";
import { ReferenceForm } from "../../components/molecules/Forms/ReferenceForm";
import { StandardSpecForm } from "../../components/molecules/Forms/StandardSpecForm";
import { useUniqueObjectData } from "../../hooks/api/useUniqueObjectData";
import {
	IBuildingBlock,
	IImplementation,
	IStandardSpecification,
} from "../../types";
import Styles from "./SuggestionSubmitPage.module.scss";

const SUCCESS_TEXT =
	"Your suggestion was taken into account and will be reviewed by an administrator for validation.";

export const SuggestionSubmitPage = () => {
	const { id } = useParams();
	const [filter, setFilter] = useState(0);
	const [submitting, setSubmitting] = useState(false);

	const contactPersonRef = useRef<HTMLInputElement>(null);
	const contactOrganizationRef = useRef<HTMLInputElement>(null);
	const contactEmailRef = useRef<HTMLInputElement>(null);

	const { data, loading, error } = useUniqueObjectData<IBuildingBlock>({
		id: id || "",
		resource: "buildingblocks",
	});

	const handleSubmit = async (
		values: any,
		type: "standard" | "specification" | "implementation"
	) => {
		setSubmitting(true);
		const payload: any = {
			contact: {
				name: contactPersonRef.current?.value || "",
				organization: contactOrganizationRef.current?.value || "",
				email: contactEmailRef.current?.value || "",
			},
			buildingBlock: id,
			...values,
		};

		const { name, organization, email } = payload.contact;
		if (!name || !organization || !email)
			return alert("Please fill in your contact info");

		if (type === "implementation") {
			const res = await fetch("/api/suggestions/implementation", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (res.status === 201) {
				alert(SUCCESS_TEXT);
			}
		} else {
			const res = await fetch("/api/suggestions/standardspec/" + type, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (res.status === 201) {
				alert(SUCCESS_TEXT);
			}
		}

		setSubmitting(false);
	};

	if (loading) return <Loader />;
	if (error) return <>Error</>;

	return (
		<div className={Styles.SuggestionSubmitPage}>
			<div className={Styles.Header}>
				<h1>Submit your suggestion</h1>
				<h2>{data?.name}</h2>
			</div>
			<div className={Styles.Filters}>
				{["Standards", "Specifications", "Implementations"].map((el, i) => (
					<div
						key={el}
						className={`${Styles.filter} ${
							filter === i + 1 ? Styles.filterSelected : ""
						}`}
						onClick={() => {
							setFilter(i + 1);
						}}
					>
						<span>{el}</span>
					</div>
				))}
			</div>

			<div className={Styles.Contact}>
				<div className={Styles.formGroup}>
					<Label>Contact person</Label>
					<Input type="text" ref={contactPersonRef} />
				</div>
				<div className={Styles.formGroup}>
					<Label>Organization</Label>
					<Input type="text" ref={contactOrganizationRef} />
				</div>
				<div className={Styles.formGroup}>
					<Label>Email</Label>
					<Input type="text" ref={contactEmailRef} />
				</div>
			</div>

			<div className={Styles.StandSpecImpl}>
				{filter === 1 && (
					<StandardSpecForm
						onSubmit={(v) => {
							handleSubmit(v, "standard");
						}}
					/>
				)}

				{filter === 2 && (
					<StandardSpecForm
						onSubmit={(v) => {
							handleSubmit(v, "specification");
						}}
					/>
				)}

				{filter === 3 && (
					<ReferenceForm
						onSubmit={(v) => {
							handleSubmit(v, "implementation");
						}}
					/>
				)}
			</div>
		</div>
	);
};
