import { PropsWithChildren } from "react";
import Styles from "./ActionPlanPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";

type ActionPlanPageProps = {};

export const ActionPlanPage = ({}: PropsWithChildren<ActionPlanPageProps>) => {
  return (
    <main className={Styles.ActionPlanPage}>
      <HeaderPage category="actionPlan" />
    </main>
  );
};
