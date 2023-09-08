import { PropsWithChildren } from "react";
import Styles from "./CheckOutCard.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { DiscoverCategory } from "../../../../types";
import { useCategories } from "../../../../hooks/useCategories";
import { Button } from "../../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

type CheckOutCardProps = {
  className?: string;
  variantColor?: "bgGray";
  category: DiscoverCategory;
};

export const CheckOutCard = ({
  className,
  variantColor,
  category,
}: PropsWithChildren<CheckOutCardProps>) => {
  const { contentCategory } = useCategories({ category });
  const navigate = useNavigate();

  const setProps = () => {
    let color = "";
    let classNameProps = className ? className : "";

    switch (variantColor) {
      case "bgGray":
        color = "bg-gray";
        break;

      default:
        break;
    }

    return [Styles.CheckOutCard, classNameProps, color].join("");
  };

  const contentTextCard = () => {
    switch (category) {
      case "collectedUseCases":
        return "Find all use cases and their full descriptions.";

      default:
        break;
    }
  };

  return (
    <Card className={setProps()}>
      <div className={Styles.header}>
        <h3>Check out</h3>
        <p>{contentTextCard()}</p>
      </div>

      <Button
        className="btn-secondary"
        onClick={() => {
          if (contentCategory?.link) {
            navigate(contentCategory?.link);
          }
        }}
      >
        {contentCategory?.title}
      </Button>
    </Card>
  );
};
