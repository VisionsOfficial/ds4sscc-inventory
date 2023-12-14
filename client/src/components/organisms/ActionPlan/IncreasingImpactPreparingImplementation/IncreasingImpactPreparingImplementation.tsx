import { PropsWithChildren } from "react";
import Styles from "./IncreasingImpactPreparingImplementation.module.scss";
import { Card } from "../../../atoms/Card/Card";

type IncreasingImpactPreparingImplementationProps = {};

export const IncreasingImpactPreparingImplementation =
  ({}: PropsWithChildren<IncreasingImpactPreparingImplementationProps>) => {
    return (
      <Card className={Styles.IncreasingImpactPreparingImplementation}>
        <h3>Phase 5: Increasing Impact & Preparing Implementation</h3>
        <p>
          In this phase, additional use cases are being developed to raise
          attractiveness and awareness of the data space. Investments are mostly
          spent on the development and technical applications of such use cases
          towards improvement of their performance. Also in this stage, the
          preparation for complete implementation (phase 6) has started.
        </p>
      </Card>
    );
  };
