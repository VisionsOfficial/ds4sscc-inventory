import { PropsWithChildren } from "react";
import Styles from "./HomePage.module.scss";
import { Title } from "../../components/atoms/Title/Title";
import { CategoryCard } from "../../components/molecules/Cards/CategoryCard/CategoryCard";
import { DiscoverCategory } from "../../types";
import { Link } from "react-router-dom";

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
            Interactive portal for building data spaces in Smart Communities
          </Title>
          <p>
            This is the entry point to the Data Space for Smart Communities. You
            may find all the assets you need to build your data space classified
            by categories below
          </p>
        </div>
      </header>

      <section className={Styles.discover}>
        {setCategoryCard.map((category, index) => (
          <CategoryCard key={category + index} category={category} />
        ))}
      </section>

      <p className={Styles.link}>
        Please access a complete overview of reports by{" "}
        <Link to={"https://www.ds4sscc.eu/reports"}>visiting this page</Link>.
      </p>
    </main>
  );
};
