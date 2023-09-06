import { PropsWithChildren } from "react";
import Styles from "./CategoryCard.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { APP_IMAGES_ASSETS } from "../../../../utils/appImagesAssets";
import { DiscoverCategory } from "../../../../types";
import { Button } from "../../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { APP_LINKS } from "../../../../utils/appLinks";

type CategoryCardProps = {
  className?: string;
  category: DiscoverCategory;
};

export const CategoryCard = ({
  category,
  className,
}: PropsWithChildren<CategoryCardProps>) => {
  const navigate = useNavigate();

  const contentCard = (content: "image" | "title") => {
    switch (content) {
      case "image":
        switch (category) {
          case "multi-stakeholder governance scheme":
            return (
              <img
                src={
                  APP_IMAGES_ASSETS.icon.categories.multiStakeholderGovernance
                    .multiStakeholderGovernance
                }
                alt="Icon multi-stakeholder governance scheme"
              />
            );
          case "catalogue of specifications":
            return (
              <img
                src={
                  APP_IMAGES_ASSETS.icon.categories.catalogOfSpecifications
                    .catalogOfSpecifications
                }
                alt="Icon catalogue of specifications"
              />
            );
          case "reference architecture":
            return (
              <img
                src={
                  APP_IMAGES_ASSETS.icon.categories.referenceArchitecture
                    .referenceArchitecture
                }
                alt="Icon reference architecture"
              />
            );
          case "priority datasets":
            return (
              <img
                src={
                  APP_IMAGES_ASSETS.icon.categories.priorityDatasets
                    .priorityDatasets
                }
                alt="Icon priority datasets"
              />
            );
          case "collected use cases":
            return (
              <img
                src={
                  APP_IMAGES_ASSETS.icon.categories.collectedUseCases
                    .collectedUseCases
                }
                alt="Icon collected use cases"
              />
            );
          case "action plan":
            return (
              <img
                src={APP_IMAGES_ASSETS.icon.categories.actionPlan.actionPlan}
                alt="Icon action plan"
              />
            );

          default:
            return null;
        }

      case "title":
        switch (category) {
          case "multi-stakeholder governance scheme":
            return "Multi-stakeholder Governance Scheme";
          case "catalogue of specifications":
            return "Catalogue of Specifications";
          case "reference architecture":
            return "Reference Architecture";
          case "priority datasets":
            return "Priority Datasets";
          case "collected use cases":
            return "Collected Use Cases";
          case "action plan":
            return "Action Plan";

          default:
            return null;
        }

      default:
        return null;
    }
  };

  const setNavigate = () => {
    switch (category) {
      case "multi-stakeholder governance scheme":
        return APP_LINKS.multiStakeholderGovernance;
      case "catalogue of specifications":
        return APP_LINKS.catalogueOfSpecifications;
      case "reference architecture":
        return APP_LINKS.referenceArchitecture;
      case "priority datasets":
        return APP_LINKS.priorityDatasets;
      case "collected use cases":
        return APP_LINKS.collectedUseCases;
      case "action plan":
        return APP_LINKS.actionPlan;

      default:
        return "/";
    }
  };

  return (
    <Card className={`${Styles.CategoryCard} ${className ? className : ""}`}>
      <div className={Styles.CategoryCardHeader}>
        {contentCard("image")}
        <h3>{contentCard("title")}</h3>
      </div>

      <Button
        className={Styles.btn}
        onClick={() => {
          navigate(setNavigate());
        }}
      >
        Discover
      </Button>
    </Card>
  );
};
