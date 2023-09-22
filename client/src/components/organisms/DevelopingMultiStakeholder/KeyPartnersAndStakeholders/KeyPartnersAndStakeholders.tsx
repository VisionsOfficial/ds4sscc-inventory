import { PropsWithChildren } from "react";
import Styles from "./KeyPartnersAndStakeholders.module.scss";
import { FlipCard } from "../../../molecules/Cards/FlipCard/FlipCard";
import { CheckOutCard } from "../../../molecules/Cards/CheckOutCard/CheckOutCard";
import { TemplateMappingTable } from "../../../molecules/Tables/TemplateMappingTable/TemplateMappingTable";

type KeyPartnersAndStakeholdersProps = {};

export const KeyPartnersAndStakeholders =
  ({}: PropsWithChildren<KeyPartnersAndStakeholdersProps>) => {
    return (
      <div className={Styles.KeyPartnersAndStakeholders}>
        <p>
          Once the objectives and added value proposition have been defined, the
          next step is to undertake a comprehensive mapping of the relevant
          stakeholders in the context of the use-case and cooperation envisioned
          above. A number of tools can enable you to conduct this exploratory
          exercise including the{" "}
          <a
            href="https://www.theodi.org/article/data-ecosystem-mapping-tool/#1675181030992-dc81419a-f150"
            target="_blank"
          >
            ODI Data Ecosystem Mapping Tool
          </a>{" "}
          or Adaptation Scotland’s{" "}
          <a
            href="https://www.adaptationscotland.org.uk/how-adapt/tools-and-resources/stakeholder-and-power-mapping-template-workshop-outline"
            target="_blank"
          >
            Stakeholder and Power Mapping Tool
          </a>
        </p>

        <div className={Styles.cards}>
          <FlipCard category="public" />
          <FlipCard category="academiaResearchInstitutes" />
          <FlipCard category="private" />
          <FlipCard category="civilSociety" />
        </div>

        <div>
          <p>
            During this stage, it is important to keep the following elements in
            mind:
          </p>
          <ul>
            <li>
              Distinguish between partners of the cooperation and broader
              stakeholders (see Table 16).
            </li>
            <li>
              Select carefully initial partners for the first phases of the
              cooperation, they need to be{" "}
              <span>
                willing to put time/resources for the initial push of the
                cooperation.
              </span>
            </li>
            <li>
              When it comes to development and service partners; be particularly
              careful with vendor lock ins and (intellectual) ownership of
              products developed
            </li>
            <li>
              Network with a minimum number of partners while ensuring that all
              required roles for the objectives to be met are fulfilled. Every
              partner should play a very distinctive role in the initial
              partnership (see roles Table 5 and template Table 17)
            </li>
            <li>
              Start with limited collaboration and small steps. New members can
              be added to the team once the proof of concept is validated.
            </li>
            <li>
              Use independent third party intermediaries to instil trust in the
              exchange (e.g., universities, personal data stores) and secure the
              skills needed (e.g. data quality partners, universities)
            </li>
            <li>
              Explore within a municipality where a data intermediary could
              fulfil a role
            </li>
            <li>
              Ideally, there should be big and medium/small local authorities.
              When relevant it is important to incorporate different levels of
              governance (e.g. metropolitan, regional, etc.). This will ensure
              scalability and future adoption.
            </li>
            <li>
              Ideally, involve end-users and citizens from the outset and
              throughout the{" "}
              <a
                href="http://www.adalovelaceinstitute.org/report/participatory-data-stewardship/"
                target="_blank"
              >
                process
              </a>
              . To do so, build on existing community networks and develop
              partnerships with organisations that are already conducting work
              with communities and can act as trusted gatekeepers.
            </li>
          </ul>
        </div>

        <TemplateMappingTable />

        <CheckOutCard category="responsibilities" variantColor="bgGray" />
      </div>
    );
  };
