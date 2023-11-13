import { PropsWithChildren } from "react";
import Styles from "./AdvantagesAndRisksCooperationModelsTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { CooperationModelsTypes } from "../../../../types";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type AdvantagesAndRisksCooperationModelsTableProps = {};

type HeaderTable =
  | "Types"
  | "Associated contractual forms"
  | "Advantages"
  | "Risks";

type BodyTable = {
  type: CooperationModelsTypes;
  contractualForms: string;
  advantages: string;
  risks: string;
};

const HEADER_TABLE: HeaderTable[] = [
  "Types",
  "Associated contractual forms",
  "Advantages",
  "Risks",
];

const CONTENT_BODY: BodyTable[] = [
  {
    type: "Commercial data",
    contractualForms: `Data purchasing agreements`,
    advantages: `Certainty: contractual agreements with specifications <br />
        Clear legal terms/obligations to stick to by the provider <br />
        Clear business opportunity for private sector <br />
        `,
    risks: `Risk of discontinuity when contract expires (cannot be renewed) <br />
        Not always applicable (if you are targeting a specific dataset from one supplier) due to fair competence rules on tenders <br />
        Can be expensive
        `,
  },
  {
    type: "Data Marketplace",
    contractualForms: `Data purchasing agreements`,
    advantages: `Monetarisation <br />
    Data discoverability <br />
    Easy process / standardisation of processes
    `,
    risks: `Data is hard to find as it is spread across the internet. Demand and supply of data are inefficiently matched. <br />
    Can be expensive
    `,
  },
  {
    type: "As-A-Service model",
    contractualForms: `Service Level Agreements <br />
    Data Sharing Agreements
    `,
    advantages: `Certainty: contractual agreements with specifications <br />
    Clear legal terms/obligations to stick to by the provider <br />
    Adapted to specific needs in ecosystem (e.g., SaaS, DaaS (data quality as a service, aggregated data as a service, algorithm/analytics as a service)) <br />
    Clear business opportunity for private sector
    `,
    risks: `Risk of vendor/ provider lock-in`,
  },
  {
    type: "Open Data / Data Donation",
    contractualForms: `Open data <br /> 
    Data altruism
    `,
    advantages: `Can foster citizen participation (citizen science, hackathons, etc) <br />
    Easy process / standardisation of processes
    `,
    risks: `Data can be hard to find as it is spread across different portals/websites. Demand and supply of data are inefficiently matched. <br />
    Data is not useable and needs a lot of processing (lack of control in specifications)
    `,
  },
  {
    type: "Pragmatic / Ad-hoc data sharing",
    contractualForms: `Bilateral data sharing agreements <br />
    Service Level Agreements
    `,
    advantages: `Mutual incentives/ win-win situations <br />
    Possibility of feedback <br />
    Trustworthy environment
    `,
    risks: `Often bilateral negotiations/agreements which can be time consuming <br />
    Sustainability over time
    `,
  },
  {
    type: "Trusted Third Party Intermediary",
    contractualForms: `Cooperation agreements <br />
    Consortium agreements <br />
    ‘Groupement d'intérêt public’ (France) <br />
    Governance doc
    `,
    advantages: `Mutual incentives/ win-win situations <br />
    Possibility of feedback <br />
    External expert knowledge <br />
    Trustworthy environment
    `,
    risks: `Difficulty of finding sustainable financing <br />
    Difficulty of first push
    `,
  },
  {
    type: "Personal Data Intermediary",
    contractualForms: `Certification of data intermediaries (DGA)`,
    advantages: `Support individuals in managing their data, including help in managing consent <br />
    Preference for distributed PDI for data security and privacy
    `,
    risks: `Complexity of use/set-up <br />
    Data security/ recovery in case of loss/theft <br />
    Different suppliers (needs for one consent model)
    `,
  },
  {
    type: "Data Common / Cooperative",
    contractualForms: `Collective ownership & decision making`,
    advantages: `Mutual incentives exist from the start <br />
    Possibility of feedback <br />
    Trustworthy environment <br />
    Ensure public/community benefit <br />
    Levelling playing field by enabling collective bargaining power
    `,
    risks: `Difficulty of finding sustainable financing <br />
    How to encourage bottom-up data stewardship and citizen participation <br />
    Limited existing use-cases
    `,
  },
];

export const AdvantagesAndRisksCooperationModelsTable =
  ({}: PropsWithChildren<AdvantagesAndRisksCooperationModelsTableProps>) => {
    const setContentCeil = (thead: HeaderTable, el: BodyTable) => {
      switch (thead) {
        case "Types":
          return el.type;
        case "Associated contractual forms":
          return (
            <p dangerouslySetInnerHTML={{ __html: el.contractualForms }}></p>
          );
        case "Advantages":
          return <p dangerouslySetInnerHTML={{ __html: el.advantages }}></p>;
        case "Risks":
          return <p dangerouslySetInnerHTML={{ __html: el.risks }}></p>;

        default:
          return null;
      }
    };

    return (
      <Table className={Styles.AdvantagesAndRisksCooperationModelsTable}>
        <caption>
          Table 17; Advantages & Risks of different cooperation models
        </caption>
        <TableHead variantColor="secondary">
          <TableRow>
            {HEADER_TABLE.map((el, index) => (
              <th key={el + index}>{el}</th>
            ))}
          </TableRow>
        </TableHead>
        <TableBody variantColorMobile="secondary">
          {CONTENT_BODY.map((el, index) => (
            <TableRow key={el.type + index}>
              {HEADER_TABLE.map((headEl, index) => (
                <td
                  key={headEl + index}
                  className={headEl === "Types" ? Styles.types : ""}
                >
                  <span>{headEl}</span>
                  {setContentCeil(headEl, el)}
                </td>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
