import { PropsWithChildren } from "react";
import Styles from "./MultiStakeholderGovernancePage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { SubInfoHeaderCard } from "../../components/molecules/Cards/SubInfoHeaderCard/SubInfoHeaderCard";
import { CategoryCard } from "../../components/molecules/Cards/CategoryCard/CategoryCard";
import { CheckOutCard } from "../../components/molecules/Cards/CheckOutCard/CheckOutCard";
import { useOutlet } from "react-router-dom";

type MultiStakeholderGovernancePageProps = {};

export const MultiStakeholderGovernancePage =
  ({}: PropsWithChildren<MultiStakeholderGovernancePageProps>) => {
    const outlet = useOutlet();

    if (outlet) {
      return outlet;
    }

    return (
      <main className={Styles.MultiStakeholderGovernancePage}>
        <HeaderPage category="multiStakeholderGovernanceScheme" />

        <SubInfoHeaderCard category="multiStakeholderGovernanceScheme" />

        <div className={Styles.discover}>
          <CategoryCard
            category="codeOfConducts"
            variantColor="bgGray"
            className={Styles.card}
          />
          <CategoryCard
            category="DevelopingMultiStakeholder"
            variantColor="bgGray"
            className={Styles.card}
          />
        </div>

        <CheckOutCard category="collectedUseCases" sizing="mainContent" />
      </main>
    );
  };
