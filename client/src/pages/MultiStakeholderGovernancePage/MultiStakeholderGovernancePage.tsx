import { PropsWithChildren } from "react";
import Styles from "./MultiStakeholderGovernancePage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { SubInfoHeaderCard } from "../../components/molecules/Cards/SubInfoHeaderCard/SubInfoHeaderCard";
import { CategoryCard } from "../../components/molecules/Cards/CategoryCard/CategoryCard";
import { CheckOutCard } from "../../components/molecules/Cards/CheckOutCard/CheckOutCard";

type MultiStakeholderGovernancePageProps = {};

export const MultiStakeholderGovernancePage =
  ({}: PropsWithChildren<MultiStakeholderGovernancePageProps>) => {
    return (
      <main className={Styles.MultiStakeholderGovernancePage}>
        <HeaderPage category="multiStakeholderGovernanceScheme" subInfoHeader />

        <SubInfoHeaderCard />

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

        <CheckOutCard category="collectedUseCases" />
      </main>
    );
  };