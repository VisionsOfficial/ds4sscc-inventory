import { PropsWithChildren } from "react";
import Styles from "./VisionAndPrinciples.module.scss";
import { VisionsAndPrinciplesTable } from "../../../molecules/Tables/VisionsAndPrinciplesTable/VisionsAndPrinciplesTable";

type VisionAndPrinciplesProps = {};

export const VisionAndPrinciples =
  ({}: PropsWithChildren<VisionAndPrinciplesProps>) => {
    return (
      <div className={Styles.VisionAndPrinciples}>
        <p>
          LThe vision and principles are at the foundation of DS4SSCC and will
          inform the governance processes of the DS and of the different
          use-cases that will be part of it. Indeed, governance processes build
          ‘on the basis established through core principles to enshrine
          systematic mechanisms for making and implementing decisions. These
          processes include defining and communicating the roles and
          responsibilities of different actors and stakeholders; establishing
          oversight, transparency, and accountability policies and mechanisms;
          clarifying decision flows across stakeholders; and creating procedures
          for dispute resolution’ (Fritzenkötter et al 2022, p.8). It is thus
          crucial to co-define with a broad range of stakeholders a shared
          vision and common principles and ensure a strong buy-in.
        </p>
        <p>
          To develop the DS4SSCC vision, we conducted a range of activities with
          stakeholders and experts including workshops, interviews, and surveys.
          The work was presented, refined and validated on an ongoing basis to
          stakeholders as part of the Stakeholder Forum workshops. We
          distinguished between principles related to organisational processes
          and data governance. Following this, the DS4SSCC{" "}
          <span>organisational principles</span> include:
        </p>
        <ul>
          <li>
            The sharing and re(use) of data via DS4SSCC should create{" "}
            <span>tangible societal value and public benefits</span> on top of
            economic value. Local authorities, communities, and citizens should
            be the main beneficiaries of data sharing and reuse in the context
            of DS4SSCC.
          </li>
          <li>
            The purpose of data sharing and reuse should align with the{" "}
            <span>European Green Deal objectives</span> and with the{" "}
            <span>European data strategy</span>, including on data and
            technological sovereignty. (PUBLIC GOOD, SOVEREIGNTY)
          </li>
          <li>
            The data space should <span>level the playing field</span> in terms
            of data sharing and reuse between different types of stakeholders.
            (FAIRNESS/ INCLUSIVITY/ SOVEREIGNTY)
          </li>
          <li>
            The{" "}
            <span>added value should be retained in the data ecosystem</span>{" "}
            and surplus either reinvested or returned to the ecosystem in other
            forms. (RECIPROCITY/ FAIRNESS)
          </li>
          <li>
            The{" "}
            <span>
              purpose of data sharing and reuse should be clearly explained
            </span>{" "}
            for each use-case and demonstrate this societal value/public
            benefit.
          </li>
          <li>
            The governance and infrastructure of DS4SSCC should abide by the{" "}
            <span>
              <a
                href="https://www.europarl.europa.eu/RegData/etudes/BRIE/2020/651992/EPRS_BRI(2020)651992_EN.pdf"
                target="_blank"
              >
                principles of technological and data sovereignty
              </a>
            </span>{" "}
            with particular attention to vendor lock-ins (SOVEREIGNTY, SECURITY)
          </li>
          <li>
            Data space participants should{" "}
            <span>be represented in Governance Bodies</span> and be able to
            contribute to the decision-making processes. This includes
            participation of the main beneficiaries: local governments,
            communities and citizens (REPRESENTATIVITY/ PARTICIPATION)
          </li>
        </ul>

        <p>
          In terms of Data Governance, DS4SSCC stakeholders agreed on principles
          (see Table 1) which aligns with the European Strategy for Data and the{" "}
          <a
            href="https://www.go-fair.org/fair-principles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAIR principles.
          </a>
        </p>

        <VisionsAndPrinciplesTable />
      </div>
    );
  };
