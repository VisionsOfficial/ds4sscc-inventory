import { PropsWithChildren } from "react";
import Styles from "./DevelopmentPhase.module.scss";
import { Card } from "../../../atoms/Card/Card";

type DevelopmentPhaseProps = {};

export const DevelopmentPhase =
  ({}: PropsWithChildren<DevelopmentPhaseProps>) => {
    return (
      <Card className={Styles.DevelopmentPhase}>
        <h3>Phase 2: Development Phase</h3>
        <p>
          Using a use case, this phase allows partners to define the
          foundational principles for the data cooperation which will be scaled
          up if the proof of concept is validated. The data sharing and
          governance models are specified and an independent body for data
          exchange purposes is strategically positioned. The largest investments
          at this phase relate to setting up the network of committed pilot
          partners and supporting partners as well as to setting up a non profit
          organisation, the further development of the MVP and necessary formal
          and legal procedures.
        </p>
      </Card>
    );
  };
