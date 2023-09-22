import { PropsWithChildren } from "react";
import Styles from "./HeaderPage.module.scss";
import { DiscoverCategory } from "../../../../types";
import { Title } from "../../../atoms/Title/Title";
import { useCategories } from "../../../../hooks/useCategories";
import { APP_IMAGES_ASSETS } from "../../../../utils/appImagesAssets";

type HeaderPageProps = {
  category: DiscoverCategory;
};

export const HeaderPage = ({
  category,
}: PropsWithChildren<HeaderPageProps>) => {
  const { contentCategory } = useCategories({ category: category });

  const contentText = () => {
    switch (category) {
      case "multiStakeholderGovernanceScheme":
        return (
          <p>
            This section sets out the{" "}
            <span>multi-stakeholder governance scheme</span> for the data space
            for smart and sustainable cities and communities developed in
            collaboration with local authorities’ representatives and broader
            stakeholders (i.e. private sector, academia, civil society
            organisations) as part of work package 2 led by Eurocities.
            <br />
            <br />
            Data spaces, understood as ‘‘infrastructures that enable data
            transactions between different data ecosystem parties based on the
            governance framework of that{" "}
            <a
              href="https://dssc.eu/space/SK/32407574/1+Data+Spaces+101"
              target="_blank"
            >
              data space
            </a>
            ’’ are at the core of the 2020{" "}
            <a
              href="https://digital-strategy.ec.europa.eu/en/policies/strategy-data"
              target="_blank"
            >
              European strategy for data
            </a>{" "}
            and its ambition to create a single market for data while ensuring
            data sovereignty and control.
            <br />
            <br />
            The DS4SSCC is a Coordination and Support Action under{" "}
            <a href="https://living-in.eu/" target="_blank">
              Living-in.EU
            </a>{" "}
            and aligns with its principles and values: a citizen-centric
            approach, a city-led approach at EU level, the city as a
            citizen-driven and open innovation ecosystem , ethical and socially
            responsible access, use, sharing and management of data,
            technologies as key enablers and the deployment of interoperable
            digital platforms based on open standards and technical
            specifications, Application Programming Interfaces (APIs) and shared
            data models.
            <br />
            <br />
            The multi-stakeholder governance scheme aims to provide a baseline
            modality for data access and exchange in the deployment phase of
            DS4SSCC and facilitate the development of trustworthy local data
            ecosystems which align with European values. It is also a basis to
            support the future progressive harmonisation of local data
            ecosystems into a federated European data space for smart
            communities.
            <br />
            <br />
            The{" "}
            <a
              href={APP_IMAGES_ASSETS.image.dataCooperationCanvas}
              style={{ fontWeight: "bold" }}
              target="_blank"
            >
              Data Cooperation Canvas
            </a>{" "}
            was co-developed during the preparatory action for DS4SSCC and cuts
            across all the work packages. The canvas has been designed to
            explore and define multi-stakeholder cooperation focusing on a
            specific use-case; describe existing multi-stakeholders cooperation
            and reflect on the enablers and obstacles of data exchange and
            understand at one glance the added value of cooperation between
            different types of stakeholders. It is also a useful tool to foster
            trust between stakeholders by clearly setting up the objectives and
            expectations regarding the cooperation as well as a valuable device
            to capture local knowledge on multi-stakeholder data cooperation and
            create a DS4SCCC use-case repository.
          </p>
        );

      case "codeOfConducts":
        return (
          <p>
            The DS4SSCC Code of Conduct provides a <span>first iteration</span>{" "}
            of the principles, roles, responsibilities and governance and legal
            rules for members of the data space. The Code of Conduct will be
            tested and further refined during the three-years of deployment of
            the{" "}
            <a
              href="https://digital-strategy.ec.europa.eu/en/events/info-day-deployment-data-space-smart-communities"
              target="_blank"
            >
              data space for smart communities
            </a>
            .
          </p>
        );

      case "DevelopingMultiStakeholder":
        return (
          <>
            <p>
              The <span>Data Cooperation Canvas</span> was co-developed during
              the preparatory action for DS4SSCC. It was built following up the
              exchanges in WP2 which provided a range of use-cases with
              different configurations of stakeholders/partners, data sharing
              and business models and with different governance practices that
              were put in place to ensure fair and trustworthy data exchanges.
            </p>
            <p>
              The cooperation canvas focuses on and captures specific use-cases.
              This is key as it allows partners and stakeholders to clearly
              identify the needs for data sharing, define its purpose as well as
              lay out the different components (technical, governance, business
              models, implementation) that are required to ensure the success of
              the cooperation. The canvas is divided into{" "}
              <span>three main parts</span> providing
            </p>

            <ul>
              <li>The context of the cooperation (‘Why’)</li>
              <li>
                The governance and business models underlining the cooperation
                (‘Organisational’)
              </li>
              <li>
                The technical aspects of the cooperation (‘Data & Technical’)
              </li>
            </ul>

            <p>
              Each part contains subsections to describe the characteristics of
              the cooperation alongside guiding questions (see Table 13). <br />
              <br />
              The canvas is a tool which can be used in several ways:
            </p>
            <ul>
              <li>
                to explore and define multi-stakeholder cooperation focusing on
                a specific use-case;
              </li>
              <li>
                to describe existing multi-stakeholders cooperation and reflect
                on the enablers and obstacles of data exchange;
              </li>
              <li>
                to understand at one glance the added value of cooperation
                between different types of stakeholders;
              </li>
              <li>
                to foster trust between stakeholders by clearly setting up the
                cooperation
              </li>
              <li>
                to capture a body of knowledge on multi-stakeholder cooperations
                and create a DS4SCCC use-case repository.
              </li>
            </ul>
          </>
        );

      default:
        null;
    }
  };

  return (
    <header className={Styles.HeaderPage}>
      {category === "actionPlan"
        ? contentCategory?.image
        : contentCategory?.imageVariant}
      <div className={Styles.content}>
        <Title>{contentCategory?.title}</Title>
        {contentText()}
      </div>
    </header>
  );
};
