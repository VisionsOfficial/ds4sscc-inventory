import { PropsWithChildren } from "react";
import Styles from "./TableInCard.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";

type TableInCardProps = {
  title?: string;
};

export const TableInCard = ({ title }: PropsWithChildren<TableInCardProps>) => {
  return (
    <Card className={Styles.TableInCard}>
      <h3>{title}</h3>

      <Table>
        <TableHead variantColor="secondary">
          <TableRow>
            {[...Array(3)].map((_, index) => (
              <th key={index}>Lorem ipsum dolor sit</th>
            ))}
          </TableRow>
        </TableHead>
        <TableBody variantColor="white">
          {[...Array(3)].map((_, index) => (
            <TableRow key={index}>
              <td>
                <span>Lorem ipsum dolor sit</span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                doloremque voluptatum porro maiores
              </td>
              <td>
                <span>Lorem ipsum dolor sit</span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                doloremque voluptatum porro maiores
              </td>
              <td>
                <span>Lorem ipsum dolor sit</span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                doloremque voluptatum porro maiores
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
