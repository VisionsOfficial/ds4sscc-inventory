import { PropsWithChildren } from "react";
import Styles from "./TypeOfGovernanceTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type TypeOfGovernanceTableProps = {};

type ContentTypeOfGovernanceTable = {
  action: string;
  governance: "Broad" | "Mixed" | "Narrow";
  relevantBodies: string;
};

const CONTENT_TABLE: ContentTypeOfGovernanceTable[] = [
  {
    action: "Agreeing on core values and principles",
    governance: "Broad",
    relevantBodies:
      "All (led by Governance Authority & DS4SSCC participants representative committee)",
  },
  {
    action:
      "Determine conditions for access, sharing, processing, and using data",
    governance: "Broad",
    relevantBodies:
      "All (led by Governance Authority & DS4SSCC participants representative committee)",
  },
  {
    action: "Strategic Development & change management ",
    governance: "Broad",
    relevantBodies:
      "Governance Authority, Advisory Boards, DS4SSCC member representative committee, Data & Technology committee",
  },
  {
    action: "Review of processes (Audits & monitoring)",
    governance: "Mixed",
    relevantBodies:
      "Governance board, Operational Committee, DS4SSCC participants representative committee",
  },
  {
    action: "Enforcement",
    governance: "Mixed",
    relevantBodies: "EDIB, Governance Authority, Operational Committee",
  },
  {
    action: "Certification",
    governance: "Mixed",
    relevantBodies:
      "EDIB, DSSC, Governance Authority, Data & Technology committee",
  },
  {
    action: "Onboarding",
    governance: "Narrow",
    relevantBodies: "Operational Committee",
  },
  {
    action: "Data/ technical quality and standards",
    governance: "Narrow",
    relevantBodies:
      "Data & Technology committee, DS4SSCC participants representative board. Advisory boards",
  },
  {
    action: "Resource management",
    governance: "Narrow",
    relevantBodies: "Governance Board",
  },
  {
    action: "Support & capacity building",
    governance: "Narrow",
    relevantBodies:
      "Operational Committee, Community support, Training & Capacity building",
  },
  {
    action: "Provenance & Traceability",
    governance: "Narrow",
    relevantBodies: "Governance Authority, Operational committee",
  },
  {
    action: "Identity management",
    governance: "Narrow",
    relevantBodies: "Governance Authority, Data & Technology committee",
  },
];

export const TypeOfGovernanceTable =
  ({}: PropsWithChildren<TypeOfGovernanceTableProps>) => {
    return (
      <Table className={Styles.TypeOfGovernanceTable}>
        <caption>Table 5: Type of governance and relevant bodies</caption>
        <TableHead variantColor="secondary">
          <TableRow>
            <th>Actions</th>
            <th>Governance</th>
            <th>Relevant bodies</th>
          </TableRow>
        </TableHead>
        <TableBody variantColorMobile="secondary">
          {CONTENT_TABLE.map((el, index) => (
            <TableRow key={el.action + index}>
              <td>
                <span>Actions</span>
                {el.action}
              </td>
              <td>
                <span>Governance</span>
                {el.governance}
              </td>
              <td>
                <span>Relevant bodies</span>
                {el.relevantBodies}
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
