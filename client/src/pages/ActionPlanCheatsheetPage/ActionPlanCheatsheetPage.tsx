import { PropsWithChildren } from "react";
import Styles from "./ActionPlanCheatsheetPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { ActionPlanCheatsheetTable } from "../../components/molecules/Tables/ActionPlanCheatsheetTable/ActionPlanCheatsheetTable";

type ActionPlanCheatsheetPageProps = {};

export const ActionPlanCheatsheetPage =
  ({}: PropsWithChildren<ActionPlanCheatsheetPageProps>) => {
    return (
      <main className={Styles.ActionPlanCheatsheetPage}>
        <HeaderPage category="actionPlanCheatsheet" />

        <div className={Styles.content}>
          <ActionPlanCheatsheetTable />
        </div>
      </main>
    );
  };
