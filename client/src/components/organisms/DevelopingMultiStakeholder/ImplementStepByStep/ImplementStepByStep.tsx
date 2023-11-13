import { PropsWithChildren } from "react";
import Styles from "./ImplementStepByStep.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { CheckOutCard } from "../../../molecules/Cards/CheckOutCard/CheckOutCard";
import { RevenueStreamsTable } from "../../../molecules/Tables/RevenueStreamsTable/RevenueStreamsTable";

type ImplementStepByStepProps = {};

export const ImplementStepByStep =
  ({}: PropsWithChildren<ImplementStepByStepProps>) => {
    return (
      <div className={Styles.ImplementStepByStep}>
        <Card className={Styles.card}>
          <p>
            To ensure the success of the cooperation and sustain it over time,
            it is key to plan its scaling up from the start. The aim is for the
            cooperation to be sustainable i.e. to ensure ‘sufficient revenue not
            only to cover day-to-day operational costs, but also to cover the
            costs of future investment in the infrastructure and costs to handle
            iterative change to their business model.’ (ODI, 2020, p.20). Here,
            partners need to plan for the incurring costs (e.g. upfront costs of
            building infrastructure and setting-up cooperation, operational
            costs) and the types of revenue streams envisioned once the
            cooperation is operational. The financing of the cooperation is the
            most important factor in ensuring its success. Starting a new data
            cooperation is cost intensive (legal, operational, infrastructure
            costs, etc), time and resource consuming, and there is a risk it
            might fail. This is why it is important to plan finances at each
            phase of the cooperation and anticipate when the main budget will be
            needed.
          </p>

          <p>
            Ideally the initial budget should be kept minimal for the success of
            the pilot. Once the proof of concept is demonstrated, real
            investments will take place especially in terms of technology and
            infrastructure as well as scaling up the network. Once the
            cooperation is operational, the revenues will be diversified and the
            budget for development minimal.
          </p>

          <div>
            <p>To key in mind when planning the budget for the cooperation:</p>
            <ul>
              <li>
                In the first phases of the project, be aware of the fact that
                you are developing for a first implementation group, partners
                can bring other resources that cash flow
              </li>
              <li>
                Recognise the difference between the financing needed to design
                and set-up a data cooperation and the ongoing sources of revenue
                once it is operational.
              </li>
              <li>
                Consider creating a not-for-profit organisation that will run
                the operation of the data cooperation (from Phase 3)
              </li>
              <li>
                Consider the use of scaling membership fees, freemium models,
                and tiered pricing to enable a broader set of users (e.g.
                reduced fee/free access for non-for-profit, pay fees to access
                data analytics, membership fee for companies, etc).
              </li>
              <li>
                Consider private foundations and investors whose goals and
                values align with DS4SSCC
              </li>
            </ul>
          </div>

          <p>
            <a
              href="https://www.theodi.org/article/designing-sustainable-data-institutions-paper/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ODI
            </a>{" "}
            (2020) identified a number of appropriate resources of revenues for
            sustainable data institutions including value-added services,
            consulting, API, Service Level Agreements or membership fees (see
            Table 18)
          </p>

          <RevenueStreamsTable />
        </Card>

        <CheckOutCard category="actionPlan" variantColor="bgGray" />
      </div>
    );
  };
