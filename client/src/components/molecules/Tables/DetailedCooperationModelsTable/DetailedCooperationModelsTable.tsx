import { PropsWithChildren } from "react";
import Styles from "./DetailedCooperationModelsTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";
import { CooperationModelsTypes } from "../../../../types";

type DetailedCooperationModelsTableProps = {};

type HeaderTable =
  | "Types"
  | "When to use it"
  | "How it works"
  | "Control on input"
  | "Control on use";

type BodyTable = {
  type: CooperationModelsTypes;
  useIt: string;
  works: string;
  ctrlInput: string;
  crtlUse: string;
};

const HEADER_CONTENT: HeaderTable[] = [
  "Types",
  "When to use it",
  "How it works",
  "Control on input",
  "Control on use",
];

const BODY_CONTENT: BodyTable[] = [
  {
    type: "Commercial data",
    useIt:
      "When data is needed that is not available for free and/or requires a lot of effort to collect, uniform, combine and aggregate.",
    works:
      "One or more commercial data providers collect, transform, combine and/or aggregate data and provide the information to users in exchange for a fee (per month, per data set, per GB, etc.).",
    ctrlInput: `<span>High.</span> The data provider decides on what data is used for input and how it is processed`,
    crtlUse: `<span>Medium.</span> Once delivered to the purchaser, the data can be used for any application. In some cases, the terms and conditions exclude a certain type of use`,
  },
  {
    type: "Data Marketplace",
    useIt: "When data is available but is spread all over the internet.",
    works:
      "A marketplace provides a platform for data providers to offer their data to potential users. It enables the monetization or brokerage of data for both discovery and transactions between buyers and providers.",
    ctrlInput: `<span>Low.</span> if marketplace is open <br />
    <span>High:</span> if marketplace is curated`,
    crtlUse: `<span>Low.</span> Re-use and innovation for unforeseen applications are welcomed`,
  },
  {
    type: "As-A-Service model",
    useIt:
      "When a data owner has an interest in adding an extra service layer on top of the available data",
    works:
      "Businesses provide services that are valuable to public bodies and private companies. This includes SaaS (LDT), DaaS (e.g. data quality, aggregation, standardisation, etc) and Algorithm/analytics as a service.",
    ctrlInput: `<span>Low.</span> The input of data depends on the information that is provided by data owners and users.`,
    crtlUse: `<span>Low.</span> When data analytics and methods of analytics  are not provided <br />
    <span>High:</span> When data analytics and methods of processing are provided`,
  },
  {
    type: "Open Data / Data Donation",
    useIt:
      "When one or more entities (government, non-profit or business) want to provide their data to enable re-use and innovation.",
    works:
      "The data is published on a website or portal, or alternatively shared with specific organisations. The data is well-documented with metadata and has a licence that allows for a broad use of the data. The data can be published using a repository that provides data users an efficient way to search for data as well metadata and a link to the actual data.",
    ctrlInput: `<span>High.</span> The initiator decides for itself what data will be published.`,
    crtlUse: `<span>Low.</span> Re-use and 
    innovation for unforeseen applications are welcomed
    `,
  },
  {
    type: "Pragmatic / Ad-hoc data sharing",
    useIt:
      "When participants have a shared interest or objective, and don’t mind sharing their (source) data",
    works:
      "In a shared data cooperation, participants define what data they can offer, and what data they would like from other participants. If a satisfying set of data can be agreed upon, this data is shared on a shared disk, cloud platform or any other way to exchange this data.",
    ctrlInput: `<span>Medium.</span> All participants agree on what data is input, so there is a strict control. However, only data that participants have and are allowed and willing to share, will be shared.`,
    crtlUse: `<span>Medium.</span> Participants agree on what data can be used for what use. However, once the data is out, it is difficult to control the use.`,
  },
  {
    type: "Trusted Third Party Intermediary",
    useIt:
      "When participants don’t want to share their (source) data but can think of very specific situations (like incidents/disasters or bankruptcy) where they have a shared interest or objective to share data.",
    works:
      "A trusted third party is used to collect, interpret, and combine the data. The third party applies an agreed-upon algorithm or process to provide the required output information. This output information is the minimum amount of (aggregated) data that a) can be shared and b) is needed to fulfil the shared objective",
    ctrlInput: `<span>High.</span> All participants agree in advance what data will be provided.`,
    crtlUse: `<span>High.</span> Provided information is tailored to and can only be used for specific objectives, as agreed with third party intermediary.`,
  },
  {
    type: "Personal Data Intermediary",
    useIt:
      "When persons should have maximum control over access to their data.",
    works:
      "Providing personal data vaults or personal information management systems to citizens, to store their personal data and to empower maximum user control over data access, permissions and data decision making. To facilitate secure, personal control over your data.",
    ctrlInput: `<span>High.</span> Each person has maximum control over its personal data vault`,
    crtlUse: `<span>High.</span> Each person has maximum control over its personal data vault`,
  },
  {
    type: "Data Common / Cooperative",
    useIt:
      "When members of a community want to protect valuable data, so that it can only be used in a way that contributes to the community.",
    works:
      "Data commons refer to organisational arrangements ‘with members voluntarily ‘pooling’ their data for the benefit of a specific community or for the general public interest’ while data cooperatives refer to ‘to a data intermediary owned and democratically controlled by its members who delegate control over data about them’ (Janssen & Singh 2022:6)",
    ctrlInput: `<span>High.</span> The community has maximum control over data`,
    crtlUse: `<span>High.</span> The community has maximum control over data`,
  },
];

export const DetailedCooperationModelsTable =
  ({}: PropsWithChildren<DetailedCooperationModelsTableProps>) => {
    const setContentCeil = (thead: HeaderTable, content: BodyTable) => {
      switch (thead) {
        case "Types":
          return content.type;
        case "When to use it":
          return content.useIt;
        case "How it works":
          return content.works;
        case "Control on input":
          return (
            <p dangerouslySetInnerHTML={{ __html: content.ctrlInput }}></p>
          );
        case "Control on use":
          return <p dangerouslySetInnerHTML={{ __html: content.crtlUse }}></p>;

        default:
          return null;
      }
    };

    return (
      <Table className={Styles.DetailedCooperationModelsTable}>
        <caption>Table 16: Detailed overview of cooperation models</caption>
        <TableHead variantColor="secondary">
          <TableRow>
            {HEADER_CONTENT.map((headEl, index) => (
              <th key={headEl + index}>{headEl}</th>
            ))}
          </TableRow>
        </TableHead>
        <TableBody variantColorMobile="secondary">
          {BODY_CONTENT.map((el, index) => (
            <TableRow key={el.type + index}>
              {HEADER_CONTENT.map((headerEl, index) => (
                <td
                  key={headerEl + index}
                  className={headerEl === "Types" ? Styles.types : ""}
                >
                  <span>{headerEl}</span>
                  {setContentCeil(headerEl, el)}
                </td>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
