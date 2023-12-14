import { PropsWithChildren } from "react";
import Styles from "./SubInfoHeaderCard.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { DiscoverCategory } from "../../../../types";
import { Link } from "react-router-dom";

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
              The{" "}
              <Link
                to={
                  "https://static1.squarespace.com/static/63718ba2d90d0263d7fc1857/t/651ea670a884c256d84f4864/1696507511589/DS4SSCC_D2.2+Multi-stakeholder+governance+scheme.docx.pdf"
                }
                target="_blank"
              >
                multi-stakeholder governance scheme
              </Link>{" "}
              is accompanied by{" "}
              <Link
                to={
                  "https://static1.squarespace.com/static/63718ba2d90d0263d7fc1857/t/6524298f5f9a6926c5697ccc/1696868790936/DS4SSCC_Deliverable+D.2.2+Appendices_FINAL.pdf"
                }
                target="_blank"
              >
                appendices
              </Link>{" "}
              providing a <span>toolbox</span> with a range of relevant
              resources for data sharing, a{" "}
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

      case "referenceArchitecture":
        return (
          <div className={Styles.referenceArchitecture}>
            <h2>How to get started</h2>
            <p>
              We have analysed the most relevant reference architectures for
              data spaces and smart cities to gather the best insights for the
              architecture and the existing European regulation and legislative
              frameworks to determine their impact on the DS4SSCC architecture,
              like for example the{" "}
              <a
                href="https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/european-green-deal/delivering-european-green-deal_en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Green Deal objectives
              </a>
              .
            </p>
            <p>
              The designed architecture takes into account the basic design
              principles for a data space (interoperability, sovereignty,
              ecosystem, security and decentralisation), the specific
              considerations of the smart cities domain and the existing{" "}
              <a
                href="https://living-in.eu/news/mims-plus-version-60-approved"
                target="_blank"
                rel="noopener noreferrer"
              >
                Minimal Interoperability Mechanisms Plus
              </a>{" "}
              (MIMs Plus) already adopted in the field.
            </p>
            <p>
              The proposed architecture is fully aligned with the
              recommendations given by the{" "}
              <a
                href="https://dssc.eu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data Spaces Support Centre
              </a>{" "}
              (DSSC), so it follows the spirit, concepts and taxonomy of
              building blocks provided by the DSSC as common technical grounds
              for all the data spaces.
              <br />
              Navigating through this section, you will find a contextualization
              of the architecture, the high-level architecture itself and a set
              of guidelines and recipes under what we call, the CookBook.
            </p>
          </div>
        );

      case "roadmapForImplementing":
        return (
          <>
            <h3>Lorem ipsum dolor sit amet, consectetuer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              voluptas quae eos, odit voluptatum sunt explicabo! Nostrum
              provident ducimus et reprehenderit, saepe explicabo error, odit
              numquam facere asperiores illum minima.
            </p>
          </>
        );

      case "catalogueOfSpecifications":
        return (
          <p>
            You can filter the building blocks view by selecting the{" "}
            <Link
              to={"https://living-in.eu/news/mims-plus-version-60-approved"}
              target="_blank"
            >
              MIM
            </Link>{" "}
            which building block is mapped; by choosing the scope of the
            building block, generic for any domain or specific for Smart
            Communities; by indicating the level of maturity according to how
            deep adopted is in the domain (quite mature, evolving, few mature)
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
