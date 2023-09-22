import { PropsWithChildren } from "react";
import Styles from "./TableInCard.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { CategoryTableInCard } from "../../../../types";
import { IncentivesTable } from "../../Tables/IncentivesTable/IncentivesTable";

type TableInCardProps = {
  title?: CategoryTableInCard;
};

export const TableInCard = ({ title }: PropsWithChildren<TableInCardProps>) => {
  const setTable = () => {
    switch (title) {
      case "Monetary/Market-driven":
        return <IncentivesTable category="Monetary/Market-driven" />;
      case "Organisational":
        return <IncentivesTable category="Organisational" />;
      case "Societal":
        return <IncentivesTable category="Societal" />;

      default:
        return null;
    }
  };

  return (
    <Card className={Styles.TableInCard}>
      <h3>{title}</h3>

      {setTable()}
    </Card>
  );
};
