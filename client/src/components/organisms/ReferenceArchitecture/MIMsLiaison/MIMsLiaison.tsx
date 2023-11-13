import { PropsWithChildren } from "react";
import Styles from "./MIMsLiaison.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { APP_IMAGES_ASSETS } from "../../../../utils/appImagesAssets";

type MIMsLiaisonProps = {};

export const MIMsLiaison = ({}: PropsWithChildren<MIMsLiaisonProps>) => {
  return (
    <Card className={Styles.MIMsLiaison}>
      <p>
        The{" "}
        <a
          href="https://living-in.eu/news/mims-plus-version-60-approved"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIMs
        </a>{" "}
        (or Minimal Interoperability Mechanisms) were originally designed as a
        set of tools to help cities, communities and regions who were just
        starting on the road to utilising data from IoT devices to develop
        useful applications to support their citizens.
      </p>
      <p>
        The MIMs provided them with a minimal but sufficient way of handling
        that data that also enabled good-enough interoperability with other
        applications complying with the MIMs.
      </p>
      <p>
        Now, in regard to data spaces, MIMs are designed to enable data from
        many different organisations and platforms within a city to be shared
        and re-used.
      </p>
      <p>
        They are also mapped to the{" "}
        <a
          href="https://dssc.eu/space/BBE/178421761/Building+Blocks+%7C+Version+0.5+%7C+September+2023"
          target="_blank"
          rel="noopener noreferrer"
        >
          DSSC Building Blocks taxonomy
        </a>
        , which is the one followed by the{" "}
        <a
          href="https://inventory.ds4sscc.eu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Catalogue of Specifications
        </a>
        .
      </p>
      <a
        href={APP_IMAGES_ASSETS.image.mimsLiaison}
        target="_blank"
        rel="noopener noreferrer"
        className={Styles.linkImg}
      >
        <img
          src={APP_IMAGES_ASSETS.image.mimsLiaison}
          alt="MIMs liaison schema"
        />
      </a>
      <div>
        <h3>
          Incorporating work on the MIMs within the architecture model would
          therefore help to:
        </h3>
        <ul>
          <li>
            Identify a basic set of foundational capabilities needed to address
            each issue related to data sharing in a data space identified by the
            model, along with the functional or quality requirements needed.
          </li>
          <li>
            Point to any widely used alternative mechanisms to address those
            functional or quality requirements
          </li>
          <li>
            Identify and define common standardised components within those
            mechanisms
          </li>
          <li>Identify interfaces to see if the use of APIs might be viable</li>
        </ul>
      </div>
    </Card>
  );
};
