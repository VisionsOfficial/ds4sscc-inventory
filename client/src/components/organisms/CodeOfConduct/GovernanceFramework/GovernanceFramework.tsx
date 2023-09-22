import { PropsWithChildren } from "react";
import Styles from "./GovernanceFramework.module.scss";
import { GovernanceBodiesTable } from "../../../molecules/Tables/GovernanceBodiesTable/GovernanceBodiesTable";
import { TypeOfGovernanceTable } from "../../../molecules/Tables/TypeOfGovernanceTable/TypeOfGovernanceTable";

type GovernanceFrameworkProps = {};

export const GovernanceFramework =
  ({}: PropsWithChildren<GovernanceFrameworkProps>) => {
    return (
      <div className={Styles.GovernanceFramework}>
        <p>
          The governance framework is understood by the DSSC as the ‘set of
          principles, standards, policies (rules/regulations) and practices that
          apply to the governance, management, and operations within a
          particular scope as well as to the enforcement thereof, and the
          resolution of any{" "}
          <a
            href="https://dssc.eu/space/Glossary/55443460/DSSC+Glossary+%7C+Version+1.0+%7C+March+2023"
            target="_blank"
          >
            conflicts’
          </a>
          .
        </p>
        <p>
          In this session, we lay out the governance structures and rules at the
          level of DS. In their work on{" "}
          <a
            href="https://files.thegovlab.org/erdgovernance.pdf"
            target="_blank"
          >
            Governing the Environment Related Data Space
          </a>
          , Fritzenkötter et al (2022,p.58) provided valuable insights by
          distinguishing different types of governance in terms of broad, mixed
          and narrow. The broad governance allows bringing in all DS4SSCC
          stakeholders whereas narrower governance structures are helpful to
          take technical and operational decisions delivered through
          smaller-group processes.
        </p>
        <p>
          Differentiating between types of governance allows to define who needs
          to be involved, to what degree and via which governing bodies in
          relation to identified actions. Drawing on the work conducted as part
          of the DS4SSCC preparatory action, we have identified the different
          governance bodies (see Table 7) that need to be in place for the
          functioning of the DS. We have laid out the initial responsibilities
          of these bodies as well as their possible structure.
        </p>

        <GovernanceBodiesTable />

        <p>
          Drawing on Fritzenkötter et al et al 2022 and the differentiated
          levels of governance, Table 8 mapped identified actions (e.g.
          ‘Agreeing on core values and principles’) and assigned each action to
          relevant data space members and bodies according to the type of
          governance. For example, the action ‘Agreeing on core values and
          principles’ is understood as a broad governance matter and has been
          assigned to all with the supervision of the Governance Authority and
          the DS4SSCC users representative committee).
        </p>

        <TypeOfGovernanceTable />

        <p>
          Following this work, we have sketched a first structure for the
          governance of DS4SSCC (see Figure 7).
        </p>
      </div>
    );
  };
