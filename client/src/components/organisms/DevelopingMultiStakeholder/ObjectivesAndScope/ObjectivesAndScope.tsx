import { PropsWithChildren } from "react";
import Styles from "./ObjectivesAndScope.module.scss";
import { Card } from "../../../atoms/Card/Card";

type ObjectivesAndScopeProps = {};

export const ObjectivesAndScope =
  ({}: PropsWithChildren<ObjectivesAndScopeProps>) => {
    return (
      <div className={Styles.ObjectivesAndScope}>
        <Card className={Styles.card}>
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
            velit accusantium dolore enim expedita perferendis reprehenderit
            minima exercitationem nisi autem iure molestias aliquid omnis ipsum
            commodi numquam provident cupiditate impedit? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Iste nihil delectus voluptatem
            dolore at labore optio quam alias odio corrupti velit atque unde
            soluta libero dolor ratione, provident fugiat corporis. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Corporis rem, veniam
            esse ratione sed soluta quis consequuntur voluptate mollitia vel,
            provident debitis maiores nam saepe culpa exercitationem nobis quia.
            Voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ut reprehenderit accusantium non cum illo voluptatum molestias eaque
            exercitationem voluptatem quia inventore ducimus doloribus, autem
            maxime, fuga doloremque amet, natus animi?
          </p>
        </Card>
      </div>
    );
  };
