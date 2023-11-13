import { PropsWithChildren } from "react";
import Styles from "./ExistingScenarios.module.scss";
import { Card } from "../../../atoms/Card/Card";

type ExistingScenariosProps = {};

type Scenario = {
  title: "Greenfield" | "Brownfield" | "Digital Twin";
  description: string;
};

const SCENARIO_CONTENT: Scenario[] = [
  {
    title: "Greenfield",
    description: `There is not a well-defined strategic plan for digitalization in the city, and then it does not exist a data platform as such, perhaps just some isolated vertical digital services.<br/><br/> Data Spaces should be built from scratch without using any existing platform.`,
  },
  {
    title: "Brownfield",
    description: `There is a strategic plan for digitalization of the city and it is already in place. It implies in most of the cases, that the city holds a Smart City platform or Data platform or Data Lake with several vertical digital services integrated. Data space will be an evolution of an existing Data Platform/Data Lake/Smart City Platform in the city/community.`,
  },
  {
    title: "Digital Twin",
    description:
      "The city holds a Smart Solution which is a Digital Twin representation. It is an advanced scenario of brownfield case, where the cities and communities may have some simulation and predictions features beyond the usual data platform’s features.",
  },
];

export const ExistingScenarios =
  ({}: PropsWithChildren<ExistingScenariosProps>) => {
    return (
      <Card className={Styles.ExistingScenarios}>
        <h3>
          Creating a Data Space might happen with three types of scenarios in
          conformance with the three levels of digital maturity assessed in the{" "}
          <a
            href="https://living-in.eu/events/lordimas-your-digital-maturity-check"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lordimas
          </a>
          :
        </h3>

        <div className={Styles.scenarios}>
          {SCENARIO_CONTENT.map((scenario, index) => (
            <Card key={scenario.title + index} className={Styles.card}>
              <header>
                <p>Scenario {index + 1}</p>
                <h3>{scenario.title}</h3>
              </header>
              <p
                dangerouslySetInnerHTML={{ __html: scenario.description || "" }}
              ></p>
            </Card>
          ))}
        </div>

        <p>
          The Reference Architecture is main addressing the scenarios 2 and 3,
          as for scenario 1, it is required some previous recommended steps.
        </p>
      </Card>
    );
  };
