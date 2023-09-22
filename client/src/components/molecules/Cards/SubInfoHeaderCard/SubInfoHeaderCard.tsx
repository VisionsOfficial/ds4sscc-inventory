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

      case "DevelopingMultiStakeholder":
        return (
          <>
            <p>
              All the components of the data cooperation canvas will form the
              business model for the data cooperation (including the value
              proposition (what), the partners and targeted customers (who) and
              the resources and mechanisms needed to deliver and sustain value
              (how).
            </p>
            <p>
              The canvas was first iterated by Ron van der Lans and Jasper
              Soetendal of Braxwell.com in the role of external experts’
              strategic data partnerships of the City of Amsterdam’s Directorate
              Digitalization & Innovation and members of the Governance Group.
              It was further developed during bilateral exchanges as well as
              discussions with WP3 and WP4 to ensure alignment with the
              technical and implementation work which was developed by them. The
              canvas was revised several times to incorporate feedback. It was
              then presented, further developed with and validated by the
              Governance Group during an interactive workshop in June and by the
              broader stakeholders during the Forum meetings in June and July.
            </p>
          </>
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
