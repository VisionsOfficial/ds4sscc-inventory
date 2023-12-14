import { PropsWithChildren } from "react";
import Styles from "./ResourcesNeeded.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { ResourcesRequiredTable } from "../../../molecules/Tables/ResourcesRequiredTable/ResourcesRequiredTable";

type ResourcesNeededProps = {};

export const ResourcesNeeded =
  ({}: PropsWithChildren<ResourcesNeededProps>) => {
    return (
      <div className={Styles.ResourcesNeeded}>
        <Card className={Styles.card}>
          <div>
            <p>
              The template below (Table 14) helps you to identify resources
              required and associated organisational roles for the cooperation
              to be successful. It might be useful to consider the following
              questions:
            </p>
            <ul>
              <li>
                What expertise/ skills/ assets required to meet the cooperation
                objectives can each partner bring?
              </li>
              <li>
                What are the gaps in the resources and capabilities required?
                Could you leverage partners’ wider networks?
              </li>
            </ul>
          </div>

          <div>
            <p>Resources include:</p>
            <ul>
              <li>Cash flow/direct funding</li>
              <li>Staff time</li>
              <li>Datasets</li>
              <li>Infrastructure</li>
              <li>Products & services</li>
              <li>Access to expertise</li>
              <li>Access to networks</li>
            </ul>
          </div>

          <ResourcesRequiredTable />
        </Card>
      </div>
    );
  };
