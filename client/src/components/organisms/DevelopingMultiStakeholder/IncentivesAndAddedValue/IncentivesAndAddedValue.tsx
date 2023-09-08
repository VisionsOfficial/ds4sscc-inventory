import { PropsWithChildren } from "react";
import Styles from "./IncentivesAndAddedValue.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";

type IncentivesAndAddedValueProps = {};

export const IncentivesAndAddedValue =
  ({}: PropsWithChildren<IncentivesAndAddedValueProps>) => {
    return (
      <div className={Styles.IncentivesAndAddedValue}>
        <Card className={Styles.card}>
          <h3>Market-driven</h3>

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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime doloremque voluptatum porro maiores
                  </td>
                  <td>
                    <span>Lorem ipsum dolor sit</span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime doloremque voluptatum porro maiores
                  </td>
                  <td>
                    <span>Lorem ipsum dolor sit</span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime doloremque voluptatum porro maiores
                  </td>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <Card className={Styles.card}>
          <h3>Organisational</h3>

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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime doloremque voluptatum porro maiores
                  </td>
                  <td>
                    <span>Lorem ipsum dolor sit</span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime doloremque voluptatum porro maiores
                  </td>
                  <td>
                    <span>Lorem ipsum dolor sit</span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime doloremque voluptatum porro maiores
                  </td>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <Card className={Styles.card}>
          <h3>Societal</h3>

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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime doloremque voluptatum porro maiores
                  </td>
                  <td>
                    <span>Lorem ipsum dolor sit</span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime doloremque voluptatum porro maiores
                  </td>
                  <td>
                    <span>Lorem ipsum dolor sit</span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime doloremque voluptatum porro maiores
                  </td>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  };
