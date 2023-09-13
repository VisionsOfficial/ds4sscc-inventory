import { PropsWithChildren } from "react";
import Styles from "./IncentivesAndAddedValue.module.scss";
import { TableInCard } from "../../../molecules/Cards/TableInCard/TableInCard";

type IncentivesAndAddedValueProps = {};

export const IncentivesAndAddedValue =
  ({}: PropsWithChildren<IncentivesAndAddedValueProps>) => {
    return (
      <div className={Styles.IncentivesAndAddedValue}>
        <TableInCard title="Market-driven" />
        <TableInCard title="Organisational" />
        <TableInCard title="Societal" />
      </div>
    );
  };
