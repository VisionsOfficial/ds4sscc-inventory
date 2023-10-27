import { PropsWithChildren } from "react";
import Styles from "./RoadmapPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { SubInfoHeaderCard } from "../../components/molecules/Cards/SubInfoHeaderCard/SubInfoHeaderCard";
import { CategoryCard } from "../../components/molecules/Cards/CategoryCard/CategoryCard";
import { CheckOutCard } from "../../components/molecules/Cards/CheckOutCard/CheckOutCard";
import { useOutlet } from "react-router-dom";

type RoadmapPageProps = {};

export const RoadmapPage = ({}: PropsWithChildren<RoadmapPageProps>) => {
  const outlet = useOutlet();

  if (outlet) {
    return outlet;
  }

  return (
    <main className={Styles.RoadmapPage}>
      <HeaderPage category="roadmapForImplementing" />

      <SubInfoHeaderCard category="roadmapForImplementing" />

      <div className={Styles.discover}>
        <CategoryCard
          category="actionPlan"
          variantColor="bgGray"
          className={Styles.card}
        />
        <CategoryCard
          category="capacityBuilding"
          variantColor="bgGray"
          className={Styles.card}
        />
        <CategoryCard
          category="recommendedAction"
          variantColor="bgGray"
          className={Styles.card}
        />
        <CategoryCard
          category="visionsFederation"
          variantColor="bgGray"
          className={Styles.card}
        />
      </div>

      <CheckOutCard category="actionPlanCheatsheet" sizing="mainContent" />
    </main>
  );
};
