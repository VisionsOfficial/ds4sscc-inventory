import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/atoms/Button/Button";
import Loader from "../../components/atoms/Loader/Loader";
import { ReferenceForm } from "../../components/molecules/Forms/ReferenceForm";
import { StandardSpecForm } from "../../components/molecules/Forms/StandardSpecForm";
import { useAPIDataStates } from "../../hooks/api/useAPIDataStates";
import Styles from "./AdminReviewPage.module.scss";

type AdminReviewPageProps = {};

export const AdminReviewPage =
	({}: PropsWithChildren<AdminReviewPageProps>) => {
		const { resource, id } = useParams();
		const navigate = useNavigate();

		const { data, setData, error, setError, loading, setLoading } =
			useAPIDataStates<any | null>(null);

		const [submitting, setSubmitting] = useState(false);

		const handleValidation = async (
			v: any,
			type: "standard" | "specification" | "implementation"
		) => {
			const payload = {
				...v,
				buildingBlock: data?.related_building_block?._id,
			};

			setSubmitting(true);

			const res = await fetch(`/api/suggestions/${id}/validate/${resource}`, {
				method: "POST",
				headers: {
					"content-type": "application/json",
					"x-ds4sscc-auth": sessionStorage.getItem("adminToken") || "",
				},
				body: JSON.stringify(payload),
			});

			if (res.status !== 201) {
				return alert("Something went wrong when validating suggestion");
			}

			const d = await res.json();
			console.log(d);

			setSubmitting(false);
			navigate("/admin/portal");
		};

		const handleRejection = async () => {
			setSubmitting(true);

			const res = await fetch(`/api/suggestions/${id}/deny/${resource}`, {
				method: "DELETE",
				headers: {
					"content-type": "application/json",
					"x-ds4sscc-auth": sessionStorage.getItem("adminToken") || "",
				},
			});

			if (res.status !== 200 && res.status !== 304) {
				alert("Something went wrong when rejecting the suggestion");
			}

			const d = await res.json();
			console.log(d);

			setSubmitting(false);
			navigate("/admin/portal");
		};

		useEffect(() => {
			if (!resource || !id) return;
			let isMounted = true;

			const getData = async () => {
				try {
					const res = await fetch(`/api/suggestions/${id}/${resource}`);
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

		if (loading) return <Loader />;
		if (error || !data) return <>Error</>;

		return (
			<div className={Styles.AdminReviewPage}>
				<h1>Suggestion review: {resource}</h1>
				<small>
					Submitted by {data?.contact?.name}{" "}
					{`<${data?.contact?.email}> ${data?.contact?.organization}`}
				</small>
				<br />
				<small>
					This standard suggestion was made on the following building block :{" "}
					<b>{data?.related_building_block?.name}</b> <br />
					If validated it will be automatically added to this building block
				</small>
				{data.type && (
					<StandardSpecForm
						data={data}
						onSubmit={(v) => {
							handleValidation(v, data.type);
						}}
						label={"Validate suggestion"}
					/>
				)}
				{!data.type && (
					<ReferenceForm
						data={data}
						onSubmit={(v) => handleValidation(v, "implementation")}
					/>
				)}
				<Button
					onClick={() => {
						handleRejection();
					}}
				>
					Reject suggestion
				</Button>
			</div>
		);
	};
