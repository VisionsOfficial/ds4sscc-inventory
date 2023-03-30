import { useState } from "react";
import { MATURITY, MIMS, PUBLISHERS, SCOPE } from "../../../data/filter";
import { useBuildingBlocks } from "../../../hooks/api/useBuildingBlocks";
import Loader from "../../atoms/Loader/Loader";
import { ProjectCard } from "../../molecules/ProjectCard/ProjectCard";
import { ProjectFilter } from "../../molecules/ProjectFilter/ProjectFilter";
import Styles from "./Projects.module.scss";

type Filters = {
	publisher?: string;
	implemented_mims?: string[];
	scope?: string;
	maturity?: string;
};

export const Projects = () => {
	const [filters, setFilters] = useState<Filters>({});
	const { buildingBlocks, loading, error } = useBuildingBlocks(filters);

	const handleSetFilter = (type: string, value: string) => {
		setFilters((prev) => {
			return {
				...prev,
				[type]: value,
			};
		});
	};
	const handleClearFilter = (type: string) => {
		setFilters((prev) => {
			return { ...prev, [type]: "" };
		});
	};

	if (loading) return <Loader />;
	if (error || !buildingBlocks) return <>An error occured</>;

	return (
		<div className={Styles.Projects}>
			<section className={Styles.filters}>
				{/* <ProjectFilter
					placeholder="Select..."
					type="publisher"
					filter="Publisher"
                    filters={filters}
					options={PUBLISHERS.map((v) => {
						return { label: v, value: v };
					})}
					onChange={handleSetFilter}
					onClear={handleClearFilter}
				/> */}
				<ProjectFilter
					placeholder="Select..."
					type="implemented_mims"
					filter="Implemented MIMs"
                    filters={filters}
					options={MIMS.map((v) => {
						return { label: v, value: v };
					})}
					onChange={handleSetFilter}
					onClear={handleClearFilter}
				/>
				<ProjectFilter
					placeholder="Select..."
					type="scope"
					filter="Scope"
                    filters={filters}
					options={SCOPE.map((v) => {
						return { label: v, value: v };
					})}
					onChange={handleSetFilter}
					onClear={handleClearFilter}
				/>
				<ProjectFilter
					placeholder="Select..."
					type="maturity"
					filter="Maturity"
                    filters={filters}
					options={MATURITY.map((v) => {
						return { label: v, value: v };
					})}
					onChange={handleSetFilter}
					onClear={handleClearFilter}
				/>
			</section>
			<section className={Styles.projects}>
				{buildingBlocks.map((bb, i) => (
					<ProjectCard key={i} buildingBlock={bb} />
				))}
			</section>
		</div>
	);
};
