import { PropsWithChildren } from "react";
import Styles from "./ResponsibilitiesTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type ResponsibilitiesTableProps = {};

type ContentTypeResponsibilitiesTable = {
  role: string;
  specificResponsibilities: string;
  recommendedProvisions: string;
};

const CONTENT_PARTICIPATORY_ROLES: ContentTypeResponsibilitiesTable[] = [
  {
    role: "Data holder",
    specificResponsibilities: `Give and retract consent<br /> Are informed and agreed about  the purposes for which and the means by which data is processed`,
    recommendedProvisions:
      "Multiple levels mechanisms of giving consents (e.g. Personal Data Management Systems)",
  },
  {
    role: "Data provider",
    specificResponsibilities: `Define reference datasets<br />
      Define Dataset terms and conditions of use (including clear data licences (open, restricted, private, etc.)<br />
      Anonymisation of data<br />
      Maintain/ check availability of datasets<br />
      Ensure data quality<br />
      Inform when data is no longer available/ up-to-date<br />
      Provide sampling of data for better understanding of value of data and possibility of reuse<br />
      Make methods of processing data open & transparent<br />
      Make available and keep updated metadata & relevant documentation for data reuse<br />
      Publish clear and transparent data catalogue and quality standards
      `,
    recommendedProvisions: `Data quality insurance mechanisms with clear control/ KPIs<br />
      Mechanisms for responding to questions or feedback about data provided<br />
      When possible, embed process to know data usage (API Key) for monitoring purposes<br />
      Rewards but also penalties when failure to deliver what has been agreed<br />
      Transparency and feedback mechanisms to data holders
      `,
  },
  {
    role: "Data user",
    specificResponsibilities: `Be transparent about data usage<br />
    Be aware of the quality/limitations of data used<br />
    Share insights/ documentation on the added value of the used data<br />
    Provide feedback for all (data providers, right holders)`,
    recommendedProvisions: `Tools for extracting and analysing data<br />
    Training to understand how to use data<br />
    Channels for providing feedback or requesting specific data to data providers<br />
    Safe experimenting environments (e.g., sandbox)`,
  },
  {
    role: "Use case participants",
    specificResponsibilities: `Share insights/ documentation on the added value of use-cases<br />
    Demonstration public value of use-case`,
    recommendedProvisions: "Repository of DS4SSCC use-cases",
  },
];

const CONTENT_GOVERNANCE_ROLES: ContentTypeResponsibilitiesTable[] = [
  {
    role: "Governance bodies",
    specificResponsibilities: `Monitor compliance to DS4SSCC processes (constitutive/ contractual processes) <br />
        Request providers to correct/add relevant metadata <br />
        Ensure & monitor responsible and fair use of data <br />
        Make decisions in a transparent manner <br />
        Advise on technology and data standards for data space & Ensure convergence of solutions <br />
        Define strategic direction of DS <br />
        Resolve conflicts <br />
        Manage change and continuity of data space (e.g. decide new rules/ edit rules) <br />
        Checks and certifies data agreements according to DS4SSCC principles`,
    recommendedProvisions: `The governance bodies should be representative of the data space's stakeholders & participatory/ enabling roles <br />
    Decision making mechanisms <br />
    Mechanisms to remove datasets if needed <br />
    When possible, automatisation of governance processes <br />
    Legal and technical expertise
    `,
  },
  {
    role: "Orchestrator / coordinating entity",
    specificResponsibilities: `Take care of onboarding new participants <br />
    Inform all actors about the guidelines/rules/negotiations <br />
    Find new stakeholders & connect participants working on similar use-cases <br />
    Maintain a common catalogue <br />
    Manage communication channels <br />
    Organise working group meetings, events, etc to increase awareness in the ecosystem and interactions frequency. <br />
    Manage change and continuity of data space
    `,
    recommendedProvisions: `Mechanism to check if participants, in particular data providers, are still active <br />
    Provide a regular overview of developed data products with used data <br />
    When possible, embedding process to know data usage (API Key) for monitoring purposes <br />
    Mechanism to ensure that knowledge and best practices flow and that technical solutions converge, part of onboarding is to identify relevant existing use-cases, solutions and partners  <br />
    Match-making system <br />
    Feedback loops`,
  },
  {
    role: "Community support bodies",
    specificResponsibilities: `Provide support to users to onboard and comply with DS technical and governance standards <br />
    Provide training & capacity building <br />
    Organise Knowledge exchange activities <br />
    Help stakeholders work together on projects or initiatives <br />
    Provide technical and governance support <br />
    Support negotiation collaborations/ contracts
    `,
    recommendedProvisions: `Repository of best practices/ examples use-cases/ guides <br />
    Data steward forum for common coordination and alignment <br />
    Technical support to set-up exchange mechanisms according to agreements
    `,
  },
];

