import { PropsWithChildren } from "react";
import Styles from "./LocationTitle.module.scss";
import { UseCaseCollaborator } from "../../../../types";
import { APP_IMAGES_ASSETS } from "../../../../utils/appImagesAssets";

type LocationTitleProps = {
  collaborator: UseCaseCollaborator;
};

export const LocationTitle = ({
  collaborator,
}: PropsWithChildren<LocationTitleProps>) => {
  const setFlag = () => {
    switch (collaborator.flag) {
      case "be":
        return <img src={APP_IMAGES_ASSETS.flag.belgium} alt="Belgium flag" />;
      case "es":
        return <img src={APP_IMAGES_ASSETS.flag.spain} alt="Spain flag" />;
      case "fi":
        return <img src={APP_IMAGES_ASSETS.flag.finland} alt="Finland flag" />;
      case "fr":
        return <img src={APP_IMAGES_ASSETS.flag.france} alt="France flag" />;
      case "it":
        return <img src={APP_IMAGES_ASSETS.flag.italy} alt="Italy flag" />;
      case "nl":
        return (
          <img
            src={APP_IMAGES_ASSETS.flag.netherlands}
            alt="NetherLands flag"
          />
        );
      case "pt":
        return (
          <img src={APP_IMAGES_ASSETS.flag.portugal} alt="Portugal flag" />
        );
      case "si":
        return (
          <img src={APP_IMAGES_ASSETS.flag.slovenia} alt="Slovenia flag" />
        );
      case "se":
        return <img src={APP_IMAGES_ASSETS.flag.sweden} alt="Sweden flag" />;

      default:
        return null;
    }
  };

  return (
    <div className={Styles.LocationTitle}>
      {setFlag()}
      <span>{collaborator.location}</span>
    </div>
  );
};
