import { PropsWithChildren, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/atoms/Button/Button";
import Loader from "../../components/atoms/Loader/Loader";
import { useBuildingBlocks } from "../../hooks/api/useBuildingBlocks";
import { useObjectArrayData } from "../../hooks/api/useObjectArrayData";
import { useSuggestions } from "../../hooks/api/useSuggestions";
import { IImplementation, IStandardSpecification } from "../../types";
import Styles from "./AdminPortal.module.scss";

type AdminPortalProps = {};

export const AdminPortal = ({}: PropsWithChildren<AdminPortalProps>) => {
	const [filters, setFilters] = useState({});
	const { buildingBlocks, loading, error } = useBuildingBlocks(filters);
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

	const {
		suggestions,
		error: suggestionsError,
		loading: suggestionsLoading,
	} = useSuggestions();

	const navigate = useNavigate();

	if (loading) return <Loader />;
	if (error || !buildingBlocks) return <>Error</>;

	return (
		<div className={Styles.AdminPortal}>
			<div className={Styles.Menu}>
				<ul>
					<li>
						<Link to="/admin/add/standards">Add standard</Link>
					</li>
					<li>
						<Link to="/admin/add/specifications">Add specification</Link>
					</li>
					<li>
						<Link to="/admin/add/implementations">
							Add reference implementation
						</Link>
					</li>
					<li>
						<Link to="/admin/add/buildingblocks">Add Building Block</Link>
					</li>
				</ul>
			</div>

			<div>
				{suggestionsLoading && <Loader />}
				{!suggestionsError && suggestions && (
					<>
						{suggestions.specifications?.length &&
						suggestions.standards?.length &&
						suggestions.implementations?.length ? (
							<h2>Suggestions to be reviewed</h2>
						) : null}
						{suggestions.standards?.length !== 0 && (
							<>
								<table>
									<thead>
										<tr>
											<th>Standards</th>
										</tr>
									</thead>
									<tbody>
										{suggestions.standards.map((s) => (
											<tr>
												<td key={s._id}>{s.name}</td>
												<td>
													<Button
														onClick={() => {
															navigate(
																`/admin/portal/suggestion/standard/${s._id}`
															);
														}}
													>
														Review
													</Button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</>
						)}
						{suggestions.specifications?.length !== 0 && (
							<>
								<table>
									<thead>
										<tr>
											<th>Specifications</th>
										</tr>
									</thead>
									<tbody>
										{suggestions.specifications.map((s) => (
											<tr>
												<td key={s._id}>{s.name}</td>
												<td>
													<Button
														onClick={() => {
															navigate(
																`/admin/portal/suggestion/specification/${s._id}`
															);
														}}
													>
														Review
													</Button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</>
						)}
						{suggestions.implementations?.length !== 0 && (
							<>
								<table>
									<thead>
										<tr>
											<th>Implementations</th>
										</tr>
									</thead>
									<tbody>
										{suggestions.implementations.map((s) => (
											<tr>
												<td key={s._id}>{s.brand_name}</td>
												<td>
													<Button
														onClick={() => {
															navigate(
																`/admin/portal/suggestion/implementation/${s._id}`
															);
														}}
													>
														Review
													</Button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</>
						)}
					</>
				)}
			</div>

			<div style={{ margin: "30px 0" }}>
				<h2>Resources on the inventory</h2>
				<table>
					<thead>
						<tr>
							<th>Building Blocks</th>
						</tr>
					</thead>
					<tbody>
						{buildingBlocks.map((bb, i) => (
							<tr key={`${bb.name}`}>
								<td>{bb.name}</td>
								<td>
									<Link to={`/admin/portal/edit/buildingblocks/${bb._id}`}>
										Edit
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div>
				{standardsLoading && <Loader />}
				<table>
					<thead>
						<tr>
							<th>Standards</th>
						</tr>
					</thead>
					<tbody>
						{!standardsError &&
							standards.map((spec, i) => (
								<tr key={`${spec.name}`}>
									<td>{spec.name}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>

			<div>
				{specificationsLoading && <Loader />}
				<table>
					<thead>
						<tr>
							<th>Specifications</th>
						</tr>
					</thead>
					<tbody>
						{!specificationsError &&
							specifications.map((spec, i) => (
								<tr key={`${spec.name}`}>
									<td>{spec.name}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>

			<div>
				{implementationsLoading && <Loader />}
				<table>
					<thead>
						<tr>
							<th>Reference Implementations</th>
						</tr>
					</thead>
					<tbody>
						{!implementationsError &&
							implementations.map((spec, i) => (
								<tr key={`${spec.brand_name}`}>
									<td>{spec.brand_name}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
