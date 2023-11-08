import { PropsWithChildren } from "react";
import Styles from "./PriorityDatasetsTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";
import { PRIORRITY_DATASETS_DATA } from "../../../../data/priorityDatasetsData";
import { Pill } from "../../../atoms/Pills/Pill/Pill";
import { APP_LINKS } from "../../../../utils/appLinks";

type PriorityDatasetsTableProps = {};

export const PriorityDatasetsTable =
  ({}: PropsWithChildren<PriorityDatasetsTableProps>) => {
    return (
      <Table className={Styles.PriorityDatasetsTable}>
        <TableHead variantColor="white">
          <TableRow>
            <th>Detected priority datasets</th>
            <th>Related Dataset (as defined by EC)</th>
            <th>Domain</th>
            <th>Hyperlinks to examples</th>
          </TableRow>
        </TableHead>
        <TableBody variantColor="primary" className={Styles.body}>
          {PRIORRITY_DATASETS_DATA.map((dataset, index) => (
            <TableRow key={dataset?._id + index}>
              <td className={Styles.name}>
                <span>Detected priority datasets</span>
                {dataset?.name}
              </td>
              <td>
                <span>Related Dataset (as defined by EC)</span>
                {dataset?.releated ? dataset?.releated : "-"}
              </td>
              <td>
                <span>Domain</span>
                {dataset?.domain}
              </td>
              <td className={Styles.links}>
                <span>Hyperlinks to examples</span>
                <div className={Styles.pills}>
                  {dataset?.links?.map((link, index) => (
                    <Pill
                      key={link?.linkName + index}
                      variantColor="secondary"
                      navigate={
                        APP_LINKS.collectedUseCases + `?${link.linkName}`
                      }
                    >
                      {link?.linkName}
                    </Pill>
                  ))}
                </div>
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
