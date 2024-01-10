import { PropsWithChildren, useEffect, useState } from "react";
import Styles from "./IncentivesTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { CategoryTableInCard } from "../../../../types";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type IncentivesTableProps = {
  category: CategoryTableInCard;
};

type HeaderIncentivesTable =
  | "Cities & Local authorities"
  | "Private sector"
  | "Academia"
  | "Civil Society";

type ContentIncentivesTable = {
  authorities?: string;
  privateSector?: string;
  academia?: string;
  civilSociety?: string;
  one?: string;
};

const HEADER_TABLE: HeaderIncentivesTable[] = [
  "Cities & Local authorities",
  "Private sector",
  "Academia",
  "Civil Society",
];

export const IncentivesTable = ({
  category,
}: PropsWithChildren<IncentivesTableProps>) => {
  const [contentTable, setContentTable] = useState<ContentIncentivesTable>();

  const setContent = (title: HeaderIncentivesTable) => {
    switch (title) {
      case "Cities & Local authorities":
        return contentTable?.authorities;
      case "Private sector":
        return contentTable?.privateSector;
      case "Academia":
        return contentTable?.academia;
      case "Civil Society":
        return contentTable?.civilSociety;

      default:
        return "";
    }
  };

  useEffect(() => {
    switch (category) {
      case "Monetary/Market-driven":
        setContentTable({
          authorities: `Costs sharing (e.g., reduce data storage compliance costs, lower costs of development & implementation, saving time and money by sharing burden). <br />
                      Resources sharing (e.g., capacities, capabilities, skills, infrastructures, etc). <br />
                      Development of new products & services (Combining data sources to improve services/ optimise services/ develop new ones). <br />
                      Enabling joint innovation. <br />
                      Scaling up
                      `,
          privateSector: `Provider of technical and digital solutions for smart cities (platforms, SaaS, data as a service, visualisations, analytical tools, etc,). <br />
                  Enabling markets for both data products and solutions based on data. <br />
                  Increased visibility and distribution of services. <br />
                  Finding new partners/ clients, expanding the EU market. <br />
                  Test & deploy new services/ infrastructures. <br />
                  Test deployment possibilities with cities. <br />
                  Development of new products & services (Combining data sources to improve services/ optimise services/ develop new ones). <br />
                  Enabling joint innovation.
                  `,
          academia: `Enabling joint innovation <br />
            Development of new products & services (Combining data sources to improve services/ optimise services/ develop new ones).`,
          civilSociety: `Enabling joint innovation <br /
            Development of new products & services (Combining data sources to improve services/ optimise services/ develop new ones).`,
        });
        break;
      case "Organisational":
        setContentTable({
          authorities: `Access to new sources of high-quality data <br />
            Internal data discoverability (Vision about available datasets, Providing data and finding consumers for data  improves your internal processes). <br />
            Early access to specifications and state of the art technology. <br />
            Data standardisation (incl. data quality improvement). <br />
            Access to funding (e.g. DS4SSCC Deployment call). <br />
            Sharing methods/processes to ensure legal compliance (e.g. reduce costs of making processes and data GDPR compliant and reduce risks of GDPR breaches). <br />
            Reputational (i.e., using data for common good). <br />
            Align with EU standardisation & digital infrastructure and be part of the EU digital single market. <br />
            Exchange experience about specific use-cases (i.e. Learning from other stakeholders in the ecosystem, especially frontrunners sharing knowledge/experience/practices with less mature players). <br />
            Benefit from technical or legal expertise.
            `,
          privateSector: `Access to new sources of high-quality data. <br />
            Help define and establish Data Sharing Agreements and Standards. <br />
            Reputational (i.e., using data for common good).<br />
            Align with EU standardisation & digital infrastructure and be part of the EU digital single market. <br />
            Identification of gaps (data services) and creation of opportunities. <br /> 
            Data exploration/ discovery.
            `,
          academia: `Access to new sources of high-quality data for research purposes. <br />
            Access to funding. <br />
            Part of broader ecosystem/contact with future partners.
            `,
          civilSociety: `Control of personal data <br />
            Access to new sources of high-quality data. <br />
            Better services <br />
            Participation in data stewardship and local data initiatives to ensure relevance/ public benefit.
            `,
        });
        break;
      case "Societal":
        setContentTable({
          one: `Improvement of services provision for citizens. <br />
            Making more use of data that is collected using public resources for value to flow back to society (businesses, citizens). <br /> 
            Use data for research. <br />
            Data-driven decisions and policy making (e.g., planning, operations & emergency management, safety, mobility). <br />
            Align with Green Deal objectives. <br />
            Empowering citizens & communities.
            `,
        });

      default:
        break;
    }
  }, [category]);

  return (
    <Table className={Styles.IncentivesTable}>
      <caption>Table 10: Incentives per type of stakeholders</caption>
      <TableHead variantColor="secondary">
        <TableRow>
          {HEADER_TABLE.map((el, index) => (
            <th key={el + index}>{el}</th>
          ))}
        </TableRow>
      </TableHead>
      <TableBody variantColorMobile="secondary">
        <TableRow>
          {HEADER_TABLE.map((el, index) => {
            if (category === "Societal" && index > 0) return;
            return (
              <td key={el + index} colSpan={category == "Societal" ? 4 : 1}>
                <span>{el}</span>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      category === "Societal"
                        ? contentTable?.one || ""
                        : setContent(el) || "",
                  }}
                ></p>
              </td>
            );
          })}
        </TableRow>
      </TableBody>
    </Table>
  );
};
