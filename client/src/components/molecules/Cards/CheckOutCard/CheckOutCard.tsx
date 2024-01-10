import { PropsWithChildren } from "react";
import Styles from "./CheckOutCard.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { DiscoverCategory } from "../../../../types";
import { useCategories } from "../../../../hooks/useCategories";
import { Button } from "../../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { APP_LINKS } from "../../../../utils/appLinks";

type CheckOutCardProps = {
  className?: string;
  variantColor?: "bgGray";
  category: DiscoverCategory;
  sizing?: "mainContent";
};

export const CheckOutCard = ({
  className,
  variantColor,
  category,
  sizing,
}: PropsWithChildren<CheckOutCardProps>) => {
  const { contentCategory } = useCategories({ category });
  const navigate = useNavigate();

  const setProps = () => {
    let color = "";
    let classNameProps = className ? className : "";
    let size = "";

    switch (variantColor) {
      case "bgGray":
        color = Styles.bgGray;

      default:
        break;
    }

    switch (sizing) {
      case "mainContent":
        size = Styles.mainContent;
        break;

      default:
        break;
    }

    return [Styles.CheckOutCard, classNameProps, color, size].join(" ");
  };

  const contentTextCard = () => {
    switch (category) {
      case "collectedUseCases":
        return "Find all use cases and their full descriptions.";
      case "priorityDatasets":
        return "Discover the priority datasets, their application domains, and concrete examples of use cases.";
      case "governanceRules":
        return "Discover the roles and resposibilities of each.";
      case "responsibilities":
        return "Discover the responsibilities of each.";
      case "actionPlan":
        return "Discover the initiatives and resources implemented in our action plan.";
      case "actionPlanCheatsheet":
        return "";

      default:
        break;
    }
  };

  return (
    <Card className={setProps()}>
      <div className={Styles.header}>
        <h3>Check out</h3>
        {contentTextCard() && <p>{contentTextCard()}</p>}
      </div>

      <Button
        className="btn-secondary"
        onClick={() => {
          switch (category) {
            case "governanceRules":
              navigate(
                APP_LINKS.multiStakeholderGovernance.codeOfConducts +
                  "?governanceFramework"
              );
              return;
            case "responsibilities":
              navigate(
                APP_LINKS.multiStakeholderGovernance.codeOfConducts +
                  "?responsibilities"
              );
              return;
            default:
              break;
          }

          if (contentCategory?.link) {
            navigate(contentCategory?.link);
          }
        }}
      >
        {category === "governanceRules"
          ? "Governance rules"
          : category === "responsibilities"
          ? "Responsibilities"
          : contentCategory?.title}
      </Button>
    </Card>
  );
};
