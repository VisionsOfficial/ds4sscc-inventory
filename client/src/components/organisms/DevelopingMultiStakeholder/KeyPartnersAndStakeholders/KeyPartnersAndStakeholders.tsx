import { PropsWithChildren } from "react";
import Styles from "./KeyPartnersAndStakeholders.module.scss";
import { FlipCard } from "../../../molecules/Cards/FlipCard/FlipCard";
import { CheckOutCard } from "../../../molecules/Cards/CheckOutCard/CheckOutCard";

type KeyPartnersAndStakeholdersProps = {};

export const KeyPartnersAndStakeholders =
  ({}: PropsWithChildren<KeyPartnersAndStakeholdersProps>) => {
    return (
      <div className={Styles.KeyPartnersAndStakeholders}>
        <div className={Styles.cards}>
          <FlipCard category="public" />
          <FlipCard category="academiaResearchInstitutes" />
          <FlipCard category="private" />
          <FlipCard category="civilSociety" />
        </div>

        <CheckOutCard category="rolesAndResponsibilities" variantColor="bgGray" />
      </div>
    );
  };
