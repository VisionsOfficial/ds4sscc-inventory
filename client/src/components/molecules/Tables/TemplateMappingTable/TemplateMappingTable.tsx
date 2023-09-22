import { PropsWithChildren } from "react";
import Styles from "./TemplateMappingTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type TemplateMappingTableProps = {};

type ContentTemplateTable = {
  role: "Participatory" | "Intermediary" | "Governing";
  subRoles: string[];
};

const CONTENT_TABLE: ContentTemplateTable[] = [
  {
    role: "Participatory",
    subRoles: [
      "Data Holder",
      "Data Provider",
      "Data User",
      "Use case Participant",
    ],
  },
  {
    role: "Intermediary",
    subRoles: ["Intermediation services", "Personal data intermediaries"],
  },
  {
    role: "Governing",
    subRoles: [
      "Decision-making (Governance bodies)",
      "Orchestrator / coordinating entity",
      "Support & Capacity building",
    ],
  },
];

export const TemplateMappingTable =
  ({}: PropsWithChildren<TemplateMappingTableProps>) => {
    return (
      <Table className={Styles.TemplateMappingTable}>
        <TableHead variantColor="secondary">
          <TableRow>
            <th colSpan={2}>Roles</th>
            <th>Partner 1</th>
            <th>Partner 2</th>
            <th>Partner 3</th>
            <th>Etc.</th>
          </TableRow>
        </TableHead>
        <TableBody variantColorMobile="secondary">
          {CONTENT_TABLE.map((el, index) => (
            <TableRow key={el.role + index}>
              <td className={Styles.role}>
                <span>Roles</span>
                {el.role}
              </td>
              <td>
                <span>Roles</span>
                <div className={Styles.wrapper}>
                  {el.subRoles.map((subrole, index) => (
                    <p key={subrole + index}>{subrole}</p>
                  ))}
                </div>
              </td>
              <td>
                <span>Partner 1</span>
              </td>
              <td>
                <span>Partner 2</span>
              </td>
              <td>
                <span>Partner 3</span>
              </td>
              <td>
                <span>Partner 4</span>
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
