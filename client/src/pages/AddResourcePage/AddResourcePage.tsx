import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/atoms/Button/Button";
import { Input } from "../../components/atoms/Input/Input";
import { Label } from "../../components/atoms/Label/Label";
import Loader from "../../components/atoms/Loader/Loader";
import { BuildingBlockForm } from "../../components/molecules/Forms/BuildingBlockForm";
import { ReferenceForm } from "../../components/molecules/Forms/ReferenceForm";
import { StandardSpecForm } from "../../components/molecules/Forms/StandardSpecForm";
import { MATURITY, MIMS, SCOPE } from "../../data/filter";
import { useObjectArrayData } from "../../hooks/api/useObjectArrayData";
import { useUniqueObjectData } from "../../hooks/api/useUniqueObjectData";
import {
	IBuildingBlock,
	IImplementation,
	IStandardSpecification,
} from "../../types";
import Styles from "./AddResourcePage.module.scss";

export const AddResourcePage = () => {
	const { resource } = useParams();
	const navigate = useNavigate();

	const submitFormData = async (formData: any) => {
		const res = await fetch(`/api/${resource}`, {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"content-type": "application/json",
				"x-ds4sscc-auth": sessionStorage.getItem("adminToken") || "",
			},
		});
		navigate("/admin/portal");
	};

	return (
		<div className={Styles.AddResourcePage}>
			{resource === "specifications" || resource === "standards" ? (
				<StandardSpecForm onSubmit={submitFormData} />
			) : null}
			{resource === "implementations" && (
				<ReferenceForm onSubmit={submitFormData} />
			)}
			{resource === "buildingblocks" && (
				<BuildingBlockForm onSubmit={submitFormData} />
			)}
		</div>
	);
};

export const AdminEditResourcePage = () => {
	const { resource, id } = useParams();
	const navigate = useNavigate();

	const { data, error, loading } = useUniqueObjectData({
		id: id || "",
		resource: (resource as any) || "",
	});

	const submitFormData = async (formData: any) => {
		const res = await fetch(`/api/${resource}`, {
			method: "PUT",
			body: JSON.stringify(formData),
			headers: {
				"content-type": "application/json",
				"x-ds4sscc-auth": sessionStorage.getItem("adminToken") || "",
			},
		});
		navigate("/admin/portal");
	};

	if (loading) return <Loader />;
	if (error || !data) return <>Error</>;

	return (
		<div className={Styles.AddResourcePage}>
			{resource === "specifications" || resource === "standards" ? (
				<StandardSpecForm onSubmit={submitFormData} data={data} />
			) : null}
			{resource === "implementations" && (
				<ReferenceForm onSubmit={submitFormData} data={data} />
			)}
			{resource === "buildingblocks" && (
				<BuildingBlockForm onSubmit={submitFormData} data={data} />
			)}
		</div>
	);
};
