import { PropsWithChildren } from "react";
import Styles from "./OverwiewCooperationModelsTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type OverwiewCooperationModelsTableProps = {};

type BodyTable = {
  type:
    | "Commercial Data"
    | "Data Marketplace"
    | "As-a-service model"
    | "Open Data / Data Donation"
    | "Pragmatic/Ad-hoc Data sharing"
    | "Trusted Third Party Intermediary"
    | "Personal Data Intermediary"
    | "Data Common/ Cooperative";
  exchanges:
    | "Bilateral"
    | "Multilateral"
    | "Bilateral / multilateral"
    | "Unilateral";
  approach:
    | "Business oriented"
    | "Altruistic"
    | "Cooperation"
    | "Altruistic/ Individual control";
};

const CONTENT_BODY: BodyTable[] = [
  {
    type: "Commercial Data",
    exchanges: "Bilateral",
    approach: "Business oriented",
  },
  {
    type: "Data Marketplace",
    exchanges: "Multilateral",
    approach: "Business oriented",
  },
  {
    type: "As-a-service model",
    exchanges: "Bilateral / multilateral",
    approach: "Business oriented",
  },
  {
    type: "Open Data / Data Donation",
    exchanges: "Unilateral",
    approach: "Altruistic",
  },
  {
    type: "Pragmatic/Ad-hoc Data sharing",
    exchanges: "Bilateral / multilateral",
    approach: "Cooperation",
  },
  {
    type: "Trusted Third Party Intermediary",
    exchanges: "Multilateral",
    approach: "Cooperation",
  },
  {
    type: "Personal Data Intermediary",
    exchanges: "Multilateral",
    approach: "Altruistic/ Individual control",
  },
  {
    type: "Data Common/ Cooperative",
    exchanges: "Multilateral",
    approach: "Cooperation",
  },
];

export const OverwiewCooperationModelsTable =
  ({}: PropsWithChildren<OverwiewCooperationModelsTableProps>) => {
    return (
      <Table className={Styles.OverwiewCooperationModelsTable}>
        <caption>Table 15: Overview cooperation models</caption>
        <TableHead variantColor="secondary">
          <TableRow>
            <th>Type</th>
            <th>Type exchanges</th>
            <th>Type of approach</th>
          </TableRow>
        </TableHead>
        <TableBody variantColorMobile="secondary">
          {CONTENT_BODY.map((el, index) => (
            <TableRow key={el.type + index}>
              <td className={Styles.type}>
                <span>Type</span>
                {el.type}
              </td>
              <td>
                <span>Type exchanges</span>
                {el.exchanges}
              </td>
              <td>
                <span>Type of approach</span>
                {el.approach}
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
