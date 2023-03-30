import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/atoms/Loader/Loader";
import { BuildingBlockForm } from "../../components/molecules/Forms/BuildingBlockForm";
import { ReferenceForm } from "../../components/molecules/Forms/ReferenceForm";
import { StandardSpecForm } from "../../components/molecules/Forms/StandardSpecForm";
import { useAPIDataStates } from "../../hooks/api/useAPIDataStates";
import Styles from "./EditResourcePage.module.scss";

type EditResourcePageProps = {};

export const EditResourcePage =
	({}: PropsWithChildren<EditResourcePageProps>) => {
		const { resource, id } = useParams();
		const navigate = useNavigate();

		const { data, setData, error, setError, loading, setLoading } =
			useAPIDataStates<any | null>(null);

		const [submitting, setSubmitting] = useState(false);

		const handleSubmit = async (v: any, resource: string) => {
			setSubmitting(true);

			const res = await fetch(`/api/${resource}/${id}`, {
				method: "PUT",
				headers: {
					"content-type": "application/json",
					"x-ds4sscc-auth": sessionStorage.getItem("adminToken") || "",
				},
				body: JSON.stringify(v),
			});
			const data = await res.json();
			console.log(data);
			setSubmitting(false);
			navigate("/admin/portal");
		};

		useEffect(() => {
			if (!resource || !id) return;
			let isMounted = true;

			const getData = async () => {
				try {
					const res = await fetch(`/api/${resource}/${id}`);
					const data = await res.json();

					if (isMounted) setData(data);
				} catch (err) {
					console.log(err);
					if (isMounted) setError(true);
				} finally {
					if (isMounted) setLoading(false);
				}
			};

			getData();

			return () => {
				isMounted = false;
			};
		}, [resource, id]);

		if (loading || submitting) return <Loader />;
		if (error || !data) return <>Error</>;

		return (
			<div className={Styles.EditResourcePage}>
				<h1>Edit resource</h1>
				{data?.brand_name ? (
					<div>
						<h2>{data.brand_name}</h2>
						<ReferenceForm
							data={data}
							onSubmit={(v) => {
								handleSubmit(v, resource || "");
							}}
						/>
					</div>
				) : (
					<>
						{data?.relevance ? (
							<div>
								<h2>{data.name}</h2>
								<StandardSpecForm
									data={data}
									onSubmit={(v) => {
										handleSubmit(v, resource || "");
									}}
								/>
							</div>
						) : (
							<div>
								<h2>{data.name}</h2>
								<BuildingBlockForm
									data={data}
									onSubmit={(v) => handleSubmit(v, resource || "")}
								/>
							</div>
						)}
					</>
				)}
			</div>
		);
	};