export const ResponsibilitiesTable =
  ({}: PropsWithChildren<ResponsibilitiesTableProps>) => {
    return (
      <Table className={Styles.ResponsibilitiesTable}>
        <caption>
          Table 3: DS4SSCC roles and associated responsibilities
        </caption>
        <TableHead variantColor="secondary">
          <TableRow>
            <th>Roles</th>
            <th>Specific Responsibilities</th>
            <th>Recommended provisions</th>
          </TableRow>
        </TableHead>
        <TableBody variantColorMobile="secondary">
          <TableRow>
            <td colSpan={3} className={Styles.bodyHeader}>
              Participatory roles
            </td>
          </TableRow>
          {CONTENT_PARTICIPATORY_ROLES.map((pc, index) => (
            <TableRow key={pc.role + index}>
              <td>
                <span>Roles</span>
                {pc.role}
              </td>
              <td>
                <span>Specific Responsibilities</span>
                <p
                  dangerouslySetInnerHTML={{
                    __html: pc.specificResponsibilities,
                  }}
                ></p>
              </td>
              <td>
                <span>Recommended provisions</span>
                <p
                  dangerouslySetInnerHTML={{
                    __html: pc.recommendedProvisions,
                  }}
                ></p>
              </td>
            </TableRow>
          ))}
          <TableRow>
            <td colSpan={3} className={Styles.bodyHeader}>
              Intermediary roles
            </td>
          </TableRow>
          <TableRow>
            <td>
              <span>Roles</span>
              Data intermediaries
            </td>
            <td>
              <span>Specific Responsibilities</span>
              <p style={{ wordBreak: "break-word" }}>
                Maintain technical infrastructure/ services they provide <br />{" "}
                Provide technical assistance/ support to data space participants{" "}
                <br /> Enable connections with other data spaces <br /> Disclose
                content plugging/processes <br /> Monitor services and inform
                users if deterioration/discontinuity <br />
                Publishing clear documentation on data product possibilities
              </p>
            </td>
            <td>
              <span>Recommended provisions</span>
              <p>
                Should have relevant expertise and technical capabilities <br />
                Recognised by EU in case of DGA compliant intermediaries
                (certification processes)
              </p>
            </td>
          </TableRow>
          <TableRow>
            <td colSpan={3} className={Styles.bodyHeader}>
              Governance roles
            </td>
          </TableRow>
          {CONTENT_GOVERNANCE_ROLES.map((gr, index) => (
            <TableRow key={gr.role + index}>
              <td>
                <span>Roles</span>
                {gr.role}
              </td>
              <td>
                <span>Specific Responsibilities</span>
                <p
                  dangerouslySetInnerHTML={{
                    __html: gr.specificResponsibilities,
                  }}
                ></p>
              </td>
              <td>
                <span>Recommended provisions</span>
                <p
                  dangerouslySetInnerHTML={{
                    __html: gr.recommendedProvisions,
                  }}
                ></p>
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
