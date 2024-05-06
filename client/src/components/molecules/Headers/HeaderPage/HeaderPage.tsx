import { PropsWithChildren } from "react";
import Styles from "./HeaderPage.module.scss";
import { DiscoverCategory } from "../../../../types";
import { Title } from "../../../atoms/Title/Title";
import { useCategories } from "../../../../hooks/useCategories";
import { Link } from "react-router-dom";

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
          <>
            <p>
              This section sets out the{" "}
              <Link
                to={
                  "https://static1.squarespace.com/static/63718ba2d90d0263d7fc1857/t/651ea670a884c256d84f4864/1696507511589/DS4SSCC_D2.2+Multi-stakeholder+governance+scheme.docx.pdf"
                }
                target="_blank"
              >
                <span>multi-stakeholder governance scheme</span>
              </Link>{" "}
              for the data space for smart and sustainable cities and
              communities developed in collaboration with local authorities’
              representatives and broader stakeholders (i.e. private sector,
              academia, civil society organisations) as part of work package 2
              led by Eurocities.
            </p>
            <p>
              The multi-stakeholder governance scheme aims to provide a baseline
              modality for data access and exchange in the deployment phase of
              DS4SSCC and facilitate the development of trustworthy local data
              ecosystems which align with European values. It is also a basis to
              support the future progressive harmonisation of local data
              ecosystems into a federated European data space for smart
              communities. This document is aimed at local data ecosystem
              stakeholders in the public (cities, municipalities, regions) and
              private (SMEs, Start-ups, IT industry) sectors as well as
              stakeholders in the scientific community and civil society
              organisations who would like to set up and/or take part in
              multi-stakeholder data cooperation in line with the Data Space for
              Smart and Sustainable Cities and Communities.
            </p>
          </>
        );

      case "codeOfConduct":
        return (
          <p>
            The DS4SSCC Code of Conduct below provides the foundational{" "}
            <span>
              principles, roles, responsibilities, governance structures and
              legal frameworks
            </span>{" "}
            for participants of the data space. The Code of Conduct will be
            tested and further refined during the three-years of deployment of
            the{" "}
            <a
              href="https://digital-strategy.ec.europa.eu/en/events/info-day-deployment-data-space-smart-communities"
              target="_blank"
              rel="noopener noreferrer"
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
              the cooperation alongside guiding questions (see Table 9). You can
              also find some detailed examples of the technical part of the data
              cooperation canvas in D3.2 Architecture Model.
              <br />
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

      case "referenceArchitecture":
        return (
          <p>
            After the publication of the{" "}
            <a
              href="https://www.ds4sscc.eu/catalogueofspecifications"
              target="_blank"
              rel="noopener noreferrer"
            >
              Catalogue of Specifications for the Building Blocks
            </a>{" "}
            (BBs) to be used in the design and deployment of a data space in
            cities and communities domain, now the corresponding Reference
            Architecture which explains how to use those BBs in a coherent and
            consistent manner to develop the functionality which is expected to
            be provided by a data space.{" "}
            <a
              href="https://static1.squarespace.com/static/63718ba2d90d0263d7fc1857/t/651ec20acfcf626ce73d97df/1696514592952/DS4SSCC_D3.2_Architecture+Model.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow this link for accessing the full report
            </a>
          </p>
        );

      case "roadmapForImplementing":
        return <></>;

      case "actionPlan":
        return (
          <p>
            As the development status of use cases across communities can
            differ, the DS4SSCC action plan suggests to locate use cases within
            a maturity level scheme of 6 phases based on completed key
            performance indicators (KPIs) ensuring right guidance for the next
            actions to be taken in the context of governance, datasets and
            architecture.
          </p>
        );
      case "visionsFederation":
        return (
          <p>
            A Federation of Data Spaces is a concept that envisions an
            interconnected network of data spaces, where data is shared and
            exchanged seamlessly, while respecting privacy, security, data
            sovereignty and governance requirements. It transcends traditional
            boundaries, allowing data to flow across organisations, sectors, and
            borders.
          </p>
        );
      case "actionPlanCheatsheet":
        return (
          <>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              alias repellat dignissimos aliquid eos repellendus a molestias
              inventore velit obcaecati. Labore quos exercitationem nesciunt
              aliquam blanditiis voluptate incidunt neque quasi.
            </p>
            {/* <Button className={Styles.btnDl}>Download</Button> */}
          </>
        );

      case "catalogueOfSpecifications":
        return (
          <p>
            This Catalogue of Specifications collects all the potential
            standards, specifications and reference implementations that are
            recommended to build and deploy a data space in Smart Communities
            domain. The current collection is consolidating contributions from
            various stakeholders and experts in providing digital solutions to
            cities, data spaces implementers, local governments and data
            management providers. The Catalogue is open for contributions in any
            of the building blocks.{" "}
            <a
              href="https://drive.google.com/file/d/174_g8dAM3yxRiyTFUSvxvE4zEgYiAlaz/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow this link for accessing the full report
            </a>
          </p>
        );

      default:
        null;
    }
  };

  return (
    <header className={Styles.HeaderPage}>
      {contentCategory?.imageVariant}
      <div className={Styles.content}>
        <Title>{contentCategory?.title}</Title>
        {contentText()}
      </div>
    </header>
  );
};
