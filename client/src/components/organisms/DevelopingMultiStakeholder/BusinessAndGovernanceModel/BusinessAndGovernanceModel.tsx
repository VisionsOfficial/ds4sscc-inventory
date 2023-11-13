import { PropsWithChildren } from "react";
import Styles from "./BusinessAndGovernanceModel.module.scss";
import { OverwiewCooperationModelsTable } from "../../../molecules/Tables/OverwiewCooperationModelsTable/OverwiewCooperationModelsTable";
import { DetailedCooperationModelsTable } from "../../../molecules/Tables/DetailedCooperationModelsTable/DetailedCooperationModelsTable";
import { AdvantagesAndRisksCooperationModelsTable } from "../../../molecules/Tables/AdvantagesAndRisksCooperationModelsTable/AdvantagesAndRisksCooperationModelsTable";

type BusinessAndGovernanceModelProps = {};

export const BusinessAndGovernanceModel =
  ({}: PropsWithChildren<BusinessAndGovernanceModelProps>) => {
    return (
      <div className={Styles.BusinessAndGovernanceModel}>
        <p>
          In the context of DS4SSCC, data cooperation MUST align with the shared
          vision and principles set in section 2. The choice of cooperation
          models depends on the incentives identified for the cooperation as
          well as the preferred types of exchange(s) between partners. One or
          more cooperation models can be part of the use-case business model
          (see Tables 15, 16 & 17). Table 15 provides an overview of the
          characteristics of each of the cooperation models identified during
          the preparatory action, focusing on the type of exchanges (unilateral,
          bilateral and multilateral) and the approach adopted (business
          oriented, altruistic, cooperation, individual control). Table 16 sets
          out each of the cooperation models and scenarios when to implement
          them. Finally, Table 17 assesses the advantages and risks of each of
          these models.
        </p>

        <OverwiewCooperationModelsTable />

        <DetailedCooperationModelsTable />

        <AdvantagesAndRisksCooperationModelsTable />
      </div>
    );
  };
