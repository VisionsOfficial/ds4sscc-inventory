import { PropsWithChildren } from "react";
import Styles from "./SharedDataFlows.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { TextWithFloatImage } from "../../../molecules/Texts/TextWithFloatImage/TextWithFloatImage";
import { CheckOutCard } from "../../../molecules/Cards/CheckOutCard/CheckOutCard";

type SharedDataFlowsProps = {};

export const SharedDataFlows =
  ({}: PropsWithChildren<SharedDataFlowsProps>) => {
    return (
      <div className={Styles.SharedDataFlows}>
        <Card className={Styles.card}>
          <h3>Lorem ipsum</h3>

          <TextWithFloatImage>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              alias incidunt natus, in libero mollitia numquam commodi
              voluptatem, sint sunt culpa non fugiat accusamus doloremque dicta
              optio hic velit quis? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sit, iure. Ipsa cum facilis a necessitatibus
              ullam iste laudantium ex distinctio illo, fugiat eligendi ad
              cumque, vero saepe, autem quaerat ratione.
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias recusandae laborum accusamus veritatis tenetur
              exercitationem odio amet reiciendis nisi consequuntur ab, eligendi
              laboriosam voluptatibus tempora eveniet? Debitis molestiae optio
              voluptatem. <br /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Blanditiis cupiditate alias, asperiores, et
              corporis voluptatum quis ratione, voluptas eaque praesentium hic
              consequuntur! Unde sequi aut tenetur molestiae delectus in esse!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              rerum quae quaerat suscipit nostrum? Cum fuga illum debitis quo
              necessitatibus aliquam molestiae nam. Eligendi eos asperiores quos
              repellat natus possimus.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ad nam harum, aut eius officia quasi fuga eos expedita
              ea, soluta deserunt sunt pariatur sequi aperiam, quo cumque
              consequuntur delectus! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Velit sequi dolorum perspiciatis eius nemo
              architecto numquam facere facilis ipsam ut laborum nam dolor
              debitis itaque, dignissimos, minus quaerat ab excepturi. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ex sint laborum
              veniam natus nulla atque fugiat officiis, illum laboriosam officia
              cumque ea perferendis asperiores magnam possimus soluta obcaecati
              tempore unde.
            </p>
          </TextWithFloatImage>
        </Card>

        <CheckOutCard category="governanceRules" variantColor="bgGray" />
      </div>
    );
  };
