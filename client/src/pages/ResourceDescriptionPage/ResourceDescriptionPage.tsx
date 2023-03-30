import { PropsWithChildren } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/atoms/Button/Button";
import Loader from "../../components/atoms/Loader/Loader";
import { Title } from "../../components/atoms/Title/Title";
import { useUniqueObjectData } from "../../hooks/api/useUniqueObjectData";
import { IImplementation, IStandardSpecification } from "../../types";
import Styles from "./ResourceDescriptionPage.module.scss";

type ResourceDescriptionPageProps = {};

function isStandardSpec(
	el: IStandardSpecification | IImplementation
): el is IStandardSpecification {
	return "name" in el;
}

export const ResourceDescriptionPage =
	({}: PropsWithChildren<ResourceDescriptionPageProps>) => {
		const { resource, id } = useParams();
		const navigate = useNavigate();

		const { data, loading, error } = useUniqueObjectData<
			IStandardSpecification | IImplementation
		>({
			id: id || "",
			resource: (resource as any) || "",
		});

		if (loading) return <Loader />;
		if (!data || error)
			return (
				<section>
					<Title>Sorry, this resource could not be found</Title>
					<Button onClick={() => navigate("/")}>Return to home screen</Button>
				</section>
			);

		return (
			<div className={Styles.ResourceDescriptionPage}>
				<section>
					<div>
						<img src={""} alt={""} />
						<Title>{isStandardSpec(data) ? data.name : data.brand_name}</Title>
					</div>

					{/* Relative to section */}
					<div className={Styles.websiteBlock}>
						{/* TODO: window.open has some issues in safari */}
						{data ? (
							<Button
								className="primary"
								onClick={() => {
									window.open(
										decodeURIComponent(
											(isStandardSpec(data)
												? data.link
												: data.link_reference_page) || ""
										)
									);
								}}
							>
								View website
							</Button>
						) : null}
					</div>
				</section>

				<section>
					<table>
						<tbody>
							{isStandardSpec(data) ? (
								<>
									<tr>
										<td>Relevance</td>
										<td>{data.relevance}</td>
									</tr>
									<tr>
										<td>Publisher</td>
										<td>{data.publisher.join(", ")}</td>
									</tr>
								</>
							) : (
								<>
									<tr>
										<td>Brand Name</td>
										<td>{data.brand_name}</td>
									</tr>
									<tr>
										<td>Provider</td>
										<td>{data.provider}</td>
									</tr>
									<tr>
										<td>Repository</td>
										<td>
											<a href={data.link_repository}>
												{data.link_repository}
											</a>
										</td>
									</tr>
								</>
							)}
						</tbody>
					</table>
				</section>
			</div>
		);
	};
