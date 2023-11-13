import { PropsWithChildren } from "react";
import Styles from "./RecipesForScenarios.module.scss";
import { Card } from "../../../atoms/Card/Card";

type RecipesForScenariosProps = {};

export const RecipesForScenarios =
  ({}: PropsWithChildren<RecipesForScenariosProps>) => {
    return (
      <div className={Styles.RecipesForScenarios}>
        <Card className={Styles.card}>
          <h3>Greenfield</h3>
          <p>
            This scenario represents all the cities and communities which have
            not yet digitised their data collection and processing or are at a
            very early stage of that, just having few data sources digitally
            treated. In this case, the cities need to develop their data space
            from scratch and require some certain steps to be accomplished in
            advance:
          </p>
          <ul>
            <li>
              Define a strategic plan for the digitalization of the city. This
              plan must include the analysis of the current infrastructures, the
              desired digital services to be developed, the required data
              sources to be used by the digital services, the required
              infrastructure for implementing the services, including sensors,
              devices and data platform, and a clear agenda and funds to carry
              out all the actions.
            </li>
            <li>
              Launch the corresponding tenders and elaborate the due contracts
              with providers. It is recommended to include in the public tenders
              documents, the requirements in line with the data spaces approach.
              In this way, the implemented infrastructure is already prepared
              and compatible with the standards and technologies that will be
              required later to engage in a data space.
            </li>
            <li>
              Another possibility could be hiring (internal) experts,
              consultants or reuse of external developments (by other cities for
              example). Or some localities might use support from a governmental
              digitalisation entity (as is the case in Flanders with Digital
              Flanders) or collaboration between cities.
            </li>
            <li>
              Once all of this is in place, steps in the following case can be
              followed.
            </li>
          </ul>
        </Card>

        <Card className={Styles.card}>
          <h3>Brownfield</h3>
          <p>
            In this case, the city or community already has a data platform in
            place. This means that they have all data sources integrated in the
            data platform, in some cases interoperable amongst them, and city
            services using and exploiting such datasets. This data platform
            would have an architecture and an implementation following certain
            standards and technologies, so an evolution from the existing
            platform is required. Following steps are recommended:
          </p>
          <ul>
            <li>
              Evolving the current architecture to the most updated versions of
              technological components to ensure the alignment with most adopted
              standards.
            </li>
            <li>
              Mapping the existing components in the architecture to the
              building blocks recommended in the{" "}
              <a
                href="https://inventory.ds4sscc.eu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Catalogue of Specifications
              </a>{" "}
              (in alignment with the DSSC building blocks). Identify which one
              is missing and evaluate if it is required. It is also recommended
              to check in the Catalogue the use of recommended standards and
              reference implementations by DS4SSCC.
            </li>
            <li>
              Deploying the required building blocks, either if they already
              exist and need to be updated; or if they have been identified now.
            </li>
            <li>
              Installing the DS4SSCC high level architecture components required
              to evolve the current architecture towards the data space concept
              (in green in the high level architecture picture). If the
              components are not yet available, it is recommended to follow the
              latest developments of open source communities under the scope of
              data spaces and find collaboration with other cities and
              technological providers to agree on their development.
            </li>
            <li>
              Testing the proposed architecture with a simple use case and
              incrementally enlarge the experiment with more complicated
              scenarios.
            </li>
          </ul>
        </Card>

        <Card className={Styles.card}>
          <h3>Digital Twin</h3>
          <p>
            This case is an advanced scenario from the previous one, where the
            existing data platform is a virtual representation of the city or
            community by using the context of the data. Thus, the steps than
            previously mentioned are valid here. Other additional steps to
            advance the data space further as to enable new applications of the
            digital twins maybe:
          </p>
          <ul>
            <li>Determine a long-term digital vision.</li>
            <li>Develop a business case with the stakeholders.</li>
            <li>Roadmap including the data space enrichment.</li>
          </ul>
        </Card>
      </div>
    );
  };
