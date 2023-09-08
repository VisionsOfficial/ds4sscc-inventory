import { PropsWithChildren } from "react";
import Styles from "./RolesAndResponsibilities.module.scss";
import { FlipCard } from "../../../molecules/Cards/FlipCard/FlipCard";

type RolesAndResponsibilitiesProps = {};

export const RolesAndResponsibilities =
  ({}: PropsWithChildren<RolesAndResponsibilitiesProps>) => {
    return (
      <div className={Styles.RolesAndResponsibilities}>
        <FlipCard category="participatoryRoles" />
        <FlipCard category="intermediaryRoles" />
        <FlipCard category="governanceRoles" />
      </div>
    );
  };
