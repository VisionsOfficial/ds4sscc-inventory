import { PropsWithChildren } from "react";
import Styles from "./VisionsAndPrinciplesTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";
import { Link } from "react-router-dom";

type VisionsAndPrinciplesTableProps = {};

type ContentTableVisionsAndPrinciples = {
  organisational: string;
  governance: string;
  links?: string[];
};

const CONTENT_TABLE: ContentTableVisionsAndPrinciples[] = [
  {
    organisational: "Citizen-centricity / public interest",
    governance: "Protection of human & digital rights",
  },
  {
    organisational: "Transparency",
    governance: "Ethical & responsible use of data",
  },
  {
    organisational: "Representativity",
    governance: "Data & Technology Sovereignty",
  },
  {
    organisational: "Consensus process & Reciprocity",
    governance: "Findability, Accessibility, Interoperability, Reuse",
    links: ["https://www.go-fair.org/fair-principles/"],
  },
  {
    organisational: "Participation",
    governance: "Security",
  },
  {
    organisational: "Inclusion of broad range of stakeholders",
    governance: "Data quality",
  },
  {
    organisational: "Oversight & Monitoring",
    governance: "Data Protection",
  },
  {
    organisational: "Accountability",
    governance: "Privacy by design",
  },
  {
    organisational: "Enforcement of governance rules",
    governance: "Decentralised solutions",
  },
  {
    organisational: "Fairness",
    governance: "Data minimisation",
  },
  {
    organisational: "Trust",
    governance: "Common standards",
  },
  {
    organisational: "Assessment of carbon footprint of digital infrastructure",
    governance: "Work with linked data (e.g. OSLO, LDES), Open Source software",
    links: [
      "https://joinup.ec.europa.eu/collection/oslo-open-standards-linked-organisations-0/about",
      "https://joinup.ec.europa.eu/collection/semic-support-centre/linked-data-event-streams-ldes",
      "https://joinup.ec.europa.eu/collection/free-and-open-source-software",
    ],
  },
];

export const VisionsAndPrinciplesTable =
  ({}: PropsWithChildren<VisionsAndPrinciplesTableProps>) => {
    return (
      <Table className={Styles.VisionsAndPrinciplesTable}>
        <caption>Table 1: Principles for DS4SSSCC</caption>
        <TableHead variantColor="secondary">
          <TableRow>
            <th>Principles for Organisational Processes & Decision Making</th>
            <th>Principles for Data Governance</th>
          </TableRow>
        </TableHead>
        <TableBody variantColorMobile="secondary">
          {CONTENT_TABLE.map((content, index) => (
            <TableRow key={"contentTable" + index}>
              <td>
                <span>
                  Principles for Organisational Processes & Decision Making
                </span>
                {content.organisational}
              </td>
              <td>
                <span>Principles for Data Governance</span>
                {content.governance.includes("OSLO") && content.links && (
                  <p>
                    Work with linked data (e.g.{" "}
                    <a href={content.links[0]} target="_blank">
                      OSLO
                    </a>
                    ,{" "}
                    <a href={content.links[1]} target="_blank">
                      LDES
                    </a>
                    ),{" "}
                    <Link to={content.links[2]} target="_blank">
                      Open Source software
                    </Link>
                  </p>
                )}
                {!content.governance.includes("OSLO") && content?.links ? (
                  <a href={content?.links[0]} target="_blank">
                    {content.governance}
                  </a>
                ) : !content.governance.includes("OSLO") ? (
                  <p style={{ margin: 0 }}>{content.governance}</p>
                ) : null}
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
