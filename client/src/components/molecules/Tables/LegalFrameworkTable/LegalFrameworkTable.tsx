import { PropsWithChildren } from "react";
import Styles from "./LegalFrameworkTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";

type LegalFrameworkTableProps = {};

export const LegalFrameworkTable =
  ({}: PropsWithChildren<LegalFrameworkTableProps>) => {
    return (
      <Table className={Styles.LegalFrameworkTable}>
        <TableHead>
          <TableRow>
            <th>Lorem ipsum dolor sit</th>
            <th>Lorem ipsum dolor sit</th>
            <th>Lorem ipsum dolor sit</th>
            <th>Lorem ipsum dolor sit</th>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(4)].map((_, index) => (
            <TableRow key={index}>
              <td>
                <span>Lorem ipsum dolor sit</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                qui architecto, fugiat perferendis odio totam, obcaecati
              </td>
              <td>
                <span>Lorem ipsum dolor sit</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                qui architecto, fugiat perferendis odio totam, obcaecati
              </td>
              <td>
                <span>Lorem ipsum dolor sit</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                qui architecto, fugiat perferendis odio totam, obcaecati
              </td>
              <td>
                <span>Lorem ipsum dolor sit</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                qui architecto, fugiat perferendis odio totam, obcaecati
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
