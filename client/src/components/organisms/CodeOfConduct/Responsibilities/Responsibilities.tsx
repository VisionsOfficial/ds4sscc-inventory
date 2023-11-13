import { PropsWithChildren } from "react";
import Styles from "./Responsibilities.module.scss";
import { ResponsibilitiesTable } from "../../../molecules/Tables/ResponsibilitiesTable/ResponsibilitiesTable";
import { APP_IMAGES_ASSETS } from "../../../../utils/appImagesAssets";

type ResponsibilitiesProps = {};

export const Responsibilities =
  ({}: PropsWithChildren<ResponsibilitiesProps>) => {
    return (
      <div className={Styles.Responsibilities}>
        <div className={Styles.text}>
          <p>
            To be able to join and participate in DS4SSCC, all participants{" "}
            <span>must</span>:
          </p>
          <ul>
            <li>Commit to DS4SSCC vision & core principles</li>
            <li>
              Sign and comply with DS4SSCC constitutive agreements or membership
              agreements
            </li>
            <li>Monitor compliance with relevant regulatory frameworks</li>
            <li>
              Commit to adequate security and data protection mechanisms as per
              data governance principles
            </li>
            <li>
              Comply with the data space’s technical & data standards (see
              architecture reference/ Catalogue of Specifications)
            </li>
            <li>
              Have a DS4SSCC reference person in place (e.g., Data Protection
              Officer, Data Chief Officer, Project Manager)
            </li>
            <li>Be transparent, and provide data and reporting for audits</li>
          </ul>
        </div>

        <div className={Styles.text}>
          <p>In addition, they should when feasible and applicable:</p>
          <ul>
            <li>Conduct data maturity assessments</li>
            <li>
              Complete a data ethics assessment for data (re)use and associated
              use-cases
            </li>
            <li>Share methods used to get insights from data </li>
            <li>Share use-cases in common repository</li>
          </ul>
        </div>

        <p>
          Table 3 provides an initial sketch of the specific responsibilities
          associated with each of DS4SSCC role (non-exhaustive) as well as
          recommended provisions and mechanisms to foster accountability and
          support participants to meet these responsibilities. These will be
          further elaborated on, drawing on the pilots during the deployment of
          DS4SSCC. Finally, Figure 1 maps the DS4SSCC ecosystem of stakeholders
          in relation to DS4SSCC roles.
        </p>

        <ResponsibilitiesTable />

        <figure>
          <a
            href={APP_IMAGES_ASSETS.image.stakeholdersAssociatedRoles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={APP_IMAGES_ASSETS.image.stakeholdersAssociatedRoles}
              alt="DS4SSCC Stakeholders and associated roles"
            />
          </a>

          <figcaption>
            Figure 1: DS4SSCC Stakeholders and associated roles
          </figcaption>
        </figure>
      </div>
    );
  };
