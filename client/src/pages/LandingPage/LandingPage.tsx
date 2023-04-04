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
						Interactive Catalogue of Specifications for building data spaces in
						Smart and Sustainable Cities and Communities
					</Title>
					<p>
						This interactive Catalogue of Specifications aims at providing an
						overview of the identified building blocks (technical and
						non-technical) required to set up and operate the data space for
						smart and sustainable cities and communities. The listed eleven BBs
						describe functionality required by data spaces in regard to data
						interoperability, data trust and sovereignty, data value creation
						and data spaces governance. For each BB, this Catalogue shows the
						related and commonly used standards, industry body specifications
						and reference implementations. The Catalogue is open for
						contributions, so interested people may provide suggestions about
						additional inputs. For general comments about the Catalogue, please
						write us in our Contact form.
					</p>
				</div>
			</section>

			<section className={Styles.projects}>
				<Projects />
			</section>
		</div>
	);
};
