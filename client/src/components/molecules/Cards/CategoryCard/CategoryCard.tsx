import { PropsWithChildren } from "react";
import Styles from "./CategoryCard.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { DiscoverCategory } from "../../../../types";
import { Button } from "../../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../../../../hooks/useCategories";
import { openNewWindow } from "../../../../utils/openUrl";

type CategoryCardProps = {
  className?: string;
  category: DiscoverCategory;
  variantColor?: "bgGray";
};

export const CategoryCard = ({
  category,
  className,
  variantColor,
}: PropsWithChildren<CategoryCardProps>) => {
  const { contentCategory } = useCategories({ category });
  const navigate = useNavigate();

  const setProps = () => {
    let color = "";
    let classProps = className ? className : "";

    switch (variantColor) {
      case "bgGray":
        color = "bg-gray";
        break;

      default:
        break;
    }

    return [Styles.CategoryCard, classProps, color].join(" ");
  };

  return (
    <Card className={setProps()}>
      <div className={Styles.CategoryCardHeader}>
        {contentCategory?.image}
        <h3>{contentCategory?.title}</h3>
      </div>

      <Button
        className={Styles.btn}
        onClick={() => {
          if (contentCategory?.url) {
            openNewWindow(contentCategory.url);
            return;
          }

          if (contentCategory?.link) {
            navigate(contentCategory?.link);
          }
        }}
      >
        Discover
      </Button>
    </Card>
  );
};
