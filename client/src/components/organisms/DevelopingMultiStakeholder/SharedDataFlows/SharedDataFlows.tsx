import { PropsWithChildren } from "react";
import Styles from "./SharedDataFlows.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { CheckOutCard } from "../../../molecules/Cards/CheckOutCard/CheckOutCard";
import { APP_IMAGES_ASSETS } from "../../../../utils/appImagesAssets";
import { TextWithFloatImage } from "../../../molecules/Texts/TextWithFloatImage/TextWithFloatImage";

type SharedDataFlowsProps = {};

export const SharedDataFlows =
  ({}: PropsWithChildren<SharedDataFlowsProps>) => {
    return (
      <div className={Styles.SharedDataFlows}>
        <Card className={Styles.card}>
          <p>
            As well as identifying the data types and sources that will be
            required in the cooperation, it is crucial to determine the steps
            needed in the transformation of data throughout the lifecycle of
            data in the cooperation (e.g. data creation, storage, processing,
            analysis, visualisation and use). It will then support partners to
            decide which of these processes will be shared or done individually
            and allocate them.
          </p>

          <TextWithFloatImage
            src={APP_IMAGES_ASSETS.image.dataFlows}
            alt="Typical data flows processes"
            captionImage="Figure 3: Typical data flows processes"
            className={Styles.floatImg}
            openImageInNewTab
          >
            In Figure 3, we provided an overview of typical data flow processes
            that often need to be undertaken to exchange and generate value from
            data safely and ethically. This overview can support partners to map
            and establish the activities needed to process and reuse the
            different datasets identified in the previous step. It also enables
            to clearly identify the type of outputs shared (raw data, aggregated
            data, information, service).
          </TextWithFloatImage>

          <TextWithFloatImage
            src={APP_IMAGES_ASSETS.image.sharedProcessesInCooperation}
            alt="Shared processes in cooperation"
            floatDirection="left"
            captionImage="Figure 4: Shared processes in cooperation"
            openImageInNewTab
          >
            Once the specific data-related activities required in the
            cooperation have been mapped, partners should decide which of these
            activities should be conducted jointly or individually. This will
            allow partners to identify shared processes ranging from exchanging
            data to shared application (see Figure 4)
          </TextWithFloatImage>
        </Card>

        <CheckOutCard category="governanceRules" variantColor="bgGray" />
      </div>
    );
  };
