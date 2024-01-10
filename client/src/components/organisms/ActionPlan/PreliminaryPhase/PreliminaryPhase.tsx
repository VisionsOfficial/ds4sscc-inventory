import { PropsWithChildren } from "react";
import Styles from "./PreliminaryPhase.module.scss";
import { Card } from "../../../atoms/Card/Card";

type PreliminaryPhaseProps = {};

export const PreliminaryPhase =
  ({}: PropsWithChildren<PreliminaryPhaseProps>) => {
    return (
      <Card className={Styles.PreliminaryPhase}>
        <h3>Phase 1: Preliminary Phase</h3>
        <p>
          Before the actual project starts, a number of preparatory actions need
          to be taken, ensuring a solid and sustainable base for the pilot. This
          includes the formation of an organisation or consortia to drive the
          project content, work-wise and financially. The budget needs to be
          clarified and possible legal challenges should be discussed.
        </p>
      </Card>
    );
  };
