import { PropsWithChildren } from "react";
import Styles from "./ActionPlanCheatsheetTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type ActionPlanCheatsheetTableProps = {};

export const ActionPlanCheatsheetTable =
  ({}: PropsWithChildren<ActionPlanCheatsheetTableProps>) => {
    return (
      <Table className={Styles.ActionPlanCheatsheetTable}>
        <TableHead>
          <TableRow>
            {[...Array(4)].map((_, index) => (
              <th key={index}>Lorem ipsum dolor sit</th>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(4)].map((_, index) => (
            <TableRow key={index}>
              {[...Array(4)].map((_, i) => (
                <td key={i} style={{ textAlign: "center" }}>
                  <span>Lorem ipsum dolor sit</span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam
                </td>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
