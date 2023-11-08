import React, { PropsWithChildren } from "react";
import Styles from "./ActionPlanCheatsheetTable.module.scss";
import { Table } from "../../../atoms/Tables/Table/Table";
import { TableHead } from "../../../atoms/Tables/TableHead/TableHead";
import { TableRow } from "../../../atoms/Tables/TableRow/TableRow";
import { TableBody } from "../../../atoms/Tables/TableBody/TableBody";

type ActionPlanCheatsheetTableProps = {};

type HeaderTable =
  | "Preliminary phase"
  | "Development phase"
  | "Providing Concept"
  | "Organising Playing Field"
  | "Increasing impact & preparing implementation"
  | "Complete implementation";

type BodyTable = {
  governance: {
    phase: string;
    actions: string;
  }[];
  datasets: {
    phase: string;
    actions: string;
  }[];
  architecture: {
    phase: string;
    actions: string;
  }[];
};

const HEADER_TABLE: HeaderTable[] = [
  "Preliminary phase",
  "Development phase",
  "Providing Concept",
  "Organising Playing Field",
  "Increasing impact & preparing implementation",
  "Complete implementation",
];

const BODY_TABLE: BodyTable[] = [
  {
    governance: [
      {
        phase: "Scope and purpose of data sharing defined",
        actions: "Completing Governance part of Data Cooperation Canvas",
      },
      {
        phase: "Minimum pilot network defined",
        actions: "Define simple and representable use case for MVP testing",
      },
      {
        phase: "Necessary components are working",
        actions:
          "Expansion of the team by interested parties through activating networks, PR work.",
      },
      {
        phase: "Data cooperation canvas reviews and updated",
        actions: "First legal and formal preparations should be initialised",
      },
      {
        phase: "Additional use cases added",
        actions: "Definition of formal products, pricing and fixed terms",
      },
      {
        phase: "Transition to nonprofit organisation complete",
        actions: "",
      },
    ],
    datasets: [
      {
        phase: "Data Plan established",
        actions: "Refinement of data-related parts of Data Cooperation Canvas",
      },
      {
        phase: "Number of data points exchanged as a percentage of goal",
        actions: "Update of data-related parts of Data Cooperation Canvas",
      },
      {
        phase: "Data exchange is up and running for defined use case",
        actions:
          "Review developed data exchange properties and its capabilities towards a fully functional data infrastructure",
      },
      {
        phase: "Number of organisation, cities and use cases running",
        actions:
          "Start to develop performance measurements (KPIs) that can be measured and evaluated",
      },
      {
        phase: "Agreement on performance measures",
        actions: "High-level planning towards the fully-fledged roll-out",
      },
      {
        phase: "Service-level Agreement (SLA) fully established",
        actions: "",
      },
    ],
    architecture: [
      {
        phase: "Framework defined",
        actions: "Completing Technical part of Data Cooperation Canvas",
      },
      {
        phase: "MVP architecture depicted",
        actions: "Work on evolved architecture, following DS4SSCC guidelines",
      },
      {
        phase: "MVP validation outcome approved",
        actions: "Injection of relevant datasets to the MVP",
      },
      {
        phase: "MVP successfully tested for full deployment",
        actions:
          "Review of standard and technologie choices for final selection, based on test results",
      },
      {
        phase: "Architecture successfully tested with more use cases",
        actions:
          "Increment adding of new use cases for data sharing and value creating in the ecosystem",
      },
      {
        phase: "Architecture fully working as operational system",
        actions: "",
      },
    ],
  },
  {
    governance: [
      {
        phase: "Data sharing model defined",
        actions: "Analysis of current governance situation",
      },
      {
        phase: "Legal agreements arranged",
        actions: "",
      },
      {
        phase: "Possible adjustments fully implemented",
        actions:
          "Update of governance part in Data Cooperation Canvas, specifically on standards and larger partner management.",
      },
      {
        phase: "Onboarding standards defined",
        actions:
          "Networks should be activated and interested stakeholders contacted to add further use cases to the exchange in the next phase",
      },
      {
        phase:
          "Decision/governance mechanisms are scaled up (e.g. user representation, citizen participation)",
        actions: "Instalment of professional helpdesk and support",
      },
      {
        phase: "",
        actions: "",
      },
    ],
    datasets: [
      {
        phase: "",
        actions: "Further refinement of data plan towards PoC",
      },
      {
        phase: "All (city) partners are able to access the data",
        actions: "Preparation of exchange between partners and cities",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase:
          "Have a fully functional data infrastructure that is able to onboard new unknown parties",
        actions: "",
      },
      {
        phase: "Service-level Agreement (SLA)",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
    ],
    architecture: [
      {
        phase: "Requirements defined",
        actions: "Analysis of current technical architecture in use",
      },
      {
        phase: "",
        actions:
          "Establishment of connection between MVP and Universal Trust Data Registry and Data Space connector components",
      },
      {
        phase: "",
        actions: "Configuration of required APIs",
      },
      {
        phase: "",
        actions: "Continue testing, validating and extending",
      },
      {
        phase: "",
        actions: "Testing of technical solution for each use case, if needed",
      },
      {
        phase: "",
        actions: "",
      },
    ],
  },
  {
    governance: [
      {
        phase:
          "Preliminary business model defined including added value proposition for each partner and scaling up model",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions:
          "Define principles of onboarding, standards, product pricing and procedures.",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "Diversity of partners (across sector and multi-level)",
        actions:
          "Standard procedures for onboarding and leaving should be finalized",
      },
      {
        phase: "",
        actions: "",
      },
    ],
    datasets: [],
    architecture: [
      {
        phase: "",
        actions: "Set up technical deployment plan",
      },
      {
        phase: "",
        actions: "Possible upgrade of technical components",
      },
      {
        phase: "",
        actions:
          "Creation of Access credentials and registration at Universal Trust Data Registry",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions:
          "Possible adaptation in the technical architecture, depending on use case",
      },
      {
        phase: "",
        actions: "",
      },
    ],
  },
  {
    governance: [
      {
        phase: "Identification initial partners and broader stakeholders",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase:
          "Less data mature partners can join (e.g. smaller cities with less data capabilities)",
        actions: "Representation of nonprofit should be professionalised",
      },
      {
        phase: "",
        actions: "",
      },
    ],
    datasets: [],
    architecture: [
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "Decide on standards and technologies",
      },
      {
        phase: "",
        actions: "In depth testing after deployment",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
    ],
  },
  {
    governance: [
      {
        phase: "Initial budget agreed",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase:
          "Connect with other data spaces / have other data spaces as participants",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
    ],
    datasets: [],
    architecture: [
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "Test result collection",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
    ],
  },
  {
    governance: [
      {
        phase:
          "Initial resources required identified and allocated to partners",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
      {
        phase: "",
        actions: "",
      },
    ],
    datasets: [],
    architecture: [],
  },
];

export const ActionPlanCheatsheetTable =
  ({}: PropsWithChildren<ActionPlanCheatsheetTableProps>) => {
    return (
      <Table className={Styles.ActionPlanCheatsheetTable}>
        <TableHead>
          <TableRow>
            <th style={{ backgroundColor: "#17214e" }}></th>
            {HEADER_TABLE.map((head, index) => (
              <React.Fragment key={head + index}>
                <th>{head}</th>
                {index !== HEADER_TABLE.length - 1 && <th>Actions</th>}
              </React.Fragment>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {BODY_TABLE.map((el, index) => (
            <TableRow key={"row" + index}>
              {index === 0 ? (
                <td style={{ border: "none", backgroundColor: "#f4f4f4" }}>
                  Governance
                </td>
              ) : index === el.governance.length - 1 ? (
                <td style={{ backgroundColor: "#f4f4f4" }}></td>
              ) : (
                <td style={{ border: "none", backgroundColor: "#f4f4f4" }}></td>
              )}
              {el.governance.map((gov, i) => (
                <React.Fragment key={"gov" + i}>
                  <td>{gov.phase}</td>
                  {i !== el.governance.length - 1 && <td>{gov.actions}</td>}
                </React.Fragment>
              ))}
            </TableRow>
          ))}
          {BODY_TABLE.map((el, index) => {
            if (index > 1) return null;

            return (
              <TableRow key={"row" + index}>
                {index === 0 ? (
                  <td style={{ border: "none", backgroundColor: "#f4f4f4" }}>
                    Datasets
                  </td>
                ) : index === 1 ? (
                  <td style={{ backgroundColor: "#f4f4f4" }}></td>
                ) : (
                  <td
                    style={{ border: "none", backgroundColor: "#f4f4f4" }}
                  ></td>
                )}
                {el.datasets.length > 0 &&
                  el.datasets.map((dataset, i) => (
                    <React.Fragment key={"dataset" + i}>
                      <td>{dataset.phase}</td>
                      {i !== el.governance.length - 1 && (
                        <td>{dataset.actions}</td>
                      )}
                    </React.Fragment>
                  ))}
              </TableRow>
            );
          })}

          {BODY_TABLE.map((el, index) => {
            if (index === BODY_TABLE.length - 1) return null;
            return (
              <TableRow key={"row" + index}>
                {index === 0 ? (
                  <td style={{ border: "none", backgroundColor: "#f4f4f4" }}>
                    Architecture
                  </td>
                ) : index === el.architecture.length - 1 ? (
                  <td style={{ backgroundColor: "#f4f4f4" }}></td>
                ) : (
                  <td
                    style={{ border: "none", backgroundColor: "#f4f4f4" }}
                  ></td>
                )}
                {el.architecture.map((archi, i) => (
                  <React.Fragment key={"archi" + i}>
                    <td>{archi.phase}</td>
                    {i !== el.architecture.length - 1 && (
                      <td>{archi.actions}</td>
                    )}
                  </React.Fragment>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  };
