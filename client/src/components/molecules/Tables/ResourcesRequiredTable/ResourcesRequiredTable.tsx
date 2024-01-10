import React, { PropsWithChildren } from "react";
import Styles from "./ResourcesRequiredTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type ResourcesRequiredTableProps = {};

type HeaderTable =
  | "Resources required for each phase of data cooperation"
  | "Examples of associated organisational roles"
  | "Preparatory phase"
  | "Implementation phase"
  | "Operational phase"
  | "Scaling up phase";

type BodyTable = {
  resourceRequired:
    | "Datasets"
    | "Data services"
    | "Infrastructures (e.g., hardware, storage, etc.)"
    | "Technical support & skills"
    | "Legal support & skills"
    | "Strategic staff resources"
    | "Operational staff resources"
    | "Communication"
    | "Finances/ funding";
  example: string;
};

const HEADER_TABLE: HeaderTable[] = [
  "Resources required for each phase of data cooperation",
  "Examples of associated organisational roles",
  "Preparatory phase",
  "Implementation phase",
  "Operational phase",
  "Scaling up phase",
];

const CONTENT_TABLE: BodyTable[] = [
  {
    resourceRequired: "Datasets",
    example: "Data steward, DPO, Data Scientists",
  },
  {
    resourceRequired: "Data services",
    example: "CTO, CDO, Data Scientists",
  },
  {
    resourceRequired: "Infrastructures (e.g., hardware, storage, etc.)",
    example: "CTO, IT Specialists/ technicians, specialist core technology",
  },
  {
    resourceRequired: "Technical support & skills",
    example: "CTO, technicians, Specialist technical standards",
  },
  {
    resourceRequired: "Legal support & skills",
    example: "DPO, lawyers",
  },
  {
    resourceRequired: "Strategic staff resources",
    example: "Partnership Manager, Senior manager",
  },
  {
    resourceRequired: "Operational staff resources",
    example: "Administrative staff, project manager",
  },
  {
    resourceRequired: "Communication",
    example: "Communication manager, Marketing manager",
  },
  {
    resourceRequired: "Finances/ funding",
    example: "Financial manager",
  },
];

export const ResourcesRequiredTable =
  ({}: PropsWithChildren<ResourcesRequiredTableProps>) => {
    const setContentCeil = (thead: HeaderTable, el: BodyTable) => {
      switch (thead) {
        case "Resources required for each phase of data cooperation":
          return el.resourceRequired;
        case "Examples of associated organisational roles":
          return el.example;

        default:
          return null;
      }
    };

    return (
      <Table className={Styles.ResourcesRequiredTable}>
        <TableHead variantColor="secondary">
          <TableRow>
            {HEADER_TABLE.map((headEl, index) => (
              <th key={headEl + index}>{headEl}</th>
            ))}
          </TableRow>
        </TableHead>
        <TableBody variantColorMobile="secondary">
          {CONTENT_TABLE.map((el, index) => (
            <TableRow key={(el.resourceRequired, index)}>
              {HEADER_TABLE.map((headEl, index) => (
                <td key={headEl + index}>
                  <span>{headEl}</span>
                  {setContentCeil(headEl, el)}
                </td>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
