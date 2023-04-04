import React, { useRef, useState } from "react";
import { MATURITY, MIMS, SCOPE } from "../../../data/filter";
import { useObjectArrayData } from "../../../hooks/api/useObjectArrayData";
import { IImplementation, IStandardSpecification } from "../../../types";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";
import Loader from "../../atoms/Loader/Loader";

import Styles from "./Forms.module.scss";

type FormProps = {
	onSubmit: (payload: any) => any;
	data?: any;
};

export const BuildingBlockForm = ({ onSubmit, data }: FormProps) => {
	const nameRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLInputElement>(null);

	const [refStandards, setRefStandards] = useState<string[]>(
		data?.related_standards?.map((s: IStandardSpecification) => s?._id) || []
	);
	const [refSpecifications, setRefSpecifications] = useState<string[]>(
		data?.related_specifications?.map((s: IStandardSpecification) => s?._id) ||
			[]
	);
	const [refImplementations, setRefImplementations] = useState<string[]>(
		data?.reference_implementations?.map((i: IImplementation) => i?._id) || []
	);
	const [mims, setMims] = useState<string[]>(data?.implemented_mims || []);

	const [recommended, setRecommended] = useState(
		data?.recommended_by_dssc || false
	);
	const [maturity, setMaturity] = useState(data?.maturity || "");
	const [scope, setScope] = useState(data?.scope || "");

	const {
		data: standards,
		loading: standardsLoading,
		error: standardsError,
	} = useObjectArrayData<IStandardSpecification>({ resource: "standards" });
	const {
		data: specifications,
		loading: specificationsLoading,
		error: specificationsError,
	} = useObjectArrayData<IStandardSpecification>({
		resource: "specifications",
	});
	const {
		data: implementations,
		loading: implementationsLoading,
		error: implementationsError,
	} = useObjectArrayData<IImplementation>({ resource: "implementations" });

	const handleToggleItem = (
		e: React.ChangeEvent<HTMLInputElement>,
		arr: string[],
		setState: any
	) => {
		const value = e.target.value;
		const newArr = [...arr];
		if (newArr.includes(value)) newArr.splice(newArr.indexOf(value), 1);
		else newArr.push(value);
		setState(newArr);
	};

	const handleSubmit = () => {
		if (maturity === "default" || !maturity) return alert("Missing maturity");
		if (scope === "default" || !scope) return alert("Missing scope");

		const payload = {
			name: nameRef.current?.value,
			description: descriptionRef.current?.value,
			related_standards: refStandards,
			related_specifications: refSpecifications,
			reference_implementations: refImplementations,
			implemented_mims: mims,
			recommended_by_dssc: recommended,
			maturity: maturity,
			scope: scope,
		};

		onSubmit(payload);
	};

	return (
		<div className={Styles.Form}>
			<div className={Styles.formgroup}>
				<Label>Name</Label>
				<Input type="text" ref={nameRef} defaultValue={data?.name} />
			</div>
			<div className={Styles.formgroup}>
				<Label>Description</Label>
				<Input
					type="text"
					ref={descriptionRef}
					defaultValue={data?.description}
				/>
			</div>
			<div className={Styles.formgroup}>
				<Label>Related Standards</Label>
				{standardsLoading && <Loader />}
				{!standardsError &&
					standards.map((s, i) => (
						<React.Fragment key={i}>
							<input
								type="checkbox"
								value={s._id}
								onChange={(e) => {
									handleToggleItem(e, refStandards, setRefStandards);
								}}
								defaultChecked={data?.related_standards?.find(
									(o: any) => o?._id === s._id
								)}
							/>
							<span> {s.name} </span>
						</React.Fragment>
					))}
			</div>
			<div className={Styles.formgroup}>
				<Label>Related Industry body Specifications</Label>
				{specificationsLoading && <Loader />}
				{!specificationsError &&
					specifications.map((s, i) => (
						<React.Fragment key={i}>
							<input
								type="checkbox"
								value={s._id}
								onChange={(e) => {
									handleToggleItem(e, refSpecifications, setRefSpecifications);
								}}
								defaultChecked={data?.related_specifications?.find(
									(o: any) => o?._id === s._id
								)}
							/>
							<span> {s.name} </span>
						</React.Fragment>
					))}
			</div>
			<div className={Styles.formgroup}>
				<Label>Reference implementations</Label>
				{implementationsLoading && <Loader />}
				{!implementationsError &&
					implementations.map((s, i) => (
						<React.Fragment key={i}>
							<input
								type="checkbox"
								value={s._id}
								onChange={(e) => {
									handleToggleItem(
										e,
										refImplementations,
										setRefImplementations
									);
								}}
								defaultChecked={data?.reference_implementations?.find(
									(o: any) => o?._id === s._id
								)}
							/>
							<span> {s.brand_name} </span>
						</React.Fragment>
					))}
			</div>
			<div className={Styles.formgroup}>
				<Label>Relevant MIMs</Label>
				{MIMS.map((mim, i) => (
					<React.Fragment key={i}>
						<input
							type="checkbox"
							value={mim}
							onChange={(e) => {
								handleToggleItem(e, mims, setMims);
							}}
							defaultChecked={data?.implemented_mims?.includes(mim)}
						/>
						<span> {mim} </span>
					</React.Fragment>
				))}
			</div>
			<div className={Styles.formgroup}>
				<Label>Recommended by DSSC</Label>
				<input
					type="radio"
					name="recommended"
					value="true"
					onChange={() => {
						setRecommended(true);
					}}
					defaultChecked={data?.recommended_by_dssc === true}
				/>{" "}
				Yes{" "}
				<input
					type="radio"
					name="recommended"
					value="false"
					onChange={() => {
						setRecommended(false);
					}}
					defaultChecked={data?.recommended_by_dssc === false}
				/>{" "}
				No{" "}
			</div>
			<div className={Styles.formgroup}>
				<Label>Maturity</Label>
				<select
					onChange={(e) => {
						setMaturity(e.target.value);
					}}
					defaultValue={data?.maturity}
				>
					<option value="default">Select...</option>
					{MATURITY.map((m) => (
						<option value={m} key={m}>
							{m}
						</option>
					))}
				</select>
			</div>
			<div className={Styles.formgroup}>
				<Label>Scope</Label>
				<select
					onChange={(e) => {
						setScope(e.target.value);
					}}
					defaultValue={data?.scope}
				>
					<option value="default">Select...</option>
					{SCOPE.map((s) => (
						<option value={s} key={s}>
							{s}
						</option>
					))}
				</select>
			</div>
			<Button onClick={() => handleSubmit()}>Submit</Button>
		</div>
	);
};
