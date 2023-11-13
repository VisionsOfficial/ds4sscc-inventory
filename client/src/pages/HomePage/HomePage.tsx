import { PropsWithChildren } from "react";
import Styles from "./HomePage.module.scss";
import { Title } from "../../components/atoms/Title/Title";
import { CategoryCard } from "../../components/molecules/Cards/CategoryCard/CategoryCard";
import { DiscoverCategory } from "../../types";

type HomePageProps = {};

const setCategoryCard: DiscoverCategory[] = [
  "multiStakeholderGovernanceScheme",
  "catalogueOfSpecifications",
  "referenceArchitecture",
  "priorityDatasets",
  "collectedUseCases",
  "roadmapForImplementing",
];

export const HomePage = ({}: PropsWithChildren<HomePageProps>) => {
  return (
    <main className={Styles.HomePage}>
      <header className={Styles.HomePageHeader}>
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
      </header>

      <section className={Styles.discover}>
        {setCategoryCard.map((category, index) => (
          <CategoryCard key={category + index} category={category} />
        ))}
      </section>
    </main>
  );
};
