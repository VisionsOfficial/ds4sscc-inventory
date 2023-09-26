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
          <>
            <p>
              This document is structured in three main sections. The first part
              iterates the first version of the{" "}
              <span>DS4SSCC Code of Conduct</span> which includes the principles
              and vision of the data space for smart communities, details the
              roles and responsibilities of participants, proposes governance
              structures, and reviews the legal and contractual frameworks
              relevant to DS4SSCC data sharing. The second section of the
              deliverable follows the framework of{" "}
              <span>the Data Cooperation Canvas</span> and provides{" "}
              <span>a step-by step guide</span> to developing and sustaining
              multi-stakeholder collaborations that align with DS4SSCC. The
              canvas was co-developed during the preparatory action and cuts
              across all the work packages. The last part puts forward{" "}
              <span>recommendations</span> at the local, national, and European
              levels to foster trustworthy multi-stakeholder data cooperation.
            </p>

            <p>
              The multi-stakeholder governance scheme is accompanied by
              appendices providing a <span>toolbox</span> with a range of
              relevant resources for data sharing, a{" "}
              <span>detailed overview of each WP2 use-cases</span> and a{" "}
              <span>
                summary of the methodology underlying the development of the
                multi-stakeholder governance scheme.
              </span>
            </p>

            <p>
              The scheme is one component of the{" "}
              <span>blueprint for DS4SSCC</span> which also offers guidance on
              technical specifications and data standards (D3.1), sets up a
              reference architecture (D.3.2) as well as identifies priority
              datasets (D4.1) and provides a roadmap for the implementation of
              the data space at European level (D4.2).
            </p>
          </>
        );

      case "DevelopingMultiStakeholder":
        return (
          <>
            <p>
              All the components of the canvas will form the{" "}
              <span>business model for the data cooperation</span> (including
              the value proposition (why), the partners and targeted customers
              (who), the types of data exchanged (what) and the resources and
              mechanisms needed to deliver and sustain value (how)).
            </p>
            <p>
              The canvas was first iterated by Braxwell.com in the role of
              external experts’ strategic data partnerships of the City of
              Amsterdam’s Directorate Digitalization & Innovation and members of
              the Governance Group. It was further developed during bilateral
              exchanges as well as discussions with WP3 and WP4 to ensure
              alignment with the technical and implementation work which was
              developed by them. The canvas was revised several times to
              incorporate feedback. It was then presented, further developed
              with and validated by the Governance Group during an interactive
              workshop in June and by the broader stakeholders during the Forum
              meetings in June and July.
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
