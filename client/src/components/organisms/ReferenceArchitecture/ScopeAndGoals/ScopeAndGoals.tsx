import { PropsWithChildren } from "react";
import Styles from "./ScopeAndGoals.module.scss";
import { Card } from "../../../atoms/Card/Card";

type ScopeAndGoalsProps = {};

export const ScopeAndGoals = ({}: PropsWithChildren<ScopeAndGoalsProps>) => {
  return (
    <Card className={Styles.ScopeAndGoals}>
      <p>
        The proposed high-level architecture provides a use case agnostic
        architecture valid for all potential scenarios. We have selected four
        concrete use cases to customize it and illustrate how to use it, but
        every city will have to take this document as a reference and starting
        point and follow the steps described here to create their own instance
        of the architecture.
      </p>
      <div>
        <h3>The Reference Architecture is addressed for:</h3>
        <ul>
          <li>
            data space architects and software designers who will use this
            document as a reference source for designing and building their data
            spaces;
          </li>
          <li>the data space deployment project (DS4SSCC-DEP);</li>
          <li>other related data spaces.</li>
        </ul>
      </div>
    </Card>
  );
};
