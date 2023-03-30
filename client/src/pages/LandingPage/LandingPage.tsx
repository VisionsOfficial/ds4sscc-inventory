import { useNavigate } from "react-router-dom";
import Styles from "./LandingPage.module.scss";

import projectRegistrationImg from "../../assets/imgs/project_registration.jpg";
import { Title } from "../../components/atoms/Title/Title";
import { Button } from "../../components/atoms/Button/Button";
import { Projects } from "../../components/organisms/Projects/Projects";

export const LandingPage = () => {
	const navigate = useNavigate();

	return (
		<div className={Styles.LandingPage}>
			<section className={Styles.header}>
				<div>
					<Title>
						Interactive inventory of smart and sustainable cities and
						communities
					</Title>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Voluptatem, doloribus modi quae veritatis iste blanditiis enim harum
						ipsam cumque culpa ducimus perferendis nisi quisquam voluptate
						error, voluptatibus nemo sint perspiciatis commodi illo iusto
						molestiae ipsa! Unde quibusdam nobis ad alias consequuntur. Nulla
						expedita libero, magni sequi deleniti repudiandae odit incidunt?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
						vitae quo possimus suscipit sit sequi.
					</p>
				</div>
			</section>

			<section className={Styles.projects}>
				<Projects />
			</section>

			{/* <section className={Styles.registration}>
				<div className={Styles.imgBg}>
					<div></div>
				</div>
				<div className="bg-gray">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos illo
						eius omnis sunt asperiores quam pariatur sint, quidem rem dolores.
					</p>
					<Button className="secondary" onClick={() => navigate("/newproject")}>
						Add your project
					</Button>
				</div>
			</section> */}
		</div>
	);
};
