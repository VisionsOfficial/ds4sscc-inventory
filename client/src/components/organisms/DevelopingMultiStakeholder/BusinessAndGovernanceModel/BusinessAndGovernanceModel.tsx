import { PropsWithChildren } from "react";
import Styles from "./BusinessAndGovernanceModel.module.scss";
import { TableInCard } from "../../../molecules/Cards/TableInCard/TableInCard";

type BusinessAndGovernanceModelProps = {};

export const BusinessAndGovernanceModel =
  ({}: PropsWithChildren<BusinessAndGovernanceModelProps>) => {
    return (
      <div className={Styles.BusinessAndGovernanceModel}>
        <TableInCard title="Models" />
        <TableInCard title="Assessing risks & advantages" />
      </div>
    );
  };
