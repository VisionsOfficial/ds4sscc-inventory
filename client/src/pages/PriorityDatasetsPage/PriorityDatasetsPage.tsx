import { PropsWithChildren } from "react";
import Styles from "./PriorityDatasetsPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { PriorityDatasetsTable } from "../../components/molecules/Tables/PriorityDatasetsTable/PriorityDatasetsTable";

type PriorityDatasetsPageProps = {};

export const PriorityDatasetsPage =
  ({}: PropsWithChildren<PriorityDatasetsPageProps>) => {
    return (
      <main className={Styles.PriorityDatasetsPage}>
        <HeaderPage category="priorityDatasets" />

        <section className={Styles.content}>
          <PriorityDatasetsTable />
        </section>
      </main>
    );
  };
