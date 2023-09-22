import { PropsWithChildren } from "react";
import Styles from "./IncentivesAndAddedValue.module.scss";
import { TableInCard } from "../../../molecules/Cards/TableInCard/TableInCard";

type IncentivesAndAddedValueProps = {};

export const IncentivesAndAddedValue =
  ({}: PropsWithChildren<IncentivesAndAddedValueProps>) => {
    return (
      <div className={Styles.IncentivesAndAddedValue}>
        <ul>
          <li>
            Devise the cooperation to be <span>a win-win situation</span> for
            all involved. This may require reaching a compromise; however, it is
            key for the cooperation to be successful that every partner obtains
            an added value from it.
          </li>
          <li>
            Market-driven incentives (e.g., monetarisation, service provision)
            are important incentives for cooperation. However, it is also
            crucial to explicitly articulate other types of incentives (i.e.,
            organisational and societal) (see Table 15).{" "}
            <span>Societal incentives</span> are at the heart of the DS4SSCC’s
            shared vision and as such need to inform the data cooperation.
          </li>
        </ul>

        <TableInCard title="Monetary/Market-driven" />
        <TableInCard title="Organisational" />
        <TableInCard title="Societal" />
      </div>
    );
  };
