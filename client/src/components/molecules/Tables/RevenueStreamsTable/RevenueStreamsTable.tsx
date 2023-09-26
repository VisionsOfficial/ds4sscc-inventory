import { PropsWithChildren } from "react";
import Styles from "./RevenueStreamsTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type RevenueStreamsTableProps = {};

type BodyTable = {
  type:
    | "Usage fees"
    | "Subscription fees"
    | "Selling of services"
    | "Public funding/ grants"
    | "Private investment"
    | "Private sponsorship"
    | "In-kind donations";
  forms: string;
};

const CONTENT_BODY: BodyTable[] = [
  {
    type: "Usage fees",
    forms: `Fees for depositing, submitting or updating data, via a standard API or submission form. Includes registration of organisations, content and identifiers for parts, products and services into an official register/ repository <br />
        Fees for accessing and using data via a standard API or else.
        `,
  },
  {
    type: "Subscription fees",
    forms: `Membership fees for access to services, data and other direct benefits provided as part of the cooperation (e.g. training, helpdesk) <br />
    Subscription fees for use of the infrastructure. <br />
    Subscription fees for access to a specific product or service that uses the data <br />
    Subscription fees for access to a higher-level service level agreement or support arrangement for using the infrastructure
    `,
  },
  {
    type: "Selling of services",
    forms: `Provision of services (including by DS enablers/ intermediaries) It overlaps with the subscriptions and usage fees models`,
  },
  {
    type: "Public funding/ grants",
    forms: `Grants awarded for a specific agreed purpose, for example, to carry out a project or invest in infrastructure (local, regional, national, EU)`,
  },
  {
    type: "Private investment",
    forms: `Money invested by private sector organisations under conditions (return on investment)`,
  },
  {
    type: "Private sponsorship",
    forms: `One-off or regular cash donations and sponsorship`,
  },
  {
    type: "In-kind donations",
    forms: `Provision of staff time to provide support during setup and operations <br />
    Provision of technical infrastructure to support operations  <br />
    Provision of staff time to develop and maintain software <br />
    Volunteer time to support collection and curation of data, community engagement, software development, etc <br />
    Data donations
    `,
  },
];

export const RevenueStreamsTable =
  ({}: PropsWithChildren<RevenueStreamsTableProps>) => {
    return (
      <Table className={Styles.RevenueStreamsTable}>
        <TableHead variantColor="secondary">
          <TableRow>
            <th>Type</th>
            <th>Possible forms</th>
          </TableRow>
        </TableHead>
        <TableBody variantColorMobile="secondary">
          {CONTENT_BODY.map((el, index) => (
            <TableRow key={el.type + index}>
              <td>
                <span>Type</span>
                {el.type}
              </td>
              <td>
                <span>Possible forms</span>
                <p dangerouslySetInnerHTML={{ __html: el.forms }}></p>
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
