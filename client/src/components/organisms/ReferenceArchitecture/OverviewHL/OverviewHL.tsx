import { PropsWithChildren } from "react";
import Styles from "./OverviewHL.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { APP_IMAGES_ASSETS } from "../../../../utils/appImagesAssets";
import { netherReferenceNav } from "../../../../pages/ReferenceArchitecturePage/ReferenceArchitecturePage";
import { Button } from "../../../atoms/Button/Button";

type OverviewHLProps = {
  updateNavSelected?: (value: netherReferenceNav) => void;
};

const COMPONENTS_CARDS_CONTENT: netherReferenceNav[] = [
  "Universal Trust Data Registry",
  "Authorization Policies Store",
  "Federation Layer",
];

export const OverviewHL = ({
  updateNavSelected,
}: PropsWithChildren<OverviewHLProps>) => {
  return (
    <Card className={Styles.OverviewHL}>
      <p>
        The Reference Architecture proposes an evolution from the usual data
        platforms/smart city platforms to allow them an easy, modular and
        incremental onboarding into data spaces.
      </p>

      <div className={Styles.img}>
        <h3>
          Thus, from the typical data platform/smart city platform architecture
          !
        </h3>
        <a
          href={APP_IMAGES_ASSETS.image.typicalDataPlatforms}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={APP_IMAGES_ASSETS.image.typicalDataPlatforms}
            alt="typical data platforms"
          />
        </a>
      </div>

      <div className={Styles.img}>
        <h3>Evolve to an architecture ready to be engaged in a data space</h3>
        <a
          href={APP_IMAGES_ASSETS.image.evolveArchitecture}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={APP_IMAGES_ASSETS.image.evolveArchitecture}
            alt="evolve to an architecture"
          />
        </a>
      </div>

      <div className={Styles.cards}>
        <h3>By the addition of three components</h3>
        <div className={Styles.cardsContent}>
          {COMPONENTS_CARDS_CONTENT.map((el, index) => (
            <Card
              key={el + index}
              className={Styles.componentCard}
              onClick={() => {
                if (updateNavSelected) {
                  updateNavSelected(el);
                }
              }}
            >
              <p>{el}</p>
              <Button>Discover</Button>
            </Card>
          ))}
        </div>
      </div>

      <p>
        Each participant system needs to include a local identity management
        component (for authentication support) and an Authorization Policies
        Store (for authorization support). Additionally, a data space solution
        needs a Universal Trust Data Registry (for trust support), which
        establishes trust between included participant systems by verifying the
        identities of participants. Optionally, a Federation Layer could be also
        deployed to get access the services and data offered by the participants
        of another Data Space, without compromising the individual data
        sovereignty.
      </p>

      <div className={Styles.img}>
        <h4>
          All mentioned components are in compliance with DSSC building blocks
          taxonomy.
        </h4>
        <a
          href={APP_IMAGES_ASSETS.image.dsscBBTaxonomy}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={APP_IMAGES_ASSETS.image.dsscBBTaxonomy}
            alt="DSSC building blocks taxonomy"
          />
        </a>
      </div>
    </Card>
  );
};
