import { PropsWithChildren } from "react";
import Styles from "./CompleteImplementation.module.scss";
import { Card } from "../../../atoms/Card/Card";

type CompleteImplementationProps = {};

export const CompleteImplementation =
  ({}: PropsWithChildren<CompleteImplementationProps>) => {
    return (
      <Card className={Styles.CompleteImplementation}>
        <h3>Phase 6: Complete Implementation</h3>
        <p>
          The final phase describes the transformation of the solution into a
          fully-fledged and operational innovational (non profit) organisation.
          This includes that new cities and communities and private corporations
          will be added to the network. Furthermore, at this stage all
          maintenance processes are operational and an inspiring innovation
          agenda for the next few years is available including budgets. Finally,
          all financial management is aligned and controlled by the management.
        </p>
      </Card>
    );
  };
