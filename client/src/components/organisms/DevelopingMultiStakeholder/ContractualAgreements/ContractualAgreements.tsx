import { PropsWithChildren } from "react";
import Styles from "./ContractualAgreements.module.scss";
import { Card } from "../../../atoms/Card/Card";

type ContractualAgreementsProps = {};

export const ContractualAgreements =
  ({}: PropsWithChildren<ContractualAgreementsProps>) => {
    return (
      <div className={Styles.ContractualAgreements}>
        <Card className={Styles.card}>
          <p>
            The DSSC is currently working on a building block dedicated to
            contractual agreement. The aim is to provide a catalogue of
            contractual templates and modules to support data transactions
            within data spaces, whether they are bilateral or multi-party
            agreements and thus ensuring consistency across DS. These will
            include reference license agreements and contractual modules with
            standardised clauses.
          </p>

          <div>
            <p>Here it is important to:</p>
            <ul>
              <li>
                Ensure technological sovereignty by using specific licensing
                requirements including{" "}
                <span>
                  clauses to release products built on data in public domains
                </span>{" "}
                or to ensure outcomes of data comes for free to community users
                that pooled their data with a restricted license for commercial
                use.
              </li>
              <li>
                Include data sharing{" "}
                <span>clauses in tender/procurement processes and SLA</span>.
                Data sharing clauses can cover data but also
                aggregation/analytical methods that are deployed so the data is
                not locked in specific products or platforms and legacy and
                continuity is ensured over time.
              </li>
              <li>
                Customise contracts with{" "}
                <span>detailed data specifications</span> (e.g., format,
                granularity, etc.)
              </li>
              <li>Use open source/ standard protocols</li>
              <li>
                Use SLA provides a legal set of requirements for the service
                offering and ensures quality and accountability.
              </li>
              <li>
                Consider using initial NDA before final sharing agreement to be
                able to see if data is useful or not
              </li>
            </ul>
          </div>
        </Card>
      </div>
    );
  };
