import { PropsWithChildren } from "react";
import Styles from "./ContractualAgreementsTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type ContractualAgreementsTableProps = {};

type HeaderContractualAgreeementsTable =
  | "DATA RIGHTS HOLDER"
  | "DATA PROVIDER"
  | "DATA USER"
  | "USE-CASE INITIATOR"
  | "DATA SPACE INTERMEDIARY SERVICE OPERATORS"
  | "OTHER SERVICE PROVIDERS"
  | "GOVERNANCE BODIES"
  | "ORCHESTRATOR / COORDINATING ENTITY"
  | "COMMUNITY SUPPORT BODIES";

type ContentContractualAgreementsTable = {
  contractual: string;
  checks: HeaderContractualAgreeementsTable[];
};

const HEADER_TABLE: HeaderContractualAgreeementsTable[] = [
  "DATA RIGHTS HOLDER",
  "DATA PROVIDER",
  "DATA USER",
  "USE-CASE INITIATOR",
  "DATA SPACE INTERMEDIARY SERVICE OPERATORS",
  "OTHER SERVICE PROVIDERS",
  "GOVERNANCE BODIES",
  "ORCHESTRATOR / COORDINATING ENTITY",
  "COMMUNITY SUPPORT BODIES",
];

const CONTENT_TABLE: ContentContractualAgreementsTable[] = [
  {
    contractual: "General agreement or constitutive agreement",
    checks: [
      "GOVERNANCE BODIES",
      "ORCHESTRATOR / COORDINATING ENTITY",
      "COMMUNITY SUPPORT BODIES",
    ],
  },
  {
    contractual: "Status of Governance body and legal entity",
    checks: ["GOVERNANCE BODIES"],
  },
  {
    contractual: "Membership agreements (incl, T&C)",
    checks: [
      "DATA RIGHTS HOLDER",
      "DATA PROVIDER",
      "DATA USER",
      "USE-CASE INITIATOR",
      "DATA SPACE INTERMEDIARY SERVICE OPERATORS",
      "OTHER SERVICE PROVIDERS",
    ],
  },
  {
    contractual:
      "Service-level agreements for services offered within the data space",
    checks: [
      "DATA PROVIDER",
      "DATA SPACE INTERMEDIARY SERVICE OPERATORS",
      "OTHER SERVICE PROVIDERS",
    ],
  },
  {
    contractual:
      "Contractual terms concerning switching between providers of data processing services",
    checks: [
      "DATA SPACE INTERMEDIARY SERVICE OPERATORS",
      "OTHER SERVICE PROVIDERS",
    ],
  },
  {
    contractual: "Specific data sharing agreements in DS4SSCC use-cases",
    checks: [
      "DATA RIGHTS HOLDER",
      "DATA PROVIDER",
      "DATA USER",
      "USE-CASE INITIATOR",
      "OTHER SERVICE PROVIDERS",
      "GOVERNANCE BODIES",
    ],
  },
];

export const ContractualAgreementsTable =
  ({}: PropsWithChildren<ContractualAgreementsTableProps>) => {
    return (
      <Table className={Styles.ContractualAgreementsTable}>
        <caption>
          Table 8: Possible contractual relationships in DS4SSCC
        </caption>
        <TableHead variantColor="secondary">
          <TableRow>
            <th className={Styles.contractual}>
              <a
                href="https://dataspacessupportcentre.atlassian.net/wiki/spaces/ELFFDS/pages/142901354/PUBLIC+CONSULTATION+-+31+08+2023+-+Contractual+framework+building+block+-+Description+v0.5"
                target="_blank"
              >
                Contractual relationships
              </a>
            </th>
            {HEADER_TABLE.map((el, index) => (
              <th key={el + index}>{el}</th>
            ))}
          </TableRow>
        </TableHead>
        <TableBody variantColorMobile="secondary">
          {CONTENT_TABLE.map((el, index) => (
            <TableRow key={el.contractual + index}>
              <td className={Styles.contractual}>
                <span>Contractual relationships</span>
                {el.contractual}
              </td>
              {HEADER_TABLE.map((headEl, index) => (
                <td key={headEl + index} className={Styles.check}>
                  <span>{headEl}</span>
                  {el.checks.includes(headEl) ? "✓" : null}
                </td>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
