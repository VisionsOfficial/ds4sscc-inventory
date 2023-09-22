import { PropsWithChildren } from "react";
import Styles from "./ObjectivesAndScope.module.scss";
import { Card } from "../../../atoms/Card/Card";

type ObjectivesAndScopeProps = {};

export const ObjectivesAndScope =
  ({}: PropsWithChildren<ObjectivesAndScopeProps>) => {
    return (
      <div className={Styles.ObjectivesAndScope}>
        <Card className={Styles.card}>
          <p>
            Before starting a cooperation on data sharing between stakeholders,
            it is crucial to understand the <span>local context</span> which
            creates a <span>specific need</span> for data exchange; and clearly
            define and agree on the <span>objectives and the scope</span> of the
            cooperation (see Table 14 for examples from WP2 use-cases). The
            ‘Why’ part of the canvas focuses on the context, added value and
            motivations and objectives of the cooperation. This part should be
            filled up first.
          </p>
          <p>
            To do so, it is important to keep the following elements in mind:
          </p>
          <ul>
            <li>
              Identify specific challenge/ question (local/ policy need) to
              solve rather than with data
            </li>
            <li>
              Define specific and measurable objectives in relation to the
              challenge. If the cooperation meets these objectives, it will act
              as a <span>proof of concept</span>. The objectives should be{" "}
              <span>
                concrete, relevant for all stakeholders and driven by local
                needs
              </span>{" "}
              (and not only by the desire to share and/or get data). This will
              ensure buy-in by relevant stakeholders.
            </li>
            <li>
              Establish the <span>value proposition</span> of the cooperation
              (e.g. reduction transaction costs, increase of data quality,
              provision of new data services).
            </li>
            <li>
              While the initial scope and objectives of the cooperation should
              be narrow, it is important to work on{" "}
              <span>a long-term concept that can be scaled up</span>. Make clear
              to all partners that the initiative is based on upscaling to
              encourage participation.
            </li>
          </ul>
        </Card>
      </div>
    );
  };
