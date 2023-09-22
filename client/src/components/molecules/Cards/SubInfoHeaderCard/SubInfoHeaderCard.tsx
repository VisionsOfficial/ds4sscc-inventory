import { PropsWithChildren } from "react";
import Styles from "./SubInfoHeaderCard.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { DiscoverCategory } from "../../../../types";

type SubInfoHeaderCardProps = {
  category: DiscoverCategory;
  className?: string;
};

export const SubInfoHeaderCard = ({
  className,
  category,
}: PropsWithChildren<SubInfoHeaderCardProps>) => {
  const contentHeader = () => {
    switch (category) {
      case "multiStakeholderGovernanceScheme":
        return (
          <p>
            This section is structured in two main parts. The first part
            iterates the{" "}
            <span>first version of the DS4SSCC Code of Conduct</span> which
            includes the principles and vision of the data space for smart
            communities, details the roles and responsibilities of participants,
            proposes governance structures and reviews the legal and contractual
            frameworks relevant to DS4SSCC data sharing. The second section of
            the deliverable follows the framework of{" "}
            <span>the data cooperation canvas</span> and provides{" "}
            <span>a step-by step guide</span> to developing and sustaining
            multi-stakeholder collaborations in the context of DS4SSCC.
          </p>
        );

      default:
        return null;
    }
  };

  return (
    <Card
      className={`${Styles.SubInfoHeaderCard} ${className ? className : ""}`}
    >
      {contentHeader()}
    </Card>
  );
};
