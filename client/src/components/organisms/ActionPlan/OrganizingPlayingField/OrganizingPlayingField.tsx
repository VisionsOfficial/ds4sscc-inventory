import { PropsWithChildren } from "react";
import Styles from "./OrganizingPlayingField.module.scss";
import { Card } from "../../../atoms/Card/Card";

type OrganizingPlayingFieldProps = {};

export const OrganizingPlayingField =
  ({}: PropsWithChildren<OrganizingPlayingFieldProps>) => {
    return (
      <Card className={Styles.OrganizingPlayingField}>
        <h3>Phase 4: Organising Playing Field</h3>
        <p>
          The proven concept is further developed to a product for data exchange
          and all potential business partners are connected to the network,
          after DS4SSCC components and standards have been well established and
          tested via the pilot. Onboarding for additional partners (businesses,
          etc) has been established. Significant investments in this phase are
          spent on MVP development and organisation.
        </p>
      </Card>
    );
  };
