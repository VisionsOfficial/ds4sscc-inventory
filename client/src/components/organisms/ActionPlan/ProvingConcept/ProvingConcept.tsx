import { PropsWithChildren } from "react";
import Styles from "./ProvingConcept.module.scss";
import { Card } from "../../../atoms/Card/Card";

type ProvingConceptProps = {};

export const ProvingConcept = ({}: PropsWithChildren<ProvingConceptProps>) => {
  return (
    <Card className={Styles.ProvingConcept}>
      <h3>Phase 3: Proving Concept</h3>
      <p>
        This phase allows initial partners to test the concept and the added
        value of the data cooperation identified in the previous stages. If the
        concept is proven to work and requires only minimal realistic
        adjustments within scope, then the cooperation can be scaled up with
        more participants and more use cases. There has been formal agreement
        for data sharing between partners, API’s for data sharing are
        established and all DS4SSCC components (governance, technological and
        datasets) are in place.
      </p>
    </Card>
  );
};
