import { useEffect, useState } from "react";
import { DiscoverCategory } from "../types";
import { APP_IMAGES_ASSETS } from "../utils/appImagesAssets";
import { APP_LINKS } from "../utils/appLinks";

type Props = {
  category: DiscoverCategory;
};

type ContentCategory = {
  image?: JSX.Element;
  imageVariant?: JSX.Element;
  title?: string;
  link?: string;
  url?: string;
};

export const useCategories = ({ category }: Props) => {
  const [contentCategory, setContentCategory] = useState<ContentCategory>();

  useEffect(() => {
    if (!category) return;

    switch (category) {
      case "multiStakeholderGovernanceScheme":
        setContentCategory((prev) => ({
          ...prev,
          image: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.multiStakeholderGovernance
                  .multiStakeholderGovernance
              }
              alt="Icon multi-stakeholder governance scheme"
            />
          ),
          imageVariant: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.multiStakeholderGovernance
                  .multiStakeholderGovernanceVariant
              }
              alt="Icon multi-stakeholder governance scheme"
            />
          ),
          title: "Multi-stakeholder Governance Scheme",
          link: APP_LINKS.multiStakeholderGovernance.index,
        }));
        break;
      case "catalogueOfSpecifications":
        setContentCategory((prev) => ({
          ...prev,
          image: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.catalogOfSpecifications
                  .catalogOfSpecifications
              }
              alt="Icon catalogue of specifications"
            />
          ),
          imageVariant: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.catalogOfSpecifications
                  .catalogOfSpecificationsVariant
              }
              alt="Icon catalogue of specifications"
            />
          ),
          title: "Catalogue of Specifications",
          link: APP_LINKS.catalogueOfSpecifications,
        }));
        break;
      case "referenceArchitecture":
        setContentCategory((prev) => ({
          ...prev,
          image: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.referenceArchitecture
                  .referenceArchitecture
              }
              alt="Icon reference architecture"
            />
          ),
          imageVariant: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.referenceArchitecture
                  .referenceArchitectureVariant
              }
              alt="Icon reference architecture"
            />
          ),
          title: "Reference Architecture",
          link: APP_LINKS.referenceArchitecture,
        }));
        break;
      case "priorityDatasets":
        setContentCategory((prev) => ({
          ...prev,
          image: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.priorityDatasets
                  .priorityDatasets
              }
              alt="Icon priority datasets"
            />
          ),
          imageVariant: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.priorityDatasets
                  .priorityDatasetsVariant
              }
              alt="Icon priority datasets"
            />
          ),
          title: "Priority Datasets",
          link: APP_LINKS.priorityDatasets,
        }));
        break;
      case "collectedUseCases":
        setContentCategory((prev) => ({
          ...prev,
          image: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.collectedUseCases
                  .collectedUseCases
              }
              alt="Icon collected use cases"
            />
          ),
          imageVariant: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.collectedUseCases
                  .collectedUseCasesVariant
              }
              alt="Icon collected use cases"
            />
          ),
          title: "Collected Use Cases",
          link: APP_LINKS.collectedUseCases,
        }));
        break;
      case "actionPlan":
        setContentCategory((prev) => ({
          ...prev,
          image: (
            <img
              src={APP_IMAGES_ASSETS.icon.categories.actionPlan.actionPlan}
              alt="Icon action plan"
            />
          ),
          title: "Action Plan",
          link: APP_LINKS.actionPlan,
        }));
        break;
      case "codeOfConducts":
        setContentCategory((prev) => ({
          ...prev,
          image: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.codeOfConduct.codeOfConduct
              }
              alt="Icon code of conducts"
            />
          ),
          imageVariant: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.codeOfConduct
                  .codeOfConductVariant
              }
              alt="Icon code of conducts"
            />
          ),
          title: "DS4SSCC Code of Conducts",
          link: APP_LINKS.multiStakeholderGovernance.codeOfConducts,
        }));
        break;
      case "DevelopingMultiStakeholder":
        setContentCategory((prev) => ({
          ...prev,
          image: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.developingMultiStakeholder
                  .developingMultiStakeholder
              }
              alt="Icon developing multi-stakeholder"
            />
          ),
          imageVariant: (
            <img
              src={
                APP_IMAGES_ASSETS.icon.categories.developingMultiStakeholder
                  .developingMultiStakeholderVariant
              }
              alt="Icon developing multi-stakeholder"
            />
          ),
          title: "Developing a mutli-stakeholder data cooperation for DS4SSCC",
          link: APP_LINKS.multiStakeholderGovernance.developing,
        }));
        break;
      case "GAIA-X":
        setContentCategory((prev) => ({
          ...prev,
          image: (
            <img
              src={APP_IMAGES_ASSETS.logo.gaiaX}
              alt="Logo GAIA-X"
              style={{ objectFit: "cover", aspectRatio: "2/1", width: 160 }}
            />
          ),
          title: "GAIA-X Trust Framework",
          url: "https://gaia-x.eu/wp-content/uploads/2022/05/Gaia-X-Trust-Framework-22.04.pdf",
        }));
        break;
      case "iShare":
        setContentCategory((prev) => ({
          ...prev,
          image: (
            <img
              src={APP_IMAGES_ASSETS.logo.iShare}
              alt="Logo iShare"
              style={{ objectFit: "cover", aspectRatio: "2/1", width: 160 }}
            />
          ),
          title: "iShare Trust Framework",
          url: "https://ishareworks.atlassian.net/wiki/spaces/IS/overview",
        }));
        break;

      default:
        break;
    }
  }, [category]);

  return { contentCategory };
};
