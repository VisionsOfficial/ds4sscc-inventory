import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { IBuildingBlock } from "../../../types";

import Styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
	buildingBlock: IBuildingBlock;
};

export const ProjectCard = ({
	buildingBlock,
}: PropsWithChildren<ProjectCardProps>) => {
	const navigate = useNavigate();

	return (
		<div className={Styles.ProjectCard}>
			<h6>{buildingBlock.name}</h6>
			<p>{buildingBlock.description}</p>
			<button
				className="btn"
				onClick={() => navigate("/project/" + buildingBlock._id)}
			>
				Read more
			</button>
		</div>
	);
};
