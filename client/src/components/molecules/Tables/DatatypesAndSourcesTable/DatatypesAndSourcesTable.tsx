import { PropsWithChildren } from "react";
import Styles from "./DatatypesAndSourcesTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type DatatypesAndSourcesTableProps = {};

type ContentDatatypesAndSourcesTable = {
  datasetProfile:
    | "Types/ Domains"
    | "Source/ provenance"
    | "Format"
    | "Access rights"
    | "Specifications"
    | "Quality"
    | "Risk assessments";
  description: string;
};

const CONTENT_TABLE: ContentDatatypesAndSourcesTable[] = [
  {
    datasetProfile: "Types/ Domains",
    description: "Personal /Public/ Private domains",
  },
  {
    datasetProfile: "Source/ provenance",
    description:
      "Public sector, private sector, citizen-generated, sensors, research",
  },
  {
    datasetProfile: "Format",
    description:
      "Data & Technical standards ( including meta-data documentation, level and methods of aggregation and anonymisation)",
  },
  {
    datasetProfile: "Access rights",
    description: "Restricted, Shared, Open",
  },
  {
    datasetProfile: "Specifications",
    description:
      "Granularity required (see example mobile phone data specification Appendix 3)",
  },
  {
    datasetProfile: "Quality",
    description:
      "Accuracy, completeness, consistency, timeliness, uniqueness, and validity.",
  },
  {
    datasetProfile: "Risk assessments",
    description: `DPIA, Data ethics assessment, Data <a href="https://www.theodi.org/article/data-ethics-maturity-model-benchmarking-your-approach-to-data-ethics/" target="_blank">maturity</a>  <a href="https://www.theodi.org/article/assessing-risk-when-sharing-data-a-guide/" target="_blank">assessment</a>`,
  },
];

export const DatatypesAndSourcesTable =
  ({}: PropsWithChildren<DatatypesAndSourcesTableProps>) => {
    return (
      <Table className={Styles.DatatypesAndSourcesTable}>
        <caption>Table 13: Dataset profile</caption>
        <TableHead variantColor="secondary">
          <TableRow>
            <th>Dataset profile</th>
            <th colSpan={2}>Description</th>
          </TableRow>
        </TableHead>
        <TableBody variantColorMobile="secondary">
          {CONTENT_TABLE.map((el, index) => (
            <TableRow key={el.datasetProfile + index}>
              <td className={Styles.datasetProfile}>
                <span>Dataset profile</span>
                {el.datasetProfile === "Access rights" ? (
                  <a
                    href="https://www.theodi.org/about-the-odi/the-data-spectrum/"
                    target="_blank"
                  >
                    {el.datasetProfile}
                  </a>
                ) : (
                  el.datasetProfile
                )}
              </td>
              <td colSpan={2}>
                <span>Description</span>
                <p dangerouslySetInnerHTML={{ __html: el.description }}></p>
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
