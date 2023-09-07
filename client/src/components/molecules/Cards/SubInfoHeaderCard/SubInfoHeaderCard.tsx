import { PropsWithChildren } from "react";
import Styles from "./SubInfoHeaderCard.module.scss";
import { Card } from "../../../atoms/Card/Card";

type SubInfoHeaderCardProps = {
  className?: string;
};

export const SubInfoHeaderCard = ({
  className,
}: PropsWithChildren<SubInfoHeaderCardProps>) => {
  return (
    <Card
      className={`${Styles.SubInfoHeaderCard} ${className ? className : ""}`}
    >
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit aliquam
        quaerat assumenda? Voluptatibus, minus! Sequi maxime, soluta voluptate
        vel sit, explicabo voluptatibus, repudiandae facilis quisquam quidem
        quis modi at!
      </p>
    </Card>
  );
};
