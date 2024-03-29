import { PropsWithChildren } from "react";
import Styles from "./GovernanceBodiesTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type GovernanceBodiesTableProps = {};

type ContentGovernanceBodiesTable = {
  entitie: string;
  composition: string;
  responsibilities: string;
};

const CONTENT_TABLE: ContentGovernanceBodiesTable[] = [
  {
    entitie: "Governance Authority",
    composition: "Representation of all types of roles and stakeholders",
    responsibilities: `Make decisions <br />
    Approve/ certify new participants <br />
    Enforce rules <br />
    Monitor DS4SSCC operations (Operational committee, WG, participants)
    `,
  },
  {
    entitie: "DS4SSCC participants representative committee",
    composition: "Representation of DS participants",
    responsibilities: `Advise Governance Authority`,
  },
  {
    entitie: "Advisory boards",
    composition:
      "Different types of Advisory Boards incorporating relevant expertise (e.g. Privacy, ethics, security)",
    responsibilities: `Advise Governance Authority`,
  },
  {
    entitie: "Data & technology committee",
    composition: "Committee of experts and DS4SSCC representatives",
    responsibilities: `Advise Governance Authority on technology, standards, etc <br />
    Recommend/ certify technologies/ standards
    `,
  },
  {
    entitie: "Operational Committee",
    composition:
      "Representatives of WG, community support bodies, DS4SSCC participants representative committee",
    responsibilities: `Monitor/ oversight of operational processes and respect of DS4SSCC rules by participants/WG <br />
    Report to Governance Authority <br />
    Enforce operational rules <br />
    Coordinate support bodies with DS participants <br />
    Communication with DS participants
    `,
  },
  {
    entitie: "WG/ use-case coordinators",
    composition:
      "Different types of working groups incorporating DS participants working on similar use-cases/ with similar technology",
    responsibilities: `Coordinate use-cases`,
  },
  {
    entitie: "DS4SSCC Community support",
    composition: "Organisations with relevant technical / legal expertise",
    responsibilities: `Communication <br />
    Operational Support of DS participants
    `,
  },
  {
    entitie: "Training & Capacity Building",
    composition: "Organisations with relevant training expertise",
    responsibilities: `Upskilling, training and capacity building of DS participants`,
  },
];

export const GovernanceBodiesTable =
  ({}: PropsWithChildren<GovernanceBodiesTableProps>) => {
    return (
      <Table className={Styles.GovernanceBodiesTable}>
        <caption>Table 4: Governance bodies</caption>
        <TableHead variantColor="secondary">
          <TableRow>
            <th>Entities</th>
            <th>Composition</th>
            <th>Responsibilities</th>
          </TableRow>
        </TableHead>
        <TableBody variantColorMobile="secondary">
          {CONTENT_TABLE.map((el, index) => (
            <TableRow key={el.entitie + index}>
              <td>
                <span>Entities</span>
                {el.entitie}
              </td>
              <td>
                <span>Composition</span>
                {el.composition}
              </td>
              <td>
                <span>Responsibilities</span>
                <p
                  dangerouslySetInnerHTML={{ __html: el.responsibilities }}
                ></p>
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
