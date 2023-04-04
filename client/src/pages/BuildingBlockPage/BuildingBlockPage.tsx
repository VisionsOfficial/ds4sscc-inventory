import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/atoms/Button/Button";
import { ClickableItem } from "../../components/atoms/ClickableItem/ClickableItem";
import Loader from "../../components/atoms/Loader/Loader";
import { Title } from "../../components/atoms/Title/Title";
import { FieldCard } from "../../components/molecules/FieldCard/FieldCard";
import { useUniqueObjectData } from "../../hooks/api/useUniqueObjectData";
import { IBuildingBlock } from "../../types";
import Styles from "./BuildingBlockPage.module.scss";
import ExtraStyles from "../../components/molecules/ProjectFilter/ProjectFilter.module.scss";

export const BuildingBlockPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data, error, loading } = useUniqueObjectData<IBuildingBlock>({
		id: id || "",
		resource: "buildingblocks",
	});

	const getField = (field: string) => {
		if (loading) return "Loading ...";
		if (!data) return "An error occurred";
		if (Array.isArray((data as any)[field]))
			return ((data as any)[field] as string[]).join(", ");
		return (data as any)[field] || "Not informed";
	};

	if (loading) return <Loader />;

	return (
		<div className={Styles.BuildingBlockPage}>
			<section>
				<div className={Styles.Header}>
					<Title>{getField("name")}</Title>
					<p>{getField("description")}</p>
				</div>
			</section>

			{error ? (
				<section>
					<Title>Sorry, this project could not be found</Title>
					<Button onClick={() => navigate("/")}>Return to home screen</Button>
				</section>
			) : (
				<section>
					<FieldCard title="Related Standards">
						{data?.related_standards?.map((s) => (
							<ClickableItem key={s._id} link={`/resources/standards/${s._id}`}>
								{s.name}
							</ClickableItem>
						))}
					</FieldCard>
					<FieldCard title="Related Industry body Specifications">
						{data?.related_specifications?.map((s) => (
							<ClickableItem
								key={s._id}
								link={`/resources/specifications/${s._id}`}
							>
								{s.name}
							</ClickableItem>
						))}
					</FieldCard>
					<FieldCard title="Reference Implementations">
						{data?.reference_implementations?.map((s) => (
							<ClickableItem
								key={s._id}
								link={`/resources/implementations/${s._id}`}
							>
								{s.brand_name}
							</ClickableItem>
						))}
					</FieldCard>
					<FieldCard title="Relevant MIMs">
						<p>{data?.implemented_mims?.join(", ")}</p>
					</FieldCard>
					<FieldCard title="Scope">
						<p>{data?.scope}</p>
					</FieldCard>
					<FieldCard title="Maturity Level">
						<span
							className={`${
								ExtraStyles[
									data?.maturity?.toLowerCase().replaceAll(" ", "_") || ""
								] || ""
							}`}
							style={{ display: "flex" }}
						>
							<div className={`${ExtraStyles.circle}`} data-circle></div>{" "}
							<p>{data?.maturity}</p>
						</span>
					</FieldCard>
				</section>
			)}
			{!error && (
				<div className={Styles.footer}>
					<Button
						onClick={() => {
							navigate("/suggest/" + data?._id);
						}}
					>
						Suggest modifications
					</Button>
				</div>
			)}
		</div>
	);
};
