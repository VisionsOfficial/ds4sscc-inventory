import { PropsWithChildren } from "react";
import Styles from "./HeaderPage.module.scss";
import { DiscoverCategory } from "../../../../types";
import { Title } from "../../../atoms/Title/Title";
import { useCategories } from "../../../../hooks/useCategories";

type HeaderPageProps = {
  category: DiscoverCategory;
  subInfoHeader?: boolean;
};

export const HeaderPage = ({
  category,
  subInfoHeader = false,
}: PropsWithChildren<HeaderPageProps>) => {
  const { contentCategory } = useCategories({ category: category });

  return (
    <header
      className={Styles.HeaderPage}
      style={subInfoHeader ? { paddingBottom: 100 } : {}}
    >
      {contentCategory?.imageVariant}
      <div className={Styles.content}>
        <Title>{contentCategory?.title}</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut impedit
          minus corrupti voluptate iste saepe repellat, necessitatibus
          voluptates pariatur harum quis error? Vero exercitationem cumque,
          provident laudantium iste delectus tempora?
        </p>
      </div>
    </header>
  );
};
