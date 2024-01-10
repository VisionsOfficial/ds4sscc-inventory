import { PropsWithChildren } from "react";
import Styles from "./CatalogueOfSpecifications.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { Projects } from "../../components/organisms/Projects/Projects";
import { DropdownCard } from "../../components/molecules/Cards/DropdownCard/DropdownCard";
import { MaturityCategory } from "../../components/atoms/Texts/MaturityCategory/MaturityCategory";
import { SectionTitleContainer } from "../../components/molecules/Containers/SectionTitleContainer/SectionTitleContainer";
import { SubInfoHeaderCard } from "../../components/molecules/Cards/SubInfoHeaderCard/SubInfoHeaderCard";
import { Link } from "react-router-dom";

type CatalogueOfSpecificationsProps = {};

export const CatalogueOfSpecifications =
  ({}: PropsWithChildren<CatalogueOfSpecificationsProps>) => {
    return (
      <main className={Styles.CatalogueOfSpecifications}>
        <HeaderPage category="catalogueOfSpecifications" />
        <SubInfoHeaderCard category="catalogueOfSpecifications" />

        <section className={Styles.projects}>
          <DropdownCard
            title="Explanation for the MIMs, the scope and the types of maturity level"
            iconInfo
          >
            <SectionTitleContainer title="Relevant MIMs">
              <ul>
                <li>
                  <Link
                    to={"https://mims.oascities.org/mims/oasc-mim-1-context"}
                    target="_blank"
                  >
                    <span>MIM 1</span>
                  </Link>
                  : Context Information Management : Context information
                  management ensures comprehensive and integrated access, use,
                  sharing, and management of data across different solutions and
                  purposes. It manages the context information coming from
                  Internet of Things (IoT) devices and other public and private
                  data sources providing cross cutting context data and access
                  through a uniform interface.
                </li>
                <li>
                  <Link
                    to={
                      "https://mims.oascities.org/mims/oasc-mim-2-data-models"
                    }
                    target="_blank"
                  >
                    <span>MIM 2</span>
                  </Link>
                  : Shared Data Models: Guidelines and catalog of minimum common
                  data models in different verticals to enable interoperability
                  for applications and systems among different cities. <br />{" "}
                  Harmonized representation formats and semantics that will be
                  used by applications both to consume and to publish data.{" "}
                  <br /> Smart Data Models for interoperable and replicable
                  smart solutions in multiple sectors, starting with smart
                  cities but also for smart agrifood, smart utilities, smart
                  industry, etc.
                </li>
                <li>
                  <Link
                    to={"https://mims.oascities.org/mims/oasc-mim-3-contracts"}
                    target="_blank"
                  >
                    <span>MIM 3</span>
                  </Link>
                  : Ecosystem Transactions Management: Scaling of data services,
                  including IoT- and AI-enabled services, within cities and
                  communities requires easy and risk-free access to suitable
                  local data sources that are already within those communities.
                  A local data marketplace allows for easy and risk-free access
                  to relevant and available local data, solutions, and other
                  resources so that new and valuable services and solutions,
                  many of which have been already deployed in other cities can
                  easily be implemented within the local area. The use and
                  re-use realizes new societal values, including new revenue
                  streams, incentivising the stakeholders, including
                  infrastructure owners, to share data, analytics, services
                  and/or solutions in infrastructure partnerships based on key
                  technology enablers. <br /> MIM3 is the management layer that
                  allows stakeholders: <br /> To provide data along with
                  relevant information about its content and quality and any
                  terms and conditions for use. <br /> To provide data
                  processing services along with relevant information and terms
                  and conditions for using the services. <br /> To find and
                  access the data and data processing services and other
                  services they need and to be able to gain relevant insights
                  into what those data streams/data processing services/data
                  applications consist of and how valuable they can be.
                </li>
                <li>
                  <Link
                    to={"https://mims.oascities.org/mims/oasc-mim4-trust"}
                    target="_blank"
                  >
                    <span>MIM 4</span>
                  </Link>
                  : Personal Data Management: MIM4 focuses on Personal Data
                  Management in other words how to provide easy to use methods
                  for citizens/users to control which data sets/attributes they
                  want to share with solution, application, or service providers
                  under transparent circumstances, enabling trust between the
                  different parties.
                  <br /> There are many initiatives seeking to provide personal
                  data management solutions, but these are primarily in the
                  pilot or development phase, and this has led to a fragmented
                  marketplace.
                  <br /> The aims of the different initiatives overlap but are
                  not necessarily identical. Some projects focus just on
                  personal data management, others, such as RUDI, aim to support
                  wider data sharing ecosystems, but with personal data
                  management being a key feature.
                  <br /> There are two networks of providers – MyData and Solid,
                  which each follow different high-level methodologies. Even
                  within each of these two networks, there are significant
                  differences in the technical and processes used by different
                  projects and so individual implementations are not necessarily
                  interoperable.
                  <br /> There are a number of initiatives outside of these
                  networks developing their own technical solutions.
                  <br /> The role of MIM4 is to identify the key capabilities
                  required and identify pivotal points of interoperability
                  between the different solutions to help build confidence and
                  support implementation.
                </li>
                <li>
                  <Link
                    to={
                      "https://mims.oascities.org/mims/oasc-mim5-transparency"
                    }
                    target="_blank"
                  >
                    <span>MIM 5</span>
                  </Link>
                  : Fair and Transparent AI: Governments are increasingly
                  seeking to capture the opportunities offered by automated
                  decision-making algorithmic systems, to improve their
                  services. However, government agencies and the general public
                  have justified concerns over bias, privacy, accountability,
                  and transparency of such automated decision-making processes.
                  New examples continue to emerge of potential negative
                  consequences from the inappropriate use of ('black box')
                  algorithms. Here we define "Algorithmic System" as: "software
                  that automatically makes predictions, makes decisions and/or
                  gives advice by using data analysis, statistics and/or
                  self-learning logic."
                  <br /> ‌An automated decision-making algorithmic system does
                  not necessarily require any form of self-learning logic (such
                  as machine learning). In actual practice, software is often
                  used that does not contain any self-learning logic, but the
                  application of which may have great and sometimes unknown or
                  unintended impact on citizens.
                  <br /> This is an increasingly important issue as cities and
                  communities are increasingly using complex modelling to
                  support their decision making and moving towards the
                  implementation of local digital twins.
                  <br /> To provide citizens and governments with a proper
                  process to mitigate risk, Amsterdam city council, the original
                  champion of MIM5, is working with other cities to develop a
                  European standard for procurement rules for government
                  agencies to use when procuring algorithmic systems to support
                  automated decision-making. Alongside this, guidance is being
                  developed regarding the actions that government agencies
                  themselves need to take to make sure that automated
                  decision-making is trusted, fair and transparent. This will
                  include providing channels for citizens to query the
                  decision-making process and involving citizens in co-designing
                  the algorithmic systems. Most importantly there is the need to
                  ensure that the data used by those systems is accurate and
                  appropriate.
                  <br /> In addition, there are some useful checklists that have
                  been developed elsewhere, and the UK has developed a Framework
                  on Fair AI for the Public Sector and an Algorithmic
                  Transparency standard (links available in References).
                </li>
              </ul>
            </SectionTitleContainer>

            <SectionTitleContainer title="Scope">
              <ul>
                <li>
                  <span>Generic purpose</span>: Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aspernatur fuga placeat modi
                  repellat in ex eligendi sapiente unde error id!
                </li>
                <li>
                  <span>Domain specific</span>: Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Numquam aspernatur quod nobis.{" "}
                </li>
              </ul>
            </SectionTitleContainer>

            <SectionTitleContainer title="Maturity">
              <ul>
                <li>
                  <MaturityCategory maturity="quiteMature" colorDot />: Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                  consequatur, at sunt aspernatur suscipit dolorum amet quo
                </li>
                <li>
                  <MaturityCategory maturity="evolving" colorDot />: Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Fugiat
                  consequatur, at sunt aspernatur suscipit dolorum amet quo
                </li>
                <li>
                  <MaturityCategory maturity="fewMature" colorDot />: Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                  consequatur, at sunt aspernatur suscipit dolorum amet quo
                </li>
              </ul>
            </SectionTitleContainer>
          </DropdownCard>

          <Projects />
        </section>
      </main>
    );
  };
