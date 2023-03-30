import { PropsWithChildren } from "react";
import { useParams } from "react-router-dom";
import { useUniqueObjectData } from "../../hooks/api/useUniqueObjectData";
import { IStandardSpecification } from "../../types";
import Styles from "./StandardPage.module.scss";

type StandardPageProps = {};

export const StandardPage = ({}: PropsWithChildren<StandardPageProps>) => {
	const { id } = useParams();

	const { data, loading, error } = useUniqueObjectData<IStandardSpecification>({
		id: id || "",
		resource: "standards",
	});

	if (loading) return <>Loading</>;
	if (error || !data) return <>Error</>;

	return (
		<div className={Styles.StandardPage}>
			<div>
				<h1>{data.name}</h1>
				<table>
					<tbody>
						<tr>
							<td>Publisher</td>
							<td>{data.publisher}</td>
						</tr>
						<tr>
							<td>Relevance</td>
							<td>{data.relevance}</td>
						</tr>
						<tr>
							<td>Link</td>
							<td>
								<a href={data.link} target="_blank">
									{data.link}
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
