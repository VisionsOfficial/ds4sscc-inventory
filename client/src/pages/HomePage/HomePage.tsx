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
  "actionPlan",
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            veritatis numquam, corporis quisquam quae voluptate sunt neque
            repudiandae nostrum, animi sequi? Exercitationem modi ab ad,
            deleniti enim aut similique iusto? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quasi nostrum at similique dolore
            officia, fugiat aliquam odit dolor voluptate expedita explicabo
            labore impedit harum quas sint, nisi blanditiis! Earum, nihil?
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
